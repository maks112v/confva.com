import { NavbarFragment } from "#graphql";
import { makeVar } from "@apollo/client";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FunctionComponent } from "react";
interface NavbarProps extends NavbarFragment {}

export const showNavBar = makeVar(true);

export const Navbar: FunctionComponent<NavbarProps> = ({ logo, items }) => {
  return (
    <Transition show={showNavBar()}>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-60 backdrop-blur-md backdrop-filter">
        <div className="container flex items-center w-full py-3 mx-auto my-2">
          <Link href="/">
            <a className="duration-200 cursor-pointer hover:opacity-60">
              <img src={logo?.url} className="w-10 h-10" />
            </a>
          </Link>
          <div className="flex-1" />
          <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-12">
            {items?.map((item) =>
              item?.__typename === "Page" ? (
                <Link key={item?.id} href={item?.slug} passHref>
                  <a className="font-semibold duration-200 text-shades-90 hover:opacity-60">
                    {item?.title}
                  </a>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>
    </Transition>
  );
};
