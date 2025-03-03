
import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "client";
};

type UserContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check for stored session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("careerMentor_user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("careerMentor_user");
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simple admin check - in a real app, this would authenticate against a backend
      if (email === "admin@careermentor.com" && password === "admin123") {
        const adminUser: User = {
          id: "admin-1",
          name: "Admin User",
          email: email,
          role: "admin",
        };
        setUser(adminUser);
        setIsAuthenticated(true);
        localStorage.setItem("careerMentor_user", JSON.stringify(adminUser));
        return true;
      } else {
        // Mock client login - in a real app, you would validate against your backend
        const clientUser: User = {
          id: `client-${Date.now()}`,
          name: email.split("@")[0],
          email: email,
          role: "client",
        };
        setUser(clientUser);
        setIsAuthenticated(true);
        localStorage.setItem("careerMentor_user", JSON.stringify(clientUser));
        return true;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("careerMentor_user");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin: user?.role === "admin",
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
