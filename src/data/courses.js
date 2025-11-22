// src/data/courses.js
// ЕДИНЫЙ СТАБИЛЬНЫЙ МОДУЛЬ ДЛЯ ВСЕГО ПРОЕКТА

// ---------------------------
// ОСНОВНОЙ МАССИВ КУРСОВ
// ---------------------------

export const coursesData = [
  {
    id: 1,
    title: "Neuroengineering of Thinking: Foundation",
    category: "Neuroengineering",
    level: "Beginner",
    difficulty: "Beginner",
    languange: "English",
    lessonCount: 24,
    duration: 540, // в минутах: 9h
    rating: 4.8,
    ratingCount: 124,
    paid: true,
    originalPrice: 490,
    discountedPrice: 290,
    popular: true,
    viewStatus: "Popular Most Viwed",
    state: "Featured",
    imageSrc: "/assets/img/coursesCards/1.png",
    authorName: "Inna Shcherbakova",
    authorImageSrc: "/assets/img/instructors/1.png",
  },
  {
    id: 2,
    title: "Architecture of Thinking for Leaders",
    category: "Leadership",
    level: "Intermediate",
    difficulty: "Intermediate",
    languange: "English",
    lessonCount: 18,
    duration: 420, // 7h
    rating: 4.9,
    ratingCount: 87,
    paid: true,
    originalPrice: 690,
    discountedPrice: 390,
    popular: true,
    viewStatus: "Popular Most Viwed",
    state: "Featured",
    imageSrc: "/assets/img/coursesCards/2.png",
    authorName: "Inna Shcherbakova",
    authorImageSrc: "/assets/img/instructors/1.png",
  },
  {
    id: 3,
    title: "Restart Reality: Practical Protocol",
    category: "Restart Reality",
    level: "Advanced",
    difficulty: "Advanced",
    languange: "Russian",
    lessonCount: 16,
    duration: 360, // 6h
    rating: 4.7,
    ratingCount: 65,
    paid: true,
    originalPrice: 590,
    discountedPrice: 350,
    popular: true,
    viewStatus: "Trending",
    state: "New",
    imageSrc: "/assets/img/coursesCards/3.png",
    authorName: "Inna Shcherbakova",
    authorImageSrc: "/assets/img/instructors/1.png",
  },
  {
    id: 4,
    title: "Neuro Decision-Making for Top-Managers",
    category: "Business",
    level: "Advanced",
    difficulty: "Advanced",
    languange: "English",
    lessonCount: 20,
    duration: 480, // 8h
    rating: 4.6,
    ratingCount: 52,
    paid: true,
    originalPrice: 790,
    discountedPrice: 490,
    popular: false,
    viewStatus: "Top Rated",
    state: "Featured",
    imageSrc: "/assets/img/coursesCards/4.png",
    authorName: "Inna Shcherbakova",
    authorImageSrc: "/assets/img/instructors/1.png",
  },
  {
    id: 5,
    title: "Emotional Maturity & Brain",
    category: "Psychology",
    level: "Beginner",
    difficulty: "Beginner",
    languange: "Russian",
    lessonCount: 12,
    duration: 240, // 4h
    rating: 4.5,
    ratingCount: 40,
    paid: false,
    originalPrice: 0,
    discountedPrice: 0,
    popular: true,
    viewStatus: "Free Courses",
    state: "Free",
    imageSrc: "/assets/img/coursesCards/5.png",
    authorName: "Inna Shcherbakova",
    authorImageSrc: "/assets/img/instructors/1.png",
  },
  {
    id: 6,
    title: "Neuroplasticity for Everyday Life",
    category: "Neuroscience",
    level: "Intermediate",
    difficulty: "Intermediate",
    languange: "English",
    lessonCount: 14,
    duration: 300, // 5h
    rating: 4.4,
    ratingCount: 33,
    paid: true,
    originalPrice: 350,
    discountedPrice: 250,
    popular: false,
    viewStatus: "Trending",
    state: "New",
    imageSrc: "/assets/img/coursesCards/6.png",
    authorName: "Guest Instructor",
    authorImageSrc: "/assets/img/instructors/2.png",
  },
  {
    id: 7,
    title: "Brain States & Performance",
    category: "Neuroscience",
    level: "Advanced",
    difficulty: "Advanced",
    languange: "English",
    lessonCount: 10,
    duration: 180, // 3h
    rating: 4.3,
    ratingCount: 28,
    paid: true,
    originalPrice: 290,
    discountedPrice: 190,
    popular: false,
    viewStatus: "Popular Most Viwed",
    state: "Regular",
    imageSrc: "/assets/img/coursesCards/7.png",
    authorName: "Guest Instructor",
    authorImageSrc: "/assets/img/instructors/3.png",
  },
  {
    id: 8,
    title: "Neuroengineering in Education",
    category: "Education",
    level: "Intermediate",
    difficulty: "Intermediate",
    languange: "Russian",
    lessonCount: 15,
    duration: 330, // 5.5h
    rating: 4.9,
    ratingCount: 91,
    paid: true,
    originalPrice: 650,
    discountedPrice: 420,
    popular: true,
    viewStatus: "Top Rated",
    state: "Featured",
    imageSrc: "/assets/img/coursesCards/8.png",
    authorName: "Inna Shcherbakova",
    authorImageSrc: "/assets/img/instructors/1.png",
  },
];

