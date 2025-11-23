// src/admin/pages/AdminLogin.jsx
import { useAdminAuth } from "@/context/AdminAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login(form.username, form.password);
    if (res.success) {
      setError("");
      navigate("/admin", { replace: true });
    } else {
      setError(res.message || "Ошибка входа");
    }
  };

  return (
    <div className="min-h-screen d-flex items-center justify-center bg-light-4">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="bg-white border-light rounded-8 shadow-1 px-30 py-40">
              <h1 className="text-24 fw-600 text-center mb-10">
                Вход в админ-панель
              </h1>
              <p className="text-14 text-light-1 text-center mb-30">
                Закрытый доступ для владельца системы.
              </p>

              <form onSubmit={handleSubmit} className="y-gap-20">
                <div>
                  <label className="text-14 fw-500 text-dark-1 mb-8 d-block">
                    Логин
                  </label>
                  <input
                    type="text"
                    name="username"
                    required
                    value={form.username}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="admin"
                  />
                </div>

                <div>
                  <label className="text-14 fw-500 text-dark-1 mb-8 d-block">
                    Пароль
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    value={form.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="••••••"
                  />
                </div>

                {error && (
                  <div className="text-13 text-red-1">{error}</div>
                )}

                <button
                  type="submit"
                  className="button -md -purple-1 text-white w-1/1 mt-10"
                >
                  Войти
                </button>

                <div className="text-12 text-light-1 mt-20 text-center">
                  Логин: <span className="fw-500">admin</span>, пароль:{" "}
                  <span className="fw-500">1234</span> (можем потом поменять).
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
