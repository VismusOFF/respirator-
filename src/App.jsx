import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/pages/RegistrationPage/RegPage";
import Login from "./components/pages/LoginPage/LoginPage";
import MainPage from "./components/pages/MainPage/MainPage";
import Navbar from "./components/pages/Navbar/Navbar";
import { AuthProvider } from "./components/Context/Auth/Auth1";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute1"; // Убедитесь, что путь к файлу правильный

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/main" element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;