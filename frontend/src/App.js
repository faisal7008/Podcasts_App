import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPodcasts from "./pages/MyPodcasts";
import HomeContent from "./pages/HomeContent";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Favourites from "./pages/Favourites";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPodcasts } from "./features/podcastSlice";
import AudioPlayer from "./components/player/AudioPlayer";
import VideoPlayer from "./components/player/VideoPlayer";
import DisplayVideo from "./components/player/DisplayVideo";
import DisplayAudio from "./components/player/DisplayAudio";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { mediaUrl, type } = useSelector((state) => state.media);
  useEffect(() => {
    dispatch(getAllPodcasts());
  }, []);
  return (
    <div className="app bg-color-dark h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<HomeContent />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route
              path="/podcasts"
              element={
                isAuthenticated ? <MyPodcasts /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/favourites"
              element={
                isAuthenticated ? <Favourites /> : <Navigate to={"/login"} />
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      {/* {mediaUrl && type && type === "audio" && <AudioPlayer src={mediaUrl} />} */}
      {/* {mediaUrl && type && type === "video" && <VideoPlayer src={mediaUrl} />} */}
      {mediaUrl && type && type === "video" && <DisplayVideo src={mediaUrl} />}
      {mediaUrl && type && type === "audio" && <DisplayAudio src={mediaUrl} />}
    </div>
  );
}

export default App;
