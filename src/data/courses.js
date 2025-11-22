// src/data/courses.js

// Загружаем данные из JSON
import coursesData from "@/data-json/courses/courses.json";

// Экспортируем как в оригинальном проекте
export const courses = coursesData;

// Категории (правильное название)
export const categories = Array.from(
  new Set(coursesData.map((course) => course.category))
);

// Поддержка старого неправильного названия
export const catagories = categories;

// Статусы курсов (нужны для CoursesFive.jsx)
export const courseStates = Array.from(
  new Set(coursesData.map((course) => course.state || "Active"))
);

// Для других компонентов (CoursesThree)
export const allCategories = categories;

// Сложности (для фильтров)
export const difficulty = Array.from(
  new Set(coursesData.map((course) => course.difficulty || "All"))
);

// Rating/view status (для CoursesThree)
export const viewStatus = Array.from(
  new Set(coursesData.map((course) => course.viewStatus || "All"))
);

// Получить курс по ID
export const getCourseById = (id) =>
  coursesData.find((course) => Number(course.id) === Number(id));
