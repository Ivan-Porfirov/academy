// src/admin/pages/AdminProducts.jsx
import { productData as products } from "@/data/products";

export default function AdminProducts() {
  return (
    <>
      <h2 className="text-22 fw-600 mb-20">Магазин</h2>
      <p className="text-14 text-light-1 mb-30">
        Здесь позже сделаем CRUD для товаров. Сейчас отображается список
        из текущих данных.
      </p>

      <ul className="ul-list y-gap-10">
        {products.map((p) => (
          <li key={p.id}>
            <b>{p.name}</b> — ${p.price}
          </li>
        ))}
      </ul>
    </>
  );
}
