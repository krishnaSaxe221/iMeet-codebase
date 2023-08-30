import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import RegistrationPage from './pages/RegistrationPage'
import Layout from "./Layout/Layout";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/UploadPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
    <Layout>
       <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/about" element={<About />} />
          <Route path='/upload' element ={<UploadPage />} />
          <Route path='/dashboard' element ={<DashboardPage />} />

          {/* <Route path="/forgetpassword" element={<ForgetPass />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
