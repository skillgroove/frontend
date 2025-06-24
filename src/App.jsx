import React from "react";
import { Routes, Route } from "react-router-dom";
import GuestPage from './Pages/GuestPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import Customer from './Pages/Customer';
import ServiceProvider from './Pages/ServiceProvider';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/serviceprovider" element={<ServiceProvider />} />
      </Routes>
    </>
  );
}
export default App;
