import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import backgroundImage from "@/images/background.jpg";

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 overflow-hidden -top-48 -bottom-14 bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="max-w-2xl mx-auto lg:max-w-4xl lg:px-12">
          <h1 className="text-5xl font-bold tracking-tighter text-blue-600 font-display sm:text-7xl">
            Dear Time..
          </h1>
          <div className="mt-6 space-y-6 text-2xl tracking-tight text-blue-900 font-display">
            <p>
              The world I live in does not value you. It wastes you on futile,
              intrinsic things, seemingly trying to quicken your passage. As
              Christians, we need to be better stewards - you are a precious,
              finite gift that God gave us temporarily.
            </p>
            <p>
              Join us this November. We will open Ephesians 5:15 and glean how
              to walk judiciously and redeem the fleeting time we have left.
            </p>
          </div>
          <Button
            target="_blank"
            href="https://www.youtube.com/c/FirstRussianBaptistChurch/live"
            className="w-full mt-10 sm:hidden"
          >
            Watch Live
          </Button>
          <dl className="grid grid-cols-2 mt-10 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Speakers", "5"],
              ["Church", "FRBC"],
              ["Location", "Virginia"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
