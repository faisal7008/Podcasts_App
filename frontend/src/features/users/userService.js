import axios from 'axios'

// const API_URL = 'https://worried-hare-sweatsuit.cyclic.app/api/users/'
// const API_URL = 'http://localhost:9000/api/users/'
const API_URL = `${process.env.REACT_APP_BACKEND_API}/users/`

// Add new user
const addUser = async (UserData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, UserData, config)

  return response.data
}

// get all users
const getAllUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// get user
const getUser = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + userId, config)

  return response.data
}

// Get all managers
const getManagers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'managers', config)

  return response.data
}

// Get all employees
const getEmployees = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'employees', config)

  return response.data
}

// Delete user
const deleteUser = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + userId, config)

  return response.data
}

// follow user
const followUser = async (id, userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + "follow/" + id, userData, config)
  return response.data
}

// get my profile
const getMyProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'me', config)

  return response.data
}

// Update profile
const updateProfile = async (userData, token, id) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "multipart/form-data",
      },
  }
  const response = await axios.put(API_URL + id, userData, config)
  return response.data
}


const userService = {
  addUser,
  getUser,
  getAllUsers,
  getMyProfile,
  getEmployees,
  getManagers,
  deleteUser,
  followUser,
  updateProfile
}

export default userService
