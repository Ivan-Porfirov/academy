// src/admin/pages/AdminCourses.jsx
import { courses as initialCourses } from "@/data/courses";
import { useEffect, useState } from "react";

const STORAGE_KEY = "adminCourses";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    category: "",
    paid: true,
    discountedPrice: "",
    originalPrice: "",
  });

  // Загружаем из localStorage или из исходных данных
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setCourses(JSON.parse(saved));
      } catch {
        setCourses(initialCourses);
      }
    } else {
      setCourses(initialCourses);
    }
  }, []);

  // Сохраняем в localStorage
  useEffect(() => {
    if (courses?.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
    }
  }, [courses]);

  const resetForm = () => {
    setForm({
      title: "",
      category: "",
      paid: true,
      discountedPrice: "",
      originalPrice: "",
    });
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEdit = (course) => {
    setEditingId(course.id);
    setForm({
      title: course.title || "",
      category: course.category || "",
      paid: course.paid ?? true,
      discountedPrice: course.discountedPrice ?? "",
      originalPrice: course.originalPrice ?? "",
    });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Удалить этот курс?")) return;
    setCourses((prev) => prev.filter((c) => c.id !== id));
    if (editingId === id) resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) return;

    if (editingId) {
      setCourses((prev) =>
        prev.map((c) =>
          c.id === editingId
            ? {
                ...c,
                title: form.title,
                category: form.category,
                paid: form.paid,
                discountedPrice: Number(form.discountedPrice) || 0,
                originalPrice: Number(form.originalPrice) || 0,
              }
            : c
        )
      );
    } else {
      const newCourse = {
        id: Date.now(), // временный ID, для JSON вполне
        title: form.title,
        category: form.category,
        paid: form.paid,
        discountedPrice: Number(form.discountedPrice) || 0,
        originalPrice: Number(form.originalPrice) || 0,
        imageSrc: "/assets/img/courses/placeholder.png",
      };
      setCourses((prev) => [newCourse, ...prev]);
    }

    resetForm();
  };

  return (
    <>
      <h2 className="text-22 fw-600 mb-20">Курсы</h2>
      <p className="text-14 text-light-1 mb-30">
        Здесь ты можешь добавлять, редактировать и удалять курсы.
        Сейчас данные хранятся в <b>localStorage</b> и могут быть
        выгружены в JSON, чтобы потом перенести в файлы или на сервер.
      </p>

      {/* ФОРМА */}
      <div className="border-light rounded-8 px-20 py-20 mb-30 bg-light-6">
        <h4 className="text-16 fw-600 mb-15">
          {editingId ? "Редактировать курс" : "Добавить курс"}
        </h4>
        <form onSubmit={handleSubmit} className="row y-gap-20">
          <div className="col-md-6">
            <label className="text-14 fw-500 mb-8 d-block">Название</label>
            <input
              type="text"
              name="title"
              required
              value={form.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Новый курс по нейроинжинирингу"
            />
          </div>

          <div className="col-md-6">
            <label className="text-14 fw-500 mb-8 d-block">Категория</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="form-control"
              placeholder="Neuro, Leadership, Education..."
            />
          </div>

          <div className="col-md-3 d-flex items-center mt-10">
            <input
              id="paid"
              type="checkbox"
              name="paid"
              checked={form.paid}
              onChange={handleChange}
              className="mr-10"
            />
            <label htmlFor="paid" className="text-14">
              Платный курс
            </label>
          </div>

          <div className="col-md-3">
            <label className="text-14 fw-500 mb-8 d-block">
              Цена со скидкой
            </label>
            <input
              type="number"
              name="discountedPrice"
              value={form.discountedPrice}
              onChange={handleChange}
              className="form-control"
              placeholder="96"
            />
          </div>

          <div className="col-md-3">
            <label className="text-14 fw-500 mb-8 d-block">
              Оригинальная цена
            </label>
            <input
              type="number"
              name="originalPrice"
              value={form.originalPrice}
              onChange={handleChange}
              className="form-control"
              placeholder="120"
            />
          </div>

          <div className="col-12 d-flex y-gap-10 x-gap-10 mt-10">
            <button
              type="submit"
              className="button -md -purple-1 text-white"
            >
              {editingId ? "Сохранить изменения" : "Добавить курс"}
            </button>
            {editingId && (
              <button
                type="button"
                className="button -md -outline-dark-1 text-dark-1"
                onClick={resetForm}
              >
                Отменить
              </button>
            )}
          </div>
        </form>
      </div>

      {/* ТАБЛИЦА */}
      <div className="table-responsive">
        <table className="table text-14">
          <thead>
            <tr>
              <th>ID</th>
              <th>Название</th>
              <th>Категория</th>
              <th>Тип</th>
              <th>Цена</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.category}</td>
                <td>{course.paid ? "Платный" : "Бесплатный"}</td>
                <td>
                  {course.paid
                    ? `$${course.discountedPrice} / $${course.originalPrice}`
                    : "—"}
                </td>
                <td className="text-right">
                  <button
                    className="button -sm -outline-purple-1 text-purple-1 mr-10"
                    onClick={() => handleEdit(course)}
                  >
                    Редактировать
                  </button>
                  <button
                    className="button -sm -outline-dark-1 text-dark-1"
                    onClick={() => handleDelete(course.id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
            {courses.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-20">
                  Курсов пока нет.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
