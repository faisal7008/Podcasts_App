import React, { useState } from "react";
import { CloudinaryContext, Video, Audio } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";
import VideoPlayer from "../components/player/VideoPlayer";
import AudioPlayer from "../components/player/AudioPlayer";

const cloudName = process.env.REACT_APP_CLOUD_NAME;
const apiKey = process.env.REACT_APP_CLOUDINARY_API_KEY;
const apiSecret = process.env.REACT_APP_CLOUDINARY_API_SECERT;

const cloudinary = new Cloudinary({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

const Library = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleUpload = () => {
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

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleUpload}>Upload</button>
      <CloudinaryContext cloudName={cloudName} cl={cloudinary}>
        {file && (
          <>
            {/* <Video publicId={file.name} controls /> */}
            {/* or */}
            <Audio publicId={file.name} controls />
          </>
        )}
      </CloudinaryContext>
      <AudioPlayer
        src={
          "https://res.cloudinary.com/dopuxe0m5/video/upload/v1682245846/podcasts/ztvdzijeewxgyxwdwukd.mp3"
        }
      />
      {/* <video
        className="absolute top-0 left-0"
        src="https://res.cloudinary.com/dopuxe0m5/video/upload/v1682244796/podcasts/x97i3u4in2zgcxyoaeds.mp4"
        controls
      /> */}
    </div>
  );
};

export default Library;
