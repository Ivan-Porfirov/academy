export const categories = [
  "Art",
  "Business",
  "Marketing",
  "Design",
  "Technology",
  "Management",
  "Finance",
  "Health",
];

export const tags = [
  "Creative",
  "Conference",
  "Workshop",
  "Masterclass",
  "Training",
  "Career",
  "Leadership",
];

export const events = [
  {
    id: 1,
    title: "Art & Creativity Workshop",
    description:
      "A complete workshop for artists, designers and creators to unlock their creative thinking.",
    category: "Art",
    tag: ["Creative", "Workshop"],
    imageSrc: "/assets/img/event-list/1.png",
    date: "2025-02-12",
    location: "Moscow",
    speakers: ["John Carter", "Elena Petrova"],
    price: 120,
    duration: "3 hours",
    capacity: 50,
  },
  {
    id: 2,
    title: "Digital Marketing Summit",
    description:
      "A focused summit on advanced digital marketing tools and strategies.",
    category: "Marketing",
    tag: ["Conference"],
    imageSrc: "/assets/img/event-list/2.png",
    date: "2025-03-20",
    location: "Saint Petersburg",
    speakers: ["Michael Brown", "Olga Sokolova"],
    price: 180,
    duration: "5 hours",
    capacity: 150,
  },
  {
    id: 3,
    title: "Business Leadership Masterclass",
    description:
      "Improve your leadership, decision-making and people-management skills.",
    category: "Business",
    tag: ["Masterclass", "Leadership"],
    imageSrc: "/assets/img/event-list/3.png",
    date: "2025-04-05",
    location: "Online",
    speakers: ["Anna Volkova"],
    price: 90,
    duration: "2 hours",
    capacity: 300,
  },
  {
    id: 4,
    title: "UX/UI Design Bootcamp",
    description:
      "Intensive design training with hands-on practice and real cases.",
    category: "Design",
    tag: ["Workshop"],
    imageSrc: "/assets/img/event-list/4.png",
    date: "2025-05-18",
    location: "Moscow",
    speakers: ["Daniel White"],
    price: 240,
    duration: "6 hours",
    capacity: 80,
  },
  {
    id: 5,
    title: "Neuroscience & Technology Forum",
    description:
      "Explore the intersection of neuroscience, AI and future technologies.",
    category: "Technology",
    tag: ["Conference", "Training"],
    imageSrc: "/assets/img/event-list/5.png",
    date: "2025-06-10",
    location: "Kazan",
    speakers: ["Alex Kim", "Natalia Romanova"],
    price: 350,
    duration: "8 hours",
    capacity: 200,
  },
];

export function findEvent(id) {
  return events.find((e) => e.id == id);
}
