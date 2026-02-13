// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useAuth } from "../context/AuthContext";
// import API from "../api/axios";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const { data } = await API.post("/auth/register", {
//         name,
//         email,
//         password,
//       });

//       login(data);
//       toast.success("Register successful ✅");

//       navigate("/login");
//     } catch (error) {
//       console.log("FULL ERROR:", error);
//       console.log("ERROR RESPONSE:", error.response);
//       console.log("ERROR MESSAGE:", error.message);
//       toast.error(error.response?.data?.message || "Register failed ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>

//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br />
//       <br />

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <br />
//       <br />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <br />
//       <br />

//       <button type="submit" disabled={loading}>
//         {loading ? "Registering..." : "Register"}
//       </button>
//     </form>
//   );
// }
