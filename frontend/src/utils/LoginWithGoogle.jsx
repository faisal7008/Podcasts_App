import React from 'react'
import { GoogleLogin } from "react-google-login"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../features/userSlice'

export default function LoginWithGoogle() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSuccess = (res) => {
        console.log("Login Success! Profile:", res.profileObj)
        const {name, email} = res.profileObj
        dispatch(signup({name, email, password: name}))
        navigate("/");
    }

    const onFailure = (res) => {
        console.log("Login Failed! res:", res)
    }
    
  return (
    <div id='signInButton'>
        <GoogleLogin
            className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 bg-color-font border rounded-lg border-gray-700 flex justify-center items-center w-full mt-6'
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText='Continue with Google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy='single_host_origin'
            isSignedIn={true}
            theme='dark'
        />
    </div>
  )
}
