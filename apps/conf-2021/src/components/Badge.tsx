import { classNames } from '@utils/classnames';
import React, { FunctionComponent } from 'react';

const VARIANTS = {
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  red: 'bg-red-100 text-red-800',
  gray: 'bg-gray-100 text-gray-800',
  yellow: 'bg-yellow-100 text-yellow-800',
};

type VARIANTS_TYPE = keyof typeof VARIANTS;

interface BadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  variant?: VARIANTS_TYPE;
}

export const Badge: FunctionComponent<BadgeProps> = ({
  variant = 'gray',
  className,
  children,
  ...rest
}) => {
  return (
    <span
      className={classNames(
        'inline-flex items-center  px-2.5 py-0.5 rounded-md text-sm font-medium',
        VARIANTS[variant],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
};
