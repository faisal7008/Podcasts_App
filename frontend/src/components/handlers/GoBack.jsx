import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackIcon } from '../icons';

export default function GoBack({navigateToHome=false}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(navigateToHome ? '/' : -1)}
      className={`p-1.5 cursor-pointer rounded-full hover:bg-color-card/80 ${navigateToHome && 'absolute bg-color-card top-4 left-4'}`}
    >
      <BackIcon size={18} />
    </div>
  );
}
