import { LiveFragment } from '#graphql';
import React, { FunctionComponent } from 'react';

interface LiveSliceProps extends LiveFragment {}

export const LiveSlice: FunctionComponent<LiveSliceProps> = ({
  title,
  embed,
}) => {
  if (!embed) {
    return null;
  }

  return (
    <div className='relative pt-20'>
      <div
        className='absolute top-0 left-0 right-0 bg-gray-50 bottom-20 md:bottom-44 lg:bottom-72'
        style={{ zIndex: -1 }}
      />
      <div className='container'>
        <div className='mb-10'>
          <h1 className='text-2xl font-bold md:text-7xl'>{title}</h1>
        </div>
        <div className='overflow-hidden rounded-lg shadow aspect-w-16 aspect-h-9'>
          <iframe
            width='560'
            height='315'
            src={embed as string}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
