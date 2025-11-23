// src/admin/pages/AdminEvents.jsx
import { events } from "@/data/events";

export default function AdminEvents() {
  return (
    <>
      <h2 className="text-22 fw-600 mb-20">События</h2>
      <p className="text-14 text-light-1 mb-30">
        Здесь позже сделаем полноценный CRUD по событиям (events). Сейчас
        просто список из текущих данных.
      </p>

      <ul className="ul-list y-gap-10">
        {events.map((e) => (
          <li key={e.id}>
            <b>{e.desc || e.title}</b> — {e.date} · {e.location}
          </li>
        ))}
      </ul>
    </>
  );
}