// алиас для совместимости со старыми компонентами
export const courses = coursesData;

// ---------------------------
// КАТЕГОРИИ
// ---------------------------

export const categories = [
  { id: 1, title: "Neuroengineering" },
  { id: 2, title: "Leadership" },
  { id: 3, title: "Restart Reality" },
  { id: 4, title: "Business" },
  { id: 5, title: "Psychology" },
  { id: 6, title: "Neuroscience" },
  { id: 7, title: "Education" },
];

// старое неправильное имя — для компонентов типа Courses.jsx
export const catagories = categories.map((c) => c.title);

// для CoursesThree и подобных
export const allCategories = ["All Categories", ...catagories];

// ---------------------------
// ФИЛЬТРЫ / СПРАВОЧНЫЕ ДАННЫЕ
// ---------------------------

// Инструкторы
export const instractorNames = [
  { title: "Inna Shcherbakova" },
  { title: "Guest Instructor" },
];

// Языки
export const languages = [
  { title: "English" },
  { title: "Russian" },
];

// Уровни
export const levels = [
  { title: "Beginner" },
  { title: "Intermediate" },
  { title: "Advanced" },
];

// Сложность (для совместимости)
export const difficulty = levels.map((l) => l.title);

// Цена
export const prices = [
  { title: "All" },
  { title: "Free" },
  { title: "Paid" },
];

// Рейтинг (диапазоны)
export const rating = [
  {
    text: "4.5 & up",
    range: [4.5, 5],
    star: 5,
  },
  {
    text: "4.0 – 4.5",
    range: [4.0, 4.5],
    star: 4,
  },
  {
    text: "3.5 – 4.0",
    range: [3.5, 4.0],
    star: 3,
  },
];

// Продолжительность (в минутах)
export const duration = [
  {
    title: "0–3 hours",
    range: [0, 180],
  },
  {
    title: "3–6 hours",
    range: [181, 360],
  },
  {
    title: "6–10 hours",
    range: [361, 600],
  },
];

// Опции сортировки
export const sortingOptions = [
  "Default",
  "Rating (asc)",
  "Rating (dsc)",
  "Price (asc)",
  "Price (dsc)",
  "Duration (asc)",
  "Duration (dsc)",
];

// Статус просмотра (CoursesTwo)
export const viewStatus = [
  "Popular Most Viwed",
  "Top Rated",
  "Trending",
  "Free Courses",
];

// Состояния курсов (CoursesFive)
export const courseStates = [
  "All",
  "Featured",
  "New",
  "Regular",
  "Free",
];

// ---------------------------
// ДАННЫЕ ДЛЯ ДАШБОРДА
// ---------------------------

export const resentCourses = coursesData.map((c) => ({
  id: c.id,
  title: c.title,
  imageSrc: c.imageSrc,
  authorImg: c.authorImageSrc,
  authorName: c.authorName,
  lessonCount: c.lessonCount,
  duration: c.duration,
}));

// Теги (используются в DshbDashboard)
export const tags = [
  { name: "Neuroengineering", href: "#" },
  { name: "Leadership", href: "#" },
  { name: "Restart Reality", href: "#" },
  { name: "Neuroscience", href: "#" },
  { name: "Education", href: "#" },
  { name: "Crisis Management", href: "#" },
  { name: "Brain States", href: "#" },
];

// ---------------------------
// УТИЛИТЫ
// ---------------------------

export const getCourseById = (id) =>
  coursesData.find((course) => Number(course.id) === Number(id));

// На всякий случай — default-экспорт (если где-то был import courses from "@/data/courses")
export default coursesData;
