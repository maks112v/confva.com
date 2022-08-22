import { ScheduleFragment } from '#graphql';
import { Badge } from '@components/Badge';
import { classNames } from '@utils/classnames';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import relativeTime from 'dayjs/plugin/relativeTime';
import _ from 'lodash';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { RiTimeLine } from 'react-icons/ri';

dayjs.extend(isBetween);
dayjs.extend(relativeTime);

interface ScheduleSliceProps extends ScheduleFragment {}

export const ScheduleSlice: FunctionComponent<ScheduleSliceProps> = ({
  title,
  events,
}) => {
  const [selected, setSelected] = useState<number>();

  const days = React.useMemo(() => {
    const eventsWithDay = events?.map((event) => ({
      ...event,
      day: dayjs(event?.startTime)?.startOf('day')?.valueOf(),
    }));

    const groupedByDay = _.groupBy(
      eventsWithDay,
      (item: typeof eventsWithDay[0]) => item?.day
    );

    const isToday = Object.keys(groupedByDay)?.find(
      (item) => Number(item) === dayjs()?.startOf('day')?.valueOf()
    );

    if (isToday) {
      setSelected(Number(isToday));
    } else {
      setSelected(Number(Object.keys(groupedByDay)?.[0]));
    }

    return groupedByDay;
  }, [events]);

  return (
    <div className='container' id='schedule'>
      <h2 className='text-3xl font-extrabold tracking-tight text-center sm:text-4xl'>
        {title}
      </h2>
      <div className='mt-12'>
        <div className='border-b border-gray-200'>
          <nav
            className='flex items-center px-4 -mb-px space-x-8 overflow-scroll md:justify-center no-scrollbar'
            aria-label='Tabs'
          >
            {Object.keys(days).map((date: string) => {
              const diff = dayjs(Number(date)).diff(
                dayjs()?.startOf('day'),
                'hours'
              );

              const isPassed = diff < 0;

              return (
                <button
                  onClick={() => setSelected(Number(date))}
                  key={date as string}
                  className={classNames(
                    selected === Number(date) ? 'border-blue-400' : '',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex flex-col items-center'
                  )}
                >
                  <span
                    className={classNames(
                      isPassed
                        ? 'text-gray-500'
                        : selected === Number(date)
                        ? 'text-gray-800'
                        : 'text-gray-600',
                      'text-base md:text-lg'
                    )}
                  >
                    {dayjs(Number(date))?.format('dddd')}
                  </span>
                  <span
                    className={classNames(
                      isPassed
                        ? 'text-gray-500'
                        : selected === Number(date)
                        ? 'text-gray-900'
                        : 'text-gray-700',
                      'text-3xl  md:text-4xl'
                    )}
                  >
                    {dayjs(Number(date))?.format('DD MMM')}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      <div className='grid gap-4 py-5 md:grid-cols-2 lg:grid-cols-3'>
        {days?.[selected || 0]?.map((item, idx, arr) => {
          return (
            <ScheduleItem key={`${item?.id}-${idx}`} data={[item, idx, arr]} />
          );
        })}
      </div>
    </div>
  );
};

interface ScheduleItemProps {
  data: [ScheduleFragment['events'][0], number, ScheduleFragment['events']];
}

export const ScheduleItem: FunctionComponent<ScheduleItemProps> = ({
  data: [item, idx, arr],
}) => {
  const [diff, setDiff] = useState(
    dayjs(item?.startTime).diff(dayjs(), 'minute')
  );

  const { isBetween, isSoon, endTime, fromNow } = React.useMemo(() => {
    const nextEvent = arr[idx + 1];

    const endTime = item?.endTime || nextEvent?.startTime;

    const isBetween = dayjs().isBetween(
      dayjs(item?.startTime).add(1, 'minute'),
      endTime
    );

    const isSoon = diff > 0 && diff < 60;

    const fromNow = dayjs(item?.startTime).fromNow();

    return {
      isBetween,
      isSoon,
      endTime,
      fromNow,
    };
  }, [diff]);

  console.log({
    diff,
    isBetween,
    isSoon,
    endTime,
    fromNow,
  });

  const getDiff = () => {
    setDiff(dayjs(item?.startTime).diff(dayjs(), 'minutes'));
  };

  useEffect(() => {
    let timeout = setInterval(() => {
      getDiff();
    }, 1000);
    return () => {
      clearInterval(timeout);
    };
  }, [isBetween, diff]);

  return (
    <div
      key={`${item?.id}-${idx}`}
      className={classNames(
        isSoon ? 'border-yellow-400' : isBetween && 'border-blue-400',
        'p-4 space-y-4 border-2 flex flex-col border-gray-200 rounded'
      )}
    >
      <div>
        {isBetween ? (
          <Badge variant='blue'>Current</Badge>
        ) : diff < 0 ? (
          <Badge variant='gray'>Ended</Badge>
        ) : (
          isSoon && (
            <Badge variant='yellow' className='capitalize'>
              {fromNow}
            </Badge>
          )
        )}
      </div>
      <div
        key={`${item?.id}-content`}
        className='flex flex-col flex-1 space-y-1'
      >
        <h4 className='text-2xl font-bold text-gray-900'>{item?.title}</h4>
        {item?.subtitle && <p className='text-gray-600'>{item?.subtitle}</p>}
      </div>
      <div className='flex items-center space-x-2'>
        <RiTimeLine
          className={classNames(
            isSoon
              ? 'text-yellow-500'
              : diff > 0 || isBetween
              ? 'text-blue-500'
              : 'text-gray-600',
            'w-5 h-5 '
          )}
        />
        <p className='font-bold text-gray-800'>
          {item?.maybe && (
            <span>
              {dayjs(item?.startTime)?.format('hh:mm')}
              <span className='text-sm text-gray-400'>ish</span>{' '}
              {dayjs(item?.startTime)?.format('a')} -{' '}
            </span>
          )}
          {[
            item?.maybe ? null : dayjs(item?.startTime)?.format('hh:mm a'),
            endTime && dayjs(endTime)?.format('hh:mm a'),
          ]
            ?.filter((item) => !!item)
            ?.join(' - ')}
        </p>
      </div>
    </div>
  );
};
