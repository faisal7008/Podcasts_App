import React from 'react'
import { GoogleLogout } from 'react-google-login'

export default function LogoutWithGoogle() {
  return (
    <div id='signOutButton'>
        <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText='Logout'
            onLogoutSuccess={() => console.log("Logout success!")}
        />
    </div>
  )
}
