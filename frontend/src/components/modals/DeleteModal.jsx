import React, { useRef } from 'react';
import { CloseIcon } from '../icons';

export default function DeleteModal({ msg: MsgComponent, setCanDelete, modalId }) {
  const closeRef = useRef(null);

  return (
    <div>
      <div
        id='delete-modal'
        className='hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto'
      >
        <div className='hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex justify-center items-center'>
          <div className='flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
            <div className='flex justify-between items-center py-3 px-4 border-b dark:border-gray-700'>
              <h3 className='font-bold text-gray-800 dark:text-white'>Confirm</h3>
              <button
                type='button'
                className='hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800'
                data-hs-overlay={`#delete-modal`}
              >
                <span className='sr-only'>Close</span>
                <CloseIcon size={20} />
              </button>
            </div>
            <div className='p-4 overflow-y-auto'>
              <MsgComponent />
            </div>
            <div className='flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700'>
              <button
                type='button'
                ref={closeRef}
                className='hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm'
                data-hs-overlay={`#delete-modal`}
              >
                Close
              </button>
              <button
                className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-rose-600 text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 transition-all text-sm'
                type='button'
                onClick={() => setCanDelete(true) & closeRef?.current?.click()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
