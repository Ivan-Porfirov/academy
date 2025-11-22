// src/components/admin/SidebarAdmin.jsx
import { Link } from "react-router-dom";

export default function SidebarAdmin() {
  return (
    <div
      className="admin-sidebar"
      style={{
        width: "260px",
        background: "#181818",
        padding: "20px",
        color: "white",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>ADMIN</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Link to="/dashboard/admin" className="text-white">Главная</Link>
        <Link to="/dashboard/admin/courses" className="text-white">Курсы</Link>
        <Link to="/dashboard/admin/events" className="text-white">События</Link>
        <Link to="/dashboard/admin/products" className="text-white">Товары</Link>
      </nav>
    </div>
  );
}
