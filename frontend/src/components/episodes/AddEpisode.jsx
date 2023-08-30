import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../handlers/Loader';
import UploadEpisode from './UploadEpisode';
import { addEpisode } from '../../features/episodeSlice';
import { CloseIcon, PlusIcon } from '../icons';

export default function AddEpisode({ podcast }) {
  const dispatch = useDispatch();
  const closeBtn = useRef();
  const { status } = useSelector((state) => state.podcasts);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const resetState = () => {
    setTitle('');
    setDuration('');
    setDescription('');
    setDuration('');
    setFile(null);
    setFileUrl('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const episodeData = {
      title,
      description,
      duration,
      podcastId: podcast?._id,
      mediaUrl: fileUrl, // Use fileData.url to set the fileUrl
    };
    dispatch(addEpisode(episodeData));
    closeBtn?.current?.click();
    resetState();
    // console.log(podcastData);
  };

  const handleDurationChange = (e) => {
    const input = e.target.value;
    const formattedInput = formatDuration(input?.slice(0, 8));
    // console.log(formattedInput)
    setDuration(formattedInput);
  };

  const formatDuration = (input) => {
    // Remove non-numeric characters
    const numericInput = input.replace(/[^\d]/g, '');

    // Format the input with colons
    let formattedInput = '';
    for (let i = 0; i < numericInput.length; i++) {
      if (i === 2 || i === 4) {
        formattedInput += ':';
      }
      formattedInput += numericInput[i];
    }

    return formattedInput;
  };

  return (
    <div>
      <button
        type='button'
        data-hs-overlay='#add-episode'
        className='px-4 py-1.5 w-max font-mono text-sm font-semibold text-color-dark bg-color-font shadow rounded-full flex items-center focus:outline-none gap-0.5'
      >
        <PlusIcon size={18} /> Add
      </button>
      <div
        id='add-episode'
        className='hs-overlay hidden w-full h-full fixed -top-5 left-0 z-[60] scroll-container overflow-x-hidden overflow-y-auto'
      >
        <div className='hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-full sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex justify-center items-center'>
          <div className='relative flex p-5 flex-col max-h-[95vh] w-full md:w-3/5 lg:w-2/5  bg-white border shadow-sm rounded h-5/6'>
            <div className='flex justify-between mb-4'>
              <h1 className='font-semibold tracking-wide text-slate-800 text-xl'>Add Episode</h1>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                ref={closeBtn}
                data-hs-overlay='#add-episode'
              >
                <CloseIcon size={20}/>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='title' className='block mb-2 text-xs font-semibold text-gray-900'>
                  Episode Name <span className=' text-rose-600'>*</span>
                </label>
                <input
                  type='text'
                  id='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5'
                  placeholder='Episode name'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='title' className='block mb-2 text-xs font-semibold text-gray-900'>
                  Episode Description <span className=' text-rose-600'>*</span>
                </label>
                <input
                  type='text'
                  id='title'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5'
                  placeholder='Episode description'
                  required
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='title' className='block mb-2 text-xs font-semibold text-gray-900'>
                  Duration <span className=' text-rose-600'>*</span>
                </label>
                <input
                  type='text'
                  id='title'
                  value={duration}
                  onChange={handleDurationChange}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5'
                  placeholder='HH:MM:SS'
                  required
                />
              </div>
              <UploadEpisode
                type={podcast?.type}
                file={file}
                setFile={setFile}
                setFileUrl={setFileUrl}
              />
              <button
                type='submit'
                className='mt-2 text-white inline-flex justify-center items-center bg-stone-700 hover:bg-stone-800 w-full focus:ring-4 focus:ring-stone-300 font-medium rounded text-sm px-5 py-2.5 mr-2 disabled:bg-stone-500'
                disabled={!fileUrl || !title || !description || !duration || !podcast}
              >
                {status === 'loading' ? <Loader /> : <>Add</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
