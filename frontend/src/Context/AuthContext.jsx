import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth/auth.service.js";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const register = async (userData) => {
    setLoading(true);
    try {
      const { user: newUser } = await authService.register(userData);
      return { success: true, user: newUser };
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    setLoading(true);
    try {
      const { user: loggedInUser } = await authService.login(credentials);
      setUser(loggedInUser);
      return { success: true };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    navigate("/auth");
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
