import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuestPage from "./Pages/GuestPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
      </Routes>
    </Router>
  );
}
export default App;
