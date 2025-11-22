
// src/pages/admin/index.jsx
import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminHomePage() {
  return (
    <AdminLayout>
      <h1>Добро пожаловать в админ-панель</h1>
      <p>Здесь будет статистика, графики и управление системой.</p>
    </AdminLayout>
  );
}
