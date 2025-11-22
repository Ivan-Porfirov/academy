// src/components/admin/AdminLayout.jsx
import SidebarAdmin from "./SidebarAdmin";
import TopbarAdmin from "./TopbarAdmin";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-wrapper" style={{ display: "flex", minHeight: "100vh" }}>
      <SidebarAdmin />

      <div style={{ flex: 1, background: "#f5f5f5" }}>
        <TopbarAdmin />
        <div style={{ padding: "30px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
