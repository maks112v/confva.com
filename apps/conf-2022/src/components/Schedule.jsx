import { Tab } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background.jpg";

const schedule = [
  {
    date: "November 24",
    dateTime: "2022-11-24",
    summary:
      "We will gather to eat in the second building and then move to the main building for the conference.",
    timeSlots: [
      {
        name: "Registration",
        description:
          "Come early to get your name tag and get to know other attendees.",
        start: "6:00PM",
      },
      {
        name: "Church Service",
        description: "Join us for the opening service of the conference.",
        start: "7:00PM",
      },
      {
        name: "Dinner",
        description:
          "Join us for dinner after the service. Grab a plate, socialize, and make sure you have a place to stay at.",
        start: null,
      },
    ],
  },
  {
    date: "November 25",
    dateTime: "2022-11-25",
    summary:
      "Morning service, seminars, questions and asnwers, and an evening bonfire.",
    timeSlots: [
      {
        name: "Morning Service",
        description:
          "Bring your Bible! We will start the morning praising Jesus and listening to great sermons.",
        start: "10:00AM",
        end: "12:30PM",
      },
      {
        name: "Lunch",
        description: null,
        start: "12:30PM",
      },
      {
        name: "Seminar",
        description:
          "Юрий Сычев - Практическое христианство и библейская этика",
        start: "2:00PM",
        end: "3:00PM",
      },
      {
        name: "Seminar",
        description: "Ткачук Петр jr",
        start: "3:00PM",
        end: "4:00PM",
      },
      {
        name: "Coffee Break",
        description: null,
        start: "4:00PM",
        end: "5:00PM",
      },
      {
        name: "Q&A",
        description: "Questions and Answers with Олег Артемьев",
        start: "5:00PM",
        end: "7:00PM",
      },
      {
        name: "Dinner",
        description: null,
        start: "7:00PM",
        end: "8:00PM",
      },
      {
        name: "Bonfire",
        description: "Join us for a bonfire and a time of fellowship.",
        start: "8:00PM",
        end: "11:00PM",
      },
    ],
  },
  {
    date: "November 26",
    dateTime: "2022-11-06",
    summary:
      "Church service, lunch, and for those who want to stay longer, coffee and fellowship.",
    timeSlots: [
      {
        name: "Morning Service",
        description:
          "Our final service with great sermons and a moment to reflect on the conference.",
        start: "10:00AM",
        end: "1:00PM",
      },
      {
        name: "Lunch",
        description: null,
        start: "1:00PM",
        end: "2:00PM",
      },
      {
        name: "Coffee Night",
        description: "Join us for coffee and fellowship.",
        start: "5:00PM",
      },
    ],
  },
];

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let smMediaQuery = window.matchMedia("(min-width: 640px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(smMediaQuery);
    smMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      smMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <Tab.Group
      as="div"
      className="grid max-w-2xl grid-cols-1 mx-auto gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === "vertical"}
    >
      <Tab.List className="flex pb-4 pl-4 -mx-4 overflow-x-auto gap-x-4 gap-y-10 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                "relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0",
                dayIndex !== selectedIndex && "opacity-70"
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  );
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        "space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} EST`}
        >
          {timeSlotIndex > 0 && (
            <div className="w-48 h-px mx-auto mb-8 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>
            {timeSlot.end && (
              <>
                {" "}
                -{" "}
                <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
                  {timeSlot.end}
                </time>{" "}
                EST
              </>
            )}
          </p>
        </li>
      ))}
    </ol>
  );
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  );
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="text-4xl font-medium tracking-tighter text-blue-600 font-display sm:text-5xl">
            Our three days together will be packed with inspiring sermons, late
            night fellowship, and food.
          </h2>
          <p className="mt-4 text-2xl tracking-tight text-blue-900 font-display">
            This will be time well spent, with great people, plenty of smiles,
            and God-inspired Scripture.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 overflow-hidden -top-40 -bottom-32 bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt="background image"
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  );
}
