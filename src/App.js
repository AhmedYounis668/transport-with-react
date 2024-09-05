import Contact from "./Component/contact/Contact";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login.js";
import Registerpage from "./Pages/Registerpage.js";
import Arrow from "./Component/home/Arrow.js";

function App() {
  return (
    <div>
      <Arrow />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
