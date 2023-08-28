import React, { useEffect, useState } from 'react';
import { Cloudinary } from 'cloudinary-core';
import axios from 'axios';

const UploadPodcast = ({ file, setFile, setFileUrl }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const controller = new AbortController();

  const handleChange = async (e) => {
    setFile(e.target.files[0]);
    // if(file){
    //   await handleUpload()
    // }
  };

  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  const handleCancel = async () => {
    // if(uploadProgress === 100){
    //   await removeFileFromCloudinary();
    // }
    controller.abort();
    setUploadProgress(0);
    setFile(null);
    setFileUrl(null);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    const fileType = file.type.split('/')[0];
    formData.append('resource_type', fileType);
    formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progressPercent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(progressPercent);
          },
          signal: controller.signal,
        },
      );
      setUploading(true);
      setFileUrl(response.data.secure_url);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className='mb-4'>
      <label htmlFor='title' className='block mb-2 text-xs font-semibold text-gray-900'>
        Upload Episode <span className=' text-rose-600'>*</span>
      </label>
      <div>
        <span className='sr-only'>Upload file</span>
        {file ? (
          <div className='flex gap-4 justify-between items-start'>
            <div className='mb-4 grow'>
              <div className='flex gap-2 justify-between mb-2'>
                <span className='text-sm w-60 truncate font-medium text-gray-900'>
                  {file?.name}
                </span>
                <span className='text-xs font-medium text-gray-800'>{uploadProgress}%</span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div
                  className={`bg-stone-500 h-2.5 rounded-full`}
                  style={{ width: `${uploadProgress}%` }}
                >
                  {' '}
                </div>
              </div>
            </div>
            <button
              type='button'
              onClick={handleCancel}
              className='bg-stone-600 hover:bg-stone-700 focus:outline-none focus:ring-4 focus:ring-stone-300 font-medium rounded text-sm px-5 py-2.5'
            >
              {uploadProgress === 100 ? 'Remove' : 'Cancel'}
            </button>
          </div>
        ) : (
          <input
            type='file'
            onChange={handleChange}
            accept='audio/*,video/*'
            className='block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-stone-500 file:text-white
              hover:file:bg-stone-600
              '
          />
        )}
      </div>
    </div>
  );
};

export default UploadPodcast;
