import { Cloudinary } from "cloudinary-core";

const cloudName = process.env.REACT_APP_CLOUD_NAME;
const apiKey = process.env.REACT_APP_CLOUDINARY_API_KEY;
const apiSecret = process.env.REACT_APP_CLOUDINARY_API_SECERT;

const cloudinary = new Cloudinary({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

export const handleFileUpload = (event) => {
  const file = event.target.files[0];
  setFile(file);
};

export const handleUpload = () => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("resource_type", "audio"); // or 'audio' for audio files
  formData.append("upload_preset", "upload_podcasts"); // create an upload preset in your Cloudinary account

  fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setFileUrl(data.secure_url);
    })
    .catch((error) => {
      console.error(error);
    });
};
