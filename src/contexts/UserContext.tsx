import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "client";
  profileImage?: string;
  phoneNumber?: string;
  calendarConnected?: boolean;
};

type UserContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserProfile: (updates: Partial<User>) => void;
  connectCalendar: () => Promise<boolean>;
  disconnectCalendar: () => void;
};

const USER_STORAGE_KEY = "careerMentor_user";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log("Authenticating user:", email);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (email === "admin@archeohub.com" && password === "admin123") {
        const adminUser: User = {
          id: "admin-1",
          name: "Admin User",
          email: email,
          role: "admin",
          profileImage: "https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff",
        };
        setUser(adminUser);
        setIsAuthenticated(true);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(adminUser));
        return true;
      } else {
        const clientUser: User = {
          id: `client-${Date.now()}`,
          name: email.split("@")[0],
          email: email,
          role: "client",
          profileImage: `https://ui-avatars.com/api/?name=${email.split("@")[0]}&background=0D8ABC&color=fff`,
        };
        setUser(clientUser);
        setIsAuthenticated(true);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(clientUser));
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
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem('googleCalendarToken');
  };

  const updateUserProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));
    }
  };

  const connectCalendar = async (): Promise<boolean> => {
    try {
      const { calendarService } = await import('../services/calendarService');
      
      const result = await calendarService.connect();
      
      if (result.success && user) {
        updateUserProfile({ calendarConnected: true });
        return true;
      }
      
      return false;
    } catch (error) {
      console.error("Error connecting calendar:", error);
      return false;
    }
  };

  const disconnectCalendar = () => {
    import('../services/calendarService').then(({ calendarService }) => {
      calendarService.disconnect();
      
      if (user) {
        updateUserProfile({ calendarConnected: false });
      }
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin: user?.role === "admin",
        login,
        logout,
        updateUserProfile,
        connectCalendar,
        disconnectCalendar,
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
