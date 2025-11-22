// src/components/dashboard/admin/CoursesAdmin.jsx

import coursesDataJson from "@/data-json/courses/courses.json";
import { useEffect, useState } from "react";

export default function CoursesAdmin() {
  const [courses, setCourses] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editCourse, setEditCourse] = useState(null);

  // Загружаем курсы из JSON
  useEffect(() => {
    setCourses(coursesDataJson.courses || []);
  }, []);

  // Открыть модальное окно для редактирования
  const handleEdit = (course) => {
    setEditCourse(course);
    setModalOpen(true);
  };

  // Удаление курса (пока только фронт, без записи в JSON)
  const handleDelete = (id) => {
    if (!confirm("Удалить курс?")) return;
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  // Сохранение изменений
  const handleSave = () => {
    setCourses((prev) =>
      prev.map((c) => (c.id === editCourse.id ? editCourse : c))
    );
    setModalOpen(false);
  };

  return (
    <div className="p-30">
      <h2 className="text-30 fw-700 mb-30">Администрирование курсов</h2>

      {/* Таблица */}
      <table className="table table-striped w-100">
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Автор</th>
            <th>Категория</th>
            <th>Цена</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.authorName}</td>
              <td>{course.category}</td>
              <td>
                {course.paid
                  ? `${course.discountedPrice}₽`
                  : "Бесплатно"}
              </td>
              <td>
                <button
                  className="button -sm -purple mr-10"
                  onClick={() => handleEdit(course)}
                >
                  Редактировать
                </button>
                <button
                  className="button -sm -red"
                  onClick={() => handleDelete(course.id)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Модальное окно */}
      {modalOpen && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h3 className="text-20 fw-600 mb-20">
              Редактировать курс #{editCourse?.id}
            </h3>

            <label>Название</label>
            <input
              className="form-control mb-15"
              value={editCourse.title}
              onChange={(e) =>
                setEditCourse({ ...editCourse, title: e.target.value })
              }
            />

            <label>Автор</label>
            <input
              className="form-control mb-15"
              value={editCourse.authorName}
              onChange={(e) =>
                setEditCourse({
                  ...editCourse,
                  authorName: e.target.value,
                })
              }
            />

            <label>Категория</label>
            <input
              className="form-control mb-15"
              value={editCourse.category}
              onChange={(e) =>
                setEditCourse({
                  ...editCourse,
                  category: e.target.value,
                })
              }
            />

            <label>Цена</label>
            <input
              type="number"
              className="form-control mb-15"
              value={editCourse.discountedPrice}
              onChange={(e) =>
                setEditCourse({
                  ...editCourse,
                  discountedPrice: Number(e.target.value),
                })
              }
            />

            <div className="d-flex justify-end mt-20">
              <button
                className="button -sm -gray mr-10"
                onClick={() => setModalOpen(false)}
              >
                Закрыть
              </button>

              <button className="button -sm -green" onClick={handleSave}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Минимальные стили */}
      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }
        .modal-box {
          background: white;
          padding: 30px;
          border-radius: 10px;
          width: 400px;
        }
      `}</style>
    </div>
  );
}
