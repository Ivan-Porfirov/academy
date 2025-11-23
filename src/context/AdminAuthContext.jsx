// src/context/AdminAuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(null);

  // Загружаем состояние из localStorage
  useEffect(() => {
    const saved = localStorage.getItem("adminUser");
    if (saved) {
      try {
        setAdminUser(JSON.parse(saved));
      } catch {
        setAdminUser(null);
      }
    }
  }, []);

  // Сохраняем в localStorage
  useEffect(() => {
    if (adminUser) {
      localStorage.setItem("adminUser", JSON.stringify(adminUser));
    } else {
      localStorage.removeItem("adminUser");
    }
  }, [adminUser]);

  const login = (username, password) => {
    // пока простая авторизация
    if (username === "admin" && password === "1234") {
      const user = { username: "admin" };
      setAdminUser(user);
      return { success: true };
    }
    return { success: false, message: "Неверный логин или пароль" };
  };

  const logout = () => setAdminUser(null);

  return (
    <AdminAuthContext.Provider value={{ adminUser, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
