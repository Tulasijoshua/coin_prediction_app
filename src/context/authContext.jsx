import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  const login = (userData) => {
    // Check if the user exists in local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && userData.password === storedUser.password) {
      setUser(userData);
    } else {
      alert("Invalid username/email or password. Please try again.");
    }
  };

  const signup = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate('/login')

  };
  return <AuthContext.Provider value={{user, login, signup, logout}}>
        {children}
    </AuthContext.Provider>
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
