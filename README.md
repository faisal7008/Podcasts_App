# Podcasts MERN App

This is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to browse, upload, and listen to podcasts.

## Features

- User authentication and authorization with JWT (JSON Web Token) and bcrypt for password hashing.
- User can view, add, update, and delete their own podcasts.
- User can view and favorite other users' podcasts.
- User can play podcasts with a media player that includes features such as playback speed control and progress bar.
- Audio and video files are uploaded to the cloud using Cloudinary

## Technologies

- React.js for building the frontend
- Redux Toolkit for state management
- Node.js with Express for the backend server
- MongoDB for the database
- Cloudinary for cloud-based storage of audio and video files

### Getting Started

To get started with the app, clone the repo and install the necessary dependencies:
run 'npm install' in both the frontend and backend directories

### Environment Variables

The app requires the following environment variables:

#### backend

- MONGODB_URI: URL of the MongoDB database
- JWT_SECRET: Secret key for JWT authentication

### frontend

- REACT_APP_API_URL: URL to connect backend api
- REACT_APP_CLOUD_NAME: Cloudinary cloud name for uploading files (if using Cloudinary)
- REACT_APP_CLOUDINARY_API_KEY: Cloudinary API key (if using Cloudinary)
- REACT_APP_CLOUDINARY_API_SECRET: Cloudinary API secret (if using Cloudinary)

## Running the App

To start the app, run the following command:
"npm start" in both frontend and backend directories

The app will be served at http://localhost:9000
