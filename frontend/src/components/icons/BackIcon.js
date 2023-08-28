import React from 'react';

function BackIcon({ size = 24, color = 'currentColor', fill }) {
  return (
    <svg
      fill={fill ? fill : 'none'}
      stroke={color}
      strokeWidth={2.5}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      width={size}
      height={size}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
    </svg>
  );
}

export default BackIcon;
