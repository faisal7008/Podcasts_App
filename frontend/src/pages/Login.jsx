import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, login } from '../features/userSlice';
import ErrorContainer from '../components/handlers/ErrorContainer';
import Loader from '../components/handlers/Loader';
import { GoogleIcon, MainLogoIcon } from '../components/icons';
import { toast } from 'react-toastify';
import GoBack from '../components/handlers/GoBack';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        className: "m-2 font-sans rounded shadow font-medium text-color-dark md:m-0"
      });
      dispatch(clearError())
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    dispatch(clearError());
  };

  return (
    <div className='h-full bg-gradient-to-tl from-color-dark to-color-bg w-full py-16 px-4'>
      {/* <ErrorContainer /> */}
      <GoBack navigateToHome={true} />
      <div className='flex flex-col gap-4 items-center justify-center'>
        <div className='w-full flex gap-1 justify-center items-center'>
          <MainLogoIcon />
          <h1 className='text-2xl md:text-3xl text-color-font font-mono tracking-tight font-semibold'>
            Podcasts
          </h1>
        </div>
        <div className='bg-white shadow rounded lg:w-1/3  md:w-2/3 w-full p-6 sm:p-10'>
          <p
            tabIndex={0}
            aria-label='Login to your account'
            className='text-2xl font-extrabold leading-6 text-gray-800'
          >
            Login to your account
          </p>
          <p className='text-sm mt-3 font-medium leading-none text-gray-500'>
            {"Don't have an account?"}
            <span
              tabIndex={0}
              aria-label='Sign up here'
              className='text-sm font-medium leading-none underline text-gray-800 cursor-pointer'
            >
              {' '}
              <Link to={'/signup'}> Sign up here </Link>
            </span>
          </p>
          <button
            aria-label='Continue with google'
            className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 bg-color-font border rounded-lg border-gray-700 flex justify-center items-center w-full mt-4'
          >
            <GoogleIcon/>
            <p className='text-sm md:text-base font-medium ml-4 text-gray-700'>
              Continue with Google
            </p>
          </button>
          <div className='w-full flex items-center justify-between py-4'>
            <hr className='w-full bg-gray-400' />
            <p className='text-sm md:text-base font-medium leading-4 px-2.5 text-gray-400'>OR</p>
            <hr className='w-full bg-gray-400  ' />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='text-sm font-medium leading-none text-gray-800'>
                Email
              </label>
              <input
                required
                aria-label='enter email adress'
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
              />
            </div>
            <div className='mt-6  w-full'>
              <label className='text-sm font-medium leading-none text-gray-800'>
                Password
              </label>
              <div className='relative flex items-center justify-center'>
                <input
                  required
                  aria-label='enter Password'
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  className='bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                />
              </div>
            </div>
            <div className='mt-8'>
              <button
                type='submit'
                className='focus:ring-2 focus:ring-offset-2 focus:ring-color-bg text-sm font-semibold leading-none text-white focus:outline-none bg-color-bg border rounded hover:bg-color-card py-4 w-full'
              >
                {status === 'loading' ? <Loader /> : <>Log in</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
