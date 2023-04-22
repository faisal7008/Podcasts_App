import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import contactService from "../features/contacts/contactService";
import { reset, updateContact } from "../features/contacts/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import ErrorContainer from "./ErrorContainer";

export default function EditContact(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState()
  const {message} = useSelector(state => state.contacts)
  const {id} = useParams();
  const [errorMessagee, setErrorMessagee] = useState("");
  const dispatch = useDispatch();
  console.log(id);
  useEffect(() => {
    contactService.getContact(id).then((res) => setContact(res)).catch(err => console.log(err.message));
    // console.log(contact)
  }, [id]);

  useEffect(() => {
    setName(contact?.name)
    setPhone(contact?.phone)
  }, [contact])

  useEffect(() => {
    setErrorMessagee(message)
  }, [message])

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      phone
    }
    dispatch(updateContact({contactId: id, contactData}));
    dispatch(reset())
  };

  return (
    <div
      id="editContact"
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <Link
              to={"/"}
              onClick={() => {dispatch(reset()); setErrorMessagee("")}}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-hs-overlay="#editContact"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </Link>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                Edit Contact
              </h3>
              <div className="my-2">
              {errorMessagee && <ErrorContainer msg={errorMessagee}/>}
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    defaultValue={contact?.name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="mobileNumber"
                    defaultValue={contact?.phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
