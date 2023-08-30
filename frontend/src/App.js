import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyPodcasts from './pages/MyPodcasts';
import Favourites from './pages/Favourites';
import HomeContent from './pages/Home/HomeContent';
import Search from './pages/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllPodcasts } from './features/podcastSlice';
import ViewAll from './pages/Home/ViewAll';
import ComingSoon from './pages/ComingSoon';
import { getMe } from './features/userSlice';
import PodcastDetails from './pages/PodcastDetails';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllPodcasts());
    dispatch(getMe());
  }, []);
  const [toastPosition, setToastPosition] = useState('top-center');

  useEffect(() => {
    const handleResize = () => {
      // Check the screen width and update the toast position accordingly
      if (window.innerWidth <= 768) {
        setToastPosition('top-center');
      } else {
        setToastPosition('bottom-right');
      }
    };

    // Call handleResize initially and add a listener for window resize events
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className='app bg-color-dark h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<HomeContent />} />
            <Route path='/:type' element={<ViewAll />} />
            <Route path='/search' element={<Search />} />
            <Route path='/library' element={<ComingSoon />} />
            {/* <Route path="/play-audio" element={<PlayAudio />}/> */}
            {/* <Route path="/play-video" element={<PlayVideo />}/> */}
            <Route
              path='/podcasts/'
              element={isAuthenticated ? <MyPodcasts /> : <Navigate to={'/login'} />}
            />
            <Route
              path='/podcasts/:podcastId'
              element={<PodcastDetails />}
              // element={isAuthenticated ? <PodcastDetails /> : <Navigate to={'/login'} />}
            />
            <Route
              path='/favourites'
              element={isAuthenticated ? <Favourites /> : <Navigate to={'/login'} />}
            />
            <Route
              path='/profile'
              element={isAuthenticated ? <Profile /> : <Navigate to={'/login'} />}
            />
            <Route
              path='/settings'
              element={isAuthenticated ? <ComingSoon /> : <Navigate to={'/login'} />}
            />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
      <ToastContainer
        autoClose={1500}
        closeButton={false}
        position={toastPosition}
        toastContainerStyle={{ width: '320px' }}
      />
    </div>
  );
}

export default App;
