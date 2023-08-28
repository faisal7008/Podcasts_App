import React from 'react';

const SaveIcon = ({ size = 24, color = 'currentColor', fill }) => {
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
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
      />
    </svg>
  );
};

export default SaveIcon;
