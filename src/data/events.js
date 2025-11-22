// -----------------------------------------------------
// EVENTS — MAIN DATASET
// -----------------------------------------------------

export const events = [
  {
    id: 1,
    imgSrc: "/assets/img/courses-list/1.png",
    title: "Summer School 2022",
    desc: "Educational technology and mobile learning",
    date: "6 April, 2022",
    location: "London, UK",
    category: "Design",
    price: 450,
    preDiscount: 650,
  },
  {
    id: 2,
    imgSrc: "/assets/img/courses-list/2.png",
    title: "Summer School 2022",
    desc: "We are changing the way the world learns",
    date: "6 April, 2022",
    location: "London, UK",
    category: "Animation",
    price: 450,
    preDiscount: 650,
  },
  {
    id: 3,
    imgSrc: "/assets/img/courses-list/3.png",
    title: "Summer School 2022",
    desc: "Guide to visas and funding to study in the UK",
    date: "6 April, 2022",
    location: "London, UK",
    category: "Writing",
    price: 450,
    preDiscount: 650,
  },
  {
    id: 4,
    imgSrc: "/assets/img/courses-list/4.png",
    title: "Summer School 2022",
    desc: "Achieving Advanced in Insights with Big",
    date: "6 April, 2022",
    location: "London, UK",
    category: "Business",
    price: 450,
    preDiscount: 650,
  },
  {
    id: 5,
    imgSrc: "/assets/img/courses-list/5.png",
    title: "Summer School 2022",
    desc: "Educational technology and mobile learning",
    date: "6 April, 2022",
    location: "London, UK",
    category: "Photo & Film",
    price: 450,
    preDiscount: 650,
  },
  {
    id: 6,
    imgSrc: "/assets/img/courses-list/6.png",
    title: "Summer School 2022",
    desc: "We are changing the way the world learns",
    date: "6 April, 2022",
    location: "London, UK",
    category: "Lifestyle",
    price: 450,
    preDiscount: 650,
  },
  {
    id: 7,
    imgSrc: "/assets/img/courses-list/7.png",
    title: "Summer School 2022",
    desc: "We are changing the way the world learns",
    date: "6 April, 2022",
    location: "London, UK",
    category: "Illustration",
    price: 450,
    preDiscount: 650,
  },
  {
    id: 8,
    imgSrc: "/assets/img/courses-list/8.png",
    title: "Summer School 2022",
    desc: "We are changing the way the world learns",
    date: "6 April, 2022",
    location: "London, UK",
    category: "Design",
    price: 450,
    preDiscount: 650,
  },
];

// -----------------------------------------------------
// CATEGORIES — used in EventsOne.jsx
// -----------------------------------------------------

export const categories = [
  "All Categories",
  ...Array.from(new Set(events.map((e) => e.category))),
];

// -----------------------------------------------------
// LEARN LIST — required in EventDetails.jsx
// -----------------------------------------------------

export const learnList = [
  "Understand the difference between UX and UI Design.",
  "Practice low-fidelity wireframing.",
  "Use Adobe XD for real projects.",
  "Understand interaction patterns.",
  "Apply design systems correctly.",
  "Create mobile responsive layouts.",
  "Prepare design assets for developers.",
  "Build complete UI kits.",
];

// -----------------------------------------------------
// EVENT CONTENT — required in EventDetails.jsx
// -----------------------------------------------------

export const eventContent = [
  "Introduction to the event",
  "Main presentations",
  "Workshops",
  "Q&A Session",
  "Networking Session",
  "Closing remarks",
];

// -----------------------------------------------------
// TAGS — used in Dashboard sidebar
// -----------------------------------------------------

export const tags = [
  { id: 1, name: "Courses", href: "#" },
  { id: 2, name: "Learn", href: "#" },
  { id: 3, name: "Online", href: "#" },
  { id: 4, name: "Education", href: "#" },
  { id: 5, name: "LMS", href: "#" },
  { id: 6, name: "Training", href: "#" },
];

// -----------------------------------------------------
// FIND EVENT — used in event filter components
// -----------------------------------------------------

export const findEvent = [
  { id: 1, title: "Event From" },
  { id: 2, title: "All Categories" },
  { id: 3, title: "Location" },
  { id: 4, title: "Keyword" },
];

// -----------------------------------------------------
// SINGLE EVENT LOOKUP
// -----------------------------------------------------

export const getEventById = (id) =>
  events.find((e) => Number(e.id) === Number(id));
