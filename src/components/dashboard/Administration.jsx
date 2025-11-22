// src/components/dashboard/Administration.jsx
import FooterNine from "@/components/layout/footers/FooterNine"; // ← правильный путь
import { useState } from "react";
import CoursesAdmin from "./admin/CoursesAdmin";


// ✅ новый импорт

const tabs = [
  { id: 1, title: "Site administration" },
  { id: 2, title: "Users" },
  { id: 3, title: "Courses" },
  // ...
];

export default function Administration() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        {/* шапка */}
        {/* ... */}

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="tabs -active-purple-2 js-tabs pt-0">
                {/* кнопки табов */}
                {/* ... */}

                <div className="tabs__content py-40 px-30 js-tabs-content">
                  {/* Tab 1: Site administration */}
                  <div
                    className={`tabs__pane -tab-item-1 ${
                      activeTab === 1 ? "is-active" : ""
                    }`}
                  >
                    {/* как было */}
                  </div>

                  {/* ✅ Tab 3: Courses */}
                  <div
                    className={`tabs__pane -tab-item-3 ${
                      activeTab === 3 ? "is-active" : ""
                    }`}
                  >
                    <CoursesAdmin />
                  </div>

                  {/* дальше можешь по аналогии добавить Users, Grades и т.д. */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterNine />
    </div>
  );
}
