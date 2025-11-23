// src/admin/layout/AdminLayout.jsx
import { useAdminAuth } from "@/context/AdminAuthContext";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const { adminUser, logout } = useAdminAuth();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ||
    location.pathname.startsWith(path + "/");

  return (
    <div className="min-h-screen bg-light-4 d-flex flex-column">
      {/* HEADER */}
      <header className="border-bottom-light bg-white">
        <div className="container py-20 d-flex justify-between items-center">
          <div className="d-flex items-center">
            <div className="text-20 fw-700 text-dark-1">Admin Panel</div>
            <div className="ml-15 text-14 text-light-1">
              Архитектура Мышления — управление контентом
            </div>
          </div>

          <div className="d-flex items-center">
            {adminUser && (
              <div className="text-14 text-dark-1 mr-20">
                Вы вошли как <span className="fw-500">{adminUser.username}</span>
              </div>
            )}
            <button
              className="button -sm -outline-purple-1 text-purple-1"
              onClick={logout}
            >
              Выйти
            </button>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="container flex-1 d-flex layout-pt-md layout-pb-md">
        {/* SIDEBAR */}
        <aside
          className="bg-white border-light rounded-8 shadow-1 px-20 py-25 mr-30"
          style={{ minWidth: "230px", maxWidth: "260px" }}
        >
          <div className="text-14 text-light-1 mb-15">Навигация</div>
          <nav className="y-gap-10 d-flex flex-column">
            <Link
              to="/admin"
              className={`text-15 ${
                isActive("/admin")
                  ? "fw-600 text-purple-1"
                  : "text-dark-1"
              }`}
            >
              Дашборд
            </Link>
            <Link
              to="/admin/courses"
              className={`text-15 ${
                isActive("/admin/courses")
                  ? "fw-600 text-purple-1"
                  : "text-dark-1"
              }`}
            >
              Курсы
            </Link>
            <Link
              to="/admin/events"
              className={`text-15 ${
                isActive("/admin/events")
                  ? "fw-600 text-purple-1"
                  : "text-dark-1"
              }`}
            >
              События
            </Link>
            <Link
              to="/admin/products"
              className={`text-15 ${
                isActive("/admin/products")
                  ? "fw-600 text-purple-1"
                  : "text-dark-1"
              }`}
            >
              Магазин
            </Link>
          </nav>
        </aside>

        {/* CONTENT */}
        <main className="flex-1">
          <div className="bg-white border-light rounded-8 shadow-1 px-30 py-30">
            <Outlet />
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="border-top-light bg-white">
        <div className="container py-15 d-flex justify-between items-center">
          <div className="text-13 text-light-1">
            © {new Date().getFullYear()} Архитектура Мышления — Admin Panel
          </div>
          <div className="text-13 text-light-1">
            Внутренний контур · только для владельца системы
          </div>
        </div>
      </footer>
    </div>
  );
}
