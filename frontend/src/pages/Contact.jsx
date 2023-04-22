import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts } from "../features/contacts/contactSlice";
import moment from "moment/moment";
import AddContact from "../components/AddContact";
import EditContact from "../components/EditContact";

export default function Contact() {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);
  const [searchField, setSearchField] = useState("");
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    console.log(contacts)
    setAllContacts(contacts);
  }, [contacts]);
  
  const sortedContacts = allContacts.sort((a, b) => a.name.localeCompare(b.name))
  
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    // filtering the contacts list based on the search query
    const filteredContacts = contacts.filter((contact) => {
      const query = searchField.trim().toLowerCase();
      const name = contact.name.trim().toLowerCase();
      const phone = contact.phone.trim().toLowerCase();
      return name.startsWith(query) || phone.includes(query);
    });
    setAllContacts(filteredContacts);
  }, [searchField, contacts]);

  const handleDelete = (contact) => {
    const result = window.confirm(`Are you sure you want to delete ${contact.phone}?`)
    if(result){
        dispatch(deleteContact(contact._id))
    }
  };

  return (
    <div className="flex w-full justify-center pt-10 max-h-screen items-start">
      <div className="w-full flex justify-center mx-2 px-2 sm:mx-auto ">
        <div className="relative lg:w-4/6 overflow-auto shadow-md rounded-lg">
          <div className="flex justify-start items-center w-full px-4 h-20 bg-teal-600">
            <h1 className="ml-4 text-3xl font-mono font-semibold text-white">Contacts</h1>
          </div>
          <div className="p-4 flex justify-between items-center">
            <label for="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                onChange={(e) => setSearchField(e.target.value)}
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-80 pl-10 p-2.5"
                placeholder="Search for items"
              />
            </div>
            <Link
              type="button"
              to={'/add'}
            //   data-modal-target="addContact" data-modal-toggle="addContact"
            data-hs-overlay="#addContact"
              className="flex items-center gap-1 focus:outline-none text-white bg-teal-700 hover:bg-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
</svg> <span> Add </span>
            </Link>
          </div>
          <table className="w-full overflow-y-auto text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 "
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Added On
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedContacts.map((contact) => (
                <tr key={contact._id} className="bg-white border-b hover:bg-gray-50">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {contact.name}
                  </th>
                  <td className="px-6 py-4 font-mono font-semibold">{contact.phone}</td>
                  <td className="px-6 py-4">
                    {moment(contact.updatedAt).format("lll")}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                    type="button"
                      to={`/edit/${contact._id}`}
                      data-hs-overlay="#editContact"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(contact)}
                      className="font-medium text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddContact/>
      <EditContact/>
      <Outlet />
    </div>
  );
}
