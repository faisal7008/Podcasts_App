import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearError, signup } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/handlers/Loader';
import { MainLogoIcon } from '../components/icons';
import { toast } from 'react-toastify';
import GoBack from '../components/handlers/GoBack';

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { status, error, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        //position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    dispatch(signup({ name, email, password }));
    dispatch(clearError());
  };
  return (
    <div className='h-full bg-gradient-to-tl from-color-dark to-color-bg w-full py-16 px-4'>
      <GoBack navigateToHome={true} />
      <div className='flex flex-col gap-4 items-center justify-center'>
        <div className='w-full flex gap-1 justify-center items-center'>
          <MainLogoIcon />
          <h1 className='text-2xl md:text-3xl text-color-font font-mono tracking-tight font-semibold'>
            Podcasts
          </h1>
        </div>
        <div className='bg-white shadow rounded lg:w-1/3 md:w-2/3 w-full p-10'>
          <p
            tabIndex={0}
            aria-label='Create your account'
            className='text-2xl font-extrabold leading-6 text-gray-800'
          >
            Create your account
          </p>
          <p className='text-xs md:text-sm mt-4 font-medium leading-none text-gray-500'>
            Already have an account?{' '}
            <span
              tabIndex={0}
              aria-label='Sign up here'
              className='text-xs md:text-sm font-medium leading-none underline text-gray-800 cursor-pointer'
            >
              {' '}
              <Link to={'/login'}> Login here </Link>
            </span>
          </p>
          <form onSubmit={handleSubmit}>
            <div className='mt-6'>
              <label className='text-xs md:text-sm font-medium leading-none text-gray-800'>
                Fullname
              </label>
              <input
                required
                aria-label='enter fullname'
                type='text'
                onChange={(e) => setName(e.target.value)}
                className='bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none text-xs md:text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
              />
            </div>
            <div className='mt-6'>
              <label className='text-xs md:text-sm font-medium leading-none text-gray-800'>
                Email
              </label>
              <input
                required
                aria-label='enter email adress'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                className='bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none text-xs md:text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
              />
            </div>
            <div className='mt-6'>
              <label className='text-xs md:text-sm font-medium leading-none text-gray-800'>
                Password
              </label>
              <div className='relative flex items-center justify-center'>
                <input
                  required
                  aria-label='enter Password'
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                  className='bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none text-xs md:text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                />
              </div>
            </div>
            <div className='mt-8'>
              <button
                aria-label='signup'
                type='submit'
                className='focus:ring-2 focus:ring-offset-2 focus:ring-color-bg text-sm font-semibold leading-none text-white focus:outline-none bg-color-bg border rounded hover:bg-color-card py-4 w-full'
              >
                {status === 'loading' ? <Loader /> : <>Sign up</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
