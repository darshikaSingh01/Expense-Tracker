import Home from "./Home.jsx";
import Login from "./Components/Login";
import Register from "./Components/Register";
import HeroPage from "./Pages/HeroPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProtectedRoutes from "./Services/ProtectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/home" element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/" element={<HeroPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
