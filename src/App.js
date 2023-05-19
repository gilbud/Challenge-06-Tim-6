import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homee from "./pages/Homee";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
    >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer theme="colored" />
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
