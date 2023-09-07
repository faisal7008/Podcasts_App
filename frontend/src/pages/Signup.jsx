import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearError, signup } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/handlers/Loader';
import { EyeCloseIcon, EyeOpenIcon, MainLogoIcon } from '../components/icons';
import { toast } from 'react-toastify';
import GoBack from '../components/handlers/GoBack';

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
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
        className: 'm-2 font-sans rounded shadow font-medium text-color-dark md:m-0',
      });
      dispatch(clearError());
    }
  }, [error]);

  useEffect(() => {
    if (errorMsg) {
      toast.error(errorMsg, {
        //position: toast.POSITION.BOTTOM_RIGHT,
        className: 'm-2 font-sans rounded shadow font-medium text-color-dark md:m-0',
      });
      setErrorMsg('');
    }
  }, [errorMsg]);

  // const resetData = () => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  //   setErrorMsg('');
  // };

  const validatePassword = () => {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    if (password.length < minLength) {
      setErrorMsg('Password must be at least 8 characters long.');
      return false;
    }

    if (!uppercaseRegex.test(password)) {
      setErrorMsg('Password must contain at least one uppercase letter.');
      return false;
    }

    if (!lowercaseRegex.test(password)) {
      setErrorMsg('Password must contain at least one lowercase letter.');
      return false;
    }

    if (!numberRegex.test(password)) {
      setErrorMsg('Password must contain at least one number.');
      return false;
    }

    if (!specialCharRegex.test(password)) {
      setErrorMsg('Password must contain at least one special character.');
      return false;
    }

    setErrorMsg('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password) {
      // Validate the password
      if (!validatePassword()) {
        return;
      }
    }
    dispatch(signup({ name, email, password }));
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
        <div className='bg-white shadow rounded lg:w-1/3  md:w-2/3 w-full p-6 sm:p-10'>
          <p
            tabIndex={0}
            aria-label='Create your account'
            className='text-2xl font-extrabold leading-6 text-gray-800'
          >
            Create your account
          </p>
          <p className='text-sm mt-3 font-medium leading-none text-gray-500'>
            Already have an account?{' '}
            <span
              tabIndex={0}
              aria-label='Sign up here'
              className='text-sm font-medium leading-none underline text-gray-800 cursor-pointer'
            >
              {' '}
              <Link to={'/login'}> Login here </Link>
            </span>
          </p>
          <form onSubmit={handleSubmit}>
            <div className='mt-6'>
              <label className='text-sm font-medium leading-none text-gray-800'>Fullname</label>
              <input
                required
                aria-label='enter fullname'
                type='text'
                onChange={(e) => setName(e.target.value)}
                className='bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
              />
            </div>
            <div className='mt-6'>
              <label className='text-sm font-medium leading-none text-gray-800'>Email</label>
              <input
                required
                aria-label='enter email adress'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                className='bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
              />
            </div>
            <div className='mt-6'>
              <label className='text-sm font-medium leading-none text-gray-800'>Password</label>
              <div className='relative flex items-center justify-center'>
                <input
                  required
                  aria-label='enter Password'
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  className='bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                />

                {password && <button
                  type='button'
                  onClick={() => setShowPassword((prev) => !prev)}
                  className=' absolute bottom-3 right-3 focus:outline-none'
                >
                  {showPassword ? (
                    <EyeOpenIcon size={20} color='#393646' />
                  ) : (
                    <EyeCloseIcon size={20} color='#393646' />
                  )}
                </button>}
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
