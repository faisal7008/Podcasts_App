import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMe, updateMe, clearError } from '../features/userSlice';
import { userImg } from '../assets';
import { EditIcon, EyeCloseIcon, EyeOpenIcon } from '../components/icons';
import { toast } from 'react-toastify';

export default function Profile() {
  const { profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // Initialize the states with initial values
  const [name, setName] = useState(profile?.name);
  const [email, setEmail] = useState(profile?.email);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const resetProfile = () => {
    setName(profile?.name);
    setEmail(profile?.email);
    setCurrentPassword('');
    setNewPassword('');
    setErrorMsg('');
  };

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    resetProfile();
  }, [profile]);

  useEffect(() => {
    if (errorMsg) {
      toast.error(errorMsg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }, [errorMsg]);

  const validatePassword = () => {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    if (newPassword.length < minLength) {
      setErrorMsg('Password must be at least 8 characters long.');
      return false;
    }

    if (!uppercaseRegex.test(newPassword)) {
      setErrorMsg('Password must contain at least one uppercase letter.');
      return false;
    }

    if (!lowercaseRegex.test(newPassword)) {
      setErrorMsg('Password must contain at least one lowercase letter.');
      return false;
    }

    if (!numberRegex.test(newPassword)) {
      setErrorMsg('Password must contain at least one number.');
      return false;
    }

    if (!specialCharRegex.test(newPassword)) {
      setErrorMsg('Password must contain at least one special character.');
      return false;
    }

    setErrorMsg('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword) {
      // Validate the newPassword
      if (!validatePassword()) {
        return;
      }
    }
    setErrorMsg('');

    const userData = {
      name,
      email,
      currentPassword,
      newPassword,
    };
    await dispatch(updateMe(userData))
      .then((response) => {
        const { message, passwordError, passwordMsg } = response.payload;
        console.log('Message:', message);
        if (message) {
          toast.success(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        if (passwordMsg) {
          toast.success(passwordMsg, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        if (passwordError) {
          toast.error(passwordError, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
    dispatch(clearError());
  };

  return (
    <div className='flex flex-col gap-4 w-full p-4 md:p-7 h-full scroll-container overflow-auto'>
      <h2 className='text-lg md:text-2xl tracking-wider font-semibold text-color-font'>Profile</h2>
      <form onSubmit={handleSubmit} className='max-h-full space-y-6 md:w-3/4 xl:w-7/12'>
        <div className='grid place-items-center'>
          <div className='relative group cursor-pointer'>
            <img
              src={userImg}
              className='w-28 group-hover:opacity-60 rounded-full transition-all ease-in-out duration-300'
            />
            <div className='absolute hidden group-hover:block -m-2 top-1/2 left-1/2'>
              <EditIcon size={24} />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor='name'
            className='block text-sm text-color-font font-semibold tracking-wider mb-2'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='py-3 px-4 text-color-dark/100 bg-color-font font-medium block w-full text-base/3 rounded-md outline-none focus:outline-none border-none shadow'
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm text-color-font font-semibold tracking-wider mb-2'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='py-3 px-4 text-color-dark/100 bg-color-font font-medium block w-full text-base/3 rounded-md outline-none focus:outline-none border-none shadow'
          />
        </div>
        <div className='relative'>
          <label
            htmlFor='password'
            className='block text-sm text-color-font font-semibold tracking-wider mb-2'
          >
            Password
          </label>
          <input
            type={showPassword1 ? 'text' : 'password'}
            id='password'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className='py-3 px-4 text-color-dark/100 bg-color-font font-medium block w-full text-base/3 rounded-md outline-none focus:outline-none border-none shadow'
          />
          <button
            type='button'
            onClick={() => setShowPassword1((prev) => !prev)}
            className=' absolute bottom-2.5 right-3 focus:outline-none'
          >
            {showPassword1 ? <EyeOpenIcon color='#393646' /> : <EyeCloseIcon color='#393646' />}
          </button>
        </div>
        <div className='relative'>
          <label
            htmlFor='confirm-password'
            className='block text-sm text-color-font font-semibold tracking-wider mb-2'
          >
            Confirm Password
          </label>
          <input
            type={showPassword2 ? 'text' : 'password'}
            id='confirm-password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className='py-3 px-4 text-color-dark/100 bg-color-font font-medium block w-full  text-base/3 rounded-md outline-none focus:outline-none border-none shadow'
          />
          <button
            type='button'
            onClick={() => setShowPassword2((prev) => !prev)}
            className=' absolute bottom-2.5 right-3 focus:outline-none'
          >
            {showPassword2 ? <EyeOpenIcon color='#393646' /> : <EyeCloseIcon color='#393646' />}
          </button>
        </div>
        <div className='flex gap-3 mt-6 items-center justify-end'>
          <button
            type='button'
            className='px-5 py-3 text-color-font font-semibold text-sm rounded-full border-none focus:outline-none'
            onClick={resetProfile}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='px-5 py-3 bg-color-card text-color-font font-semibold text-sm rounded-full shadow border-none focus:outline-none'
          >
            Save profile
          </button>
        </div>
      </form>
    </div>
  );
}
