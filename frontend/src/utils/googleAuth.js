import queryString from "query-string";
import axios from "axios";

export const stringifiedParams = queryString.stringify({
  client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  redirect_uri: "http://localhost:3000",
  scope: [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ].join(" "), // space seperated string
  response_type: "code",
  access_type: "offline",
  prompt: "consent",
});
// console.log(stringifiedParams)

export const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

const urlParams = queryString.parse(window.location.search);

let authorization_code = ""

if (urlParams.error) {
  console.log(`An error occurred: ${urlParams.error}`);
} else {
  console.log(`The code is: ${urlParams.code}`);
  console.log(`The code is: ${urlParams.email}`);
  console.log(`The code is: ${urlParams.profile}`);
  authorization_code = urlParams.code
}

export async function getAccessTokenFromCode(code) {
  const { data } = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: "post",
    data: {
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      client_secret: process.env.REACT_APP_GOOLGE_APP_SECRET,
      redirect_uri: "http://localhost:3000",
      grant_type: "authorization_code",
      code,
    },
  });
  console.log(data); // { access_token, expires_in, token_type, refresh_token }
  return data.access_token;
}

export async function getGoogleUserInfo(access_token) {
  const { data } = await axios({
    url: "https://www.googleapis.com/oauth2/v2/userinfo",
    method: "get",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  console.log(data); // { id, email, given_name, family_name }
  return data;
}

if(authorization_code !== ""){
    const access_token = getAccessTokenFromCode(authorization_code)
    if(access_token){
        const profile = getGoogleUserInfo(access_token)
        console.log(profile)
    }
}
