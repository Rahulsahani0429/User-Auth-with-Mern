import { Routes, Route, Navigate } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>

      <ToastContainer position="top-right"></ToastContainer>
    </>
  );
}

export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// // import { AuthProvider } from "./context/AuthContext";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Navigate to="/register" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register></Register>} />
//         <Route path="/home" element={<Home />} />
//       </Routes>

//       <ToastContainer position="top-right" autoClose={2000} />
//     </>
//   );
// }

// export default App;
