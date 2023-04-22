// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app bg-color-dark min-h-screen">
      <Home />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Contact />}>
              <Route path="add" element={<AddContact/>}/>
              <Route path="edit/:id" element={<EditContact />}/>
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
