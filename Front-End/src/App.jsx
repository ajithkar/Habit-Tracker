import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Habits from "./pages/HabitPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Profile from "./pages/profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-gray-900">
 
      <Navbar />

      <main className="pt-16">
  
        <div className="
          max-w-7xl
          mx-auto
          px-3
          sm:px-4
          md:px-6
          lg:px-8
          py-4
        ">
          <Routes>

            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                ) : (
                  <Landing />
                )
              }
            />

            <Route path="/habits" element={<Habits />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>
        </div>

      </main>

    </div>
  );
}

export default App;