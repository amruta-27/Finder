import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; 
import { toast } from "react-toastify";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    const userid= localStorage.getItem("userId");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decoded.exp > now) {
          setUser({ id:userid, name: userName, token });


          //using settimeout
          const remainingTime = (decoded.exp - now) * 1000;
          const timer = setTimeout(() => {
            localStorage.clear();
            setUser(null);
            toast.error("You are logged out!!!");
            window.location.href = "/"; 
          }, remainingTime);

          return () => clearTimeout(timer); 


        } else {
          localStorage.clear();
          setUser(null);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.clear();
        setUser(null);
      }
    }
    setLoading(false);

  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
