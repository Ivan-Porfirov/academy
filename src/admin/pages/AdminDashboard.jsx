// src/admin/pages/AdminDashboard.jsx
import { courses } from "@/data/courses";
import { events } from "@/data/events";
import { productData as products } from "@/data/products";

export default function AdminDashboard() {
  return (
    <>
      <h2 className="text-22 fw-600 mb-20">Дашборд</h2>
      <p className="text-14 text-light-1 mb-30">
        Здесь ты управляешь курсами, событиями и продуктами. Позже сюда
        можно добавить статистику и графики.
      </p>

      <div className="row y-gap-20">
        <div className="col-md-4">
          <div className="bg-light-6 rounded-8 px-20 py-20">
            <div className="text-13 text-light-1 mb-5">Курсы</div>
            <div className="text-26 fw-600">{courses.length}</div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-light-6 rounded-8 px-20 py-20">
            <div className="text-13 text-light-1 mb-5">События</div>
            <div className="text-26 fw-600">{events.length}</div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-light-6 rounded-8 px-20 py-20">
            <div className="text-13 text-light-1 mb-5">Продукты</div>
            <div className="text-26 fw-600">{products.length}</div>
          </div>
        </div>
      </div>
    </>
  );
}
