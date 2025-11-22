// src/components/admin/CoursesAdmin.jsx
import coursesData from "@/data-json/courses/courses.json";
import { useState } from "react";

export default function CoursesAdmin() {
  const { courses } = coursesData;
  const [list, setList] = useState(courses);

  return (
    <>
      <h1>Управление курсами</h1>

      <table
        style={{
          width: "100%",
          background: "white",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Автор</th>
            <th>Длительность</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {list.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.authorName}</td>
              <td>{course.duration} мин</td>
              <td>
                <button>Редактировать</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
