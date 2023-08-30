import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categories } from '../../constants/Categories';

export default function CategoryCard() {
  const { podcasts } = useSelector((state) => state.podcasts);

  return (
    <div className='grid grid-cols-2 w-full gap-6'>
      {categories?.map((category) => (
        <Link
          to={`/category/${category}`}
          state={{
            podcastData: podcasts?.filter((pod) => pod.category === category),
            title: category,
          }}
          key={category}
          className='relative cursor-pointer'
        >
          <div className='h-32 rounded-lg shadow-lg bg-color-card'></div>
          <div className='absolute bottom-0 left-0 p-4 text-sm md:text-base text-color-font font-medium'>
            {category}
          </div>
        </Link>
      ))}
    </div>
  );
}
