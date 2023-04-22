import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="app bg-color-dark h-screen">
      <Home />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="search" element={<Search/>}/>
              <Route path="library" element={<Library />}/> */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
