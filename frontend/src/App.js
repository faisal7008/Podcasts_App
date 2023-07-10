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
import Favourites from "./pages/Favourites";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPodcasts } from "./features/podcastSlice";
import ViewAll from "./components/podcasts/ViewAll";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllPodcasts());
  }, []);
  return (
    <div className="app bg-color-dark h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<HomeContent />} />
              <Route path="/:type" element={<ViewAll/>} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<ComingSoon />} />
            {/* <Route path="/play-audio" element={<PlayAudio />}/> */}
            {/* <Route path="/play-video" element={<PlayVideo />}/> */}
            <Route
              path="/podcasts"
              element={
                isAuthenticated ? <MyPodcasts /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/favourites"
              element={
                isAuthenticated ? <ComingSoon /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/profile"
              element={
                isAuthenticated ? <ComingSoon /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/settings"
              element={
                isAuthenticated ? <ComingSoon /> : <Navigate to={"/login"} />
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
