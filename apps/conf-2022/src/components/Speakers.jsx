import { Tab } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/future/image";
import { useEffect, useId, useState } from "react";

import { Container } from "@/components/Container";
import { DiamondIcon } from "@/components/DiamondIcon";

import antonArtemyevImage from "@/images/avatars/anton-artemyev.jpg";
import olegArtemyevImage from "@/images/avatars/oleg-artemyev.jpg";
import peterTkachukJrImage from "@/images/avatars/peter-tkachuk-jr.jpg";
import uriSychevImage from "@/images/avatars/uri-sychev.jpg";
import vladimirMinyakovImage from "@/images/avatars/vladimir-minyakov.jpg";

const days = [
  {
    name: "Opening Day",
    date: "November 24",
    dateTime: "2022-11-24",
    speakers: [
      {
        name: "Владимир Миняков",
        description: "Kansas City, KA",
        image: vladimirMinyakovImage,
      },
      {
        name: "Олег Артемьев",
        description: "Harrisonburg, VA",
        image: olegArtemyevImage,
      },
    ],
  },
  {
    name: "Speakers & Seminars",
    date: "November 25",
    dateTime: "2022-11-25",
    speakers: [
      {
        name: "Антон Артемьев",
        description: "Harrisonburg, VA",
        image: antonArtemyevImage,
      },
      {
        name: "Владимир Миняков",
        description: "Kansas City, KA",
        image: vladimirMinyakovImage,
      },
      {
        name: "Юрий Сычев",
        description: "Harrisonburg, VA",
        image: uriSychevImage,
      },
      {
        name: "Ткачук Петр jr.",
        description: "San Francisco, CA",
        image: peterTkachukJrImage,
      },
      {
        name: "Олег Артемьев",
        description: "Harrisonburg, VA",
        image: olegArtemyevImage,
      },
    ],
  },
  {
    name: "Final Day",
    date: "November 26",
    dateTime: "2022-11-06",
    speakers: [
      {
        name: "Петр Ткачук jr",
        description: "San Francisco, CA",
        image: peterTkachukJrImage,
      },
      {
        name: "Владимир Миняков",
        description: "Kansas City, KA",
        image: vladimirMinyakovImage,
      },
    ],
  },
];

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Speakers() {
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2
            id="speakers-title"
            className="text-4xl font-medium tracking-tighter text-blue-600 font-display sm:text-5xl"
          >
            Speakers
          </h2>
          {/* <p className="mt-4 text-2xl tracking-tight text-blue-900 font-display">
            Learn from the experts on the cutting-edge of deception at the most
            sinister companies.
          </p> */}
        </div>
        <Tab.Group
          as="div"
          className="grid items-start grid-cols-1 mt-14 gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === "vertical"}
        >
          <div className="relative flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid justify-start grid-flow-col px-4 auto-cols-auto gap-x-8 gap-y-10 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        "absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block",
                        dayIndex === selectedIndex
                          ? "fill-blue-600 stroke-blue-600"
                          : "fill-transparent stroke-slate-400"
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          "font-mono text-sm",
                          dayIndex === selectedIndex
                            ? "text-blue-600"
                            : "text-slate-500"
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                      >
                        {day.date}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="rounded-4xl group relative h-[17.5rem] transform overflow-hidden">
                      <div
                        className={clsx(
                          "rounded-4xl absolute top-0 left-0 right-4 bottom-6 border transition duration-300 group-hover:scale-95 xl:right-6",
                          [
                            "border-blue-300",
                            "border-indigo-300",
                            "border-sky-300",
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 object-cover object-top w-full h-full transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          unoptimized
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 text-xl font-bold tracking-tight font-display text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.description}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  );
}
