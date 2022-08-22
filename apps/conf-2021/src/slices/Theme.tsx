import { ThemeFragment } from '#graphql';
import React, { FunctionComponent } from 'react';

interface ThemeSliceProps extends ThemeFragment {}

export const ThemeSlice: FunctionComponent<ThemeSliceProps> = ({
  title,
  subtitle,
  embed,
}) => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
        <div className='space-y-5 sm:space-y-4'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
            {title}
          </h2>
          <p className='text-xl text-gray-500 whitespace-pre-wrap'>
            {subtitle}
          </p>
        </div>
        <div className='lg:col-span-2'>
          <div className='overflow-hidden rounded-lg shadow aspect-w-16 aspect-h-9'>
            {embed && (
              <iframe
                width='100%'
                height='100%'
                src={embed}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
