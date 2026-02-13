// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import API from "../api/axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const { user, logout } = useAuth();
//   const [profile, setProfile] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const { data } = await API.get("/auth/profile");
//         setProfile(data.user || data);
//       } catch (error) {
//         toast.error("Failed to load profile");
//       }
//     };

//     if (user) fetchProfile();
//   }, [user]);

//   // 🔥 Custom logout handler
//   const handleLogout = () => {
//     logout();

//     toast.success("You have been logged out 👋", {
//       position: "top-right",
//       autoClose: 1500,
//       theme: "colored",
//     });

//     navigate("/login");
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Welcome {profile?.name}</h2>

//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import API from "../api/axios";
import { toast } from "react-toastify";

export default function Home() {
  const { logout } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await API.get("/auth/profile");
        setProfile(data);
      } catch {
        toast.error("Unauthorized");
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out");
  };

  return (
    <div>
      <h2>Welcome {profile?.name}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
