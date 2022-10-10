/* eslint-disable @next/next/no-html-link-for-pages */
import {
  Page,
  PageDocument,
  PageQuery,
  PagesDocument,
  PagesQuery,
} from "#graphql";
import { createHttpLink } from "@apollo/client";
import { graphClient } from "@data/graphcms";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { FooterSlice } from "@slices/Footer";
import { SliceResolver } from "@slices/Resolver";
import { GetStaticPaths, GetStaticProps } from "next";
import { Fragment, FunctionComponent } from "react";
interface PageBuilderProps extends Page {
  preview?: boolean;
}

const PageBuilder: FunctionComponent<PageBuilderProps> = ({
  preview,
  title,
  slices,
}) => {
  return (
    <>
      {/* <Navbar /> */}
      <SliceResolver slices={slices} />
      <FooterSlice />
      {preview && (
        <div
          aria-live="assertive"
          className="fixed inset-0 z-50 flex items-end px-4 py-6 pointer-events-none sm:items-start sm:p-6"
        >
          <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <Transition
              show={preview}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <div className="flex items-center">
                    <div className="flex justify-between flex-1 w-0">
                      <p className="flex-1 w-0 text-sm font-medium text-gray-900">
                        Preview Mode
                      </p>
                    </div>
                    <div className="flex flex-shrink-0 ml-4">
                      <a
                        href="/api/exit"
                        className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        // onClick={() => {
                        //   setShow(false)
                        // }}
                      >
                        <span className="sr-only">Close</span>
                        <XIcon className="w-5 h-5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      )}
    </>
  );
};

export default PageBuilder;

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await graphClient.query<PagesQuery>({
    query: PagesDocument,
  });

  return {
    paths: pages?.data?.pages?.map((item) => ({
      params: {
        path: item?.slug?.split("/")?.filter((item) => !!item),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (ctx?.preview) {
    const link = createHttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPH_CMS,
      headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_PREVIEW_TOKEN}`,
      },
    });
    graphClient.setLink(link);

    const res = await graphClient.query<PageQuery>({
      query: PageDocument,
      variables: {
        slug: (ctx?.previewData as any)?.slug,
      },
    });

    return {
      props: {
        ...res?.data?.page,
        preview: true,
      },
    };
  }

  const path = `/${(ctx?.params?.path as [string])?.join("/") || ""}`;

  const res = await graphClient.query<PageQuery>({
    query: PageDocument,
    variables: {
      slug: path,
    },
  });

  return {
    props: {
      ...res?.data?.page,
    },
  };
};
