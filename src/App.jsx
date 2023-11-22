import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/pages/RegistrationPage/RegPage";
import Login from "./components/pages/LoginPage/LoginPage";
import mainPage from "./components/pages/MainPage/MainPage";
import Navbar from "./components/pages/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/main" element={<mainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;