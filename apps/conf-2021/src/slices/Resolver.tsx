import { PageSlices } from '#graphql';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import React, { FunctionComponent } from 'react';
import { HeroSlice } from './Hero';
import { LiveSlice } from './Live';
import { Navbar } from './Navbar';
import { QuestionsSlice } from './Questions';
import { SpeakersSlice } from './Speakers';
import { ThemeSlice } from './Theme';

const ScheduleSlice: any = dynamic(
  () => import('./Schedule').then((mod) => mod.ScheduleSlice) as any,
  { ssr: false }
);

interface SliceResolverProps {
  slices: PageSlices[];
}

export const SliceResolver: FunctionComponent<SliceResolverProps> = ({
  slices,
}) => {
  return (
    <>
      {slices?.map((slice) => {
        switch (slice?.__typename) {
          case 'HeroSlice':
            return <HeroSlice />;
          case 'SeoSlice':
            return (
              <NextSeo
                title={slice?.title || ''}
                openGraph={{
                  images: slice?.images?.map((item) => ({
                    url: item?.url as string,
                    width: item?.width as number,
                    height: item?.height as number,
                  })),
                }}
              />
            );
          case 'SpeakersSlice':
            return <SpeakersSlice {...slice} />;
          case 'ScheduleSlice':
            return <ScheduleSlice {...slice} />;
          case 'ThemeSlice':
            return <ThemeSlice {...slice} />;
          case 'LiveSlice':
            return <LiveSlice {...slice} />;
          case 'NavbarMatter':
            return <Navbar {...slice} />;
          case 'SpacerAtom':
            return <div style={{ height: slice?.height as number }} />;
          case 'QuestionSlice':
            return <QuestionsSlice />;
          default:
            return null;
        }
      })}
    </>
  );
};
