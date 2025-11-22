// src/components/homes/courses/CoursesThree.jsx

import CourseCardTwo from "@/components/homes/courseCards/CourseCardTwo";
import { categories, courses } from "@/data/courses";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ► автоматически формируем уникальные рейтинги из JSON
const viewStatusList = Array.from(
  new Set(courses.map((c) => c.viewStatus || "Unrated"))
);

// ► автоматически формируем уникальные сложности
const difficultyList = Array.from(
  new Set(courses.map((c) => c.difficulty || "Unknown"))
);

export default function CategoriesTwo() {
  const [pageItems, setPageItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [rating, setRating] = useState("All");
  const [currentdifficulty, setCurrentdifficulty] = useState("All");
  const [currentDropdown, setCurrentDropdown] = useState("");

  useEffect(() => {
    setCurrentDropdown("");

    let filtered = [...courses];

    // Фильтр по категории
    if (currentCategory !== "All") {
      filtered = filtered.filter((elm) => elm.category === currentCategory);
    }

    // Фильтр по рейтингу
    if (rating !== "All") {
      filtered = filtered.filter((elm) => elm.viewStatus === rating);
    }

    // Фильтр по сложности
    if (currentdifficulty !== "All") {
      filtered = filtered.filter((elm) => elm.difficulty === currentdifficulty);
    }

    setPageItems(filtered);
  }, [rating, currentdifficulty, currentCategory]);

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        {/* HEADER */}
        <div className="row y-gap-15 justify-between items-center">
          <div className="col-lg-6">
            <div className="sectionTitle">
              <h2 className="sectionTitle__title sm:text-20">
                Our Most Popular Courses
              </h2>
              <p className="sectionTitle__text">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="d-flex items-center pt-30">
          <div className="text-dark-1">Filter By:</div>

          <div className="d-flex flex-wrap x-gap-20 y-gap-20 items-center pl-15">

            {/* CATEGORY FILTER */}
            <div>
              <div
                className={`dropdown js-dropdown js-drop1-active ${
                  currentDropdown === "category" ? "-is-dd-active" : ""
                }`}
              >
                <div
                  onClick={() =>
                    setCurrentDropdown(
                      currentDropdown === "category" ? "" : "category"
                    )
                  }
                  className="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                >
                  <span>
                    {currentCategory === "All" ? "Category" : currentCategory}
                  </span>
                  <i className="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  className={`toggle-element js-drop1-toggle ${
                    currentDropdown === "category" ? "-is-el-visible" : ""
                  }`}
                >
                  <div className="text-14 y-gap-15">
                    <div
                      className={`cursor ${
                        currentCategory === "All" ? "activeMenu" : ""
                      }`}
                      onClick={() => {
                        setCurrentCategory("All");
                        setCurrentDropdown("");
                      }}
                    >
                      All
                    </div>

                    {categories.map((elm, i) => (
                      <div
                        key={i}
                        className={`cursor ${
                          currentCategory === elm ? "activeMenu" : ""
                        }`}
                        onClick={() => {
                          setCurrentCategory(elm);
                          setCurrentDropdown("");
                        }}
                      >
                        {elm}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RATING FILTER */}
            <div>
              <div
                className={`dropdown js-dropdown js-drop2-active ${
                  currentDropdown === "rating" ? "-is-dd-active" : ""
                }`}
              >
                <div
                  onClick={() =>
                    setCurrentDropdown(
                      currentDropdown === "rating" ? "" : "rating"
                    )
                  }
                  className="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                >
                  <span>{rating === "All" ? "Rating" : rating}</span>
                  <i className="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  className={`toggle-element js-drop2-toggle ${
                    currentDropdown === "rating" ? "-is-el-visible" : ""
                  }`}
                >
                  <div className="text-14 y-gap-15">
                    <div
                      className={`cursor ${
                        rating === "All" ? "activeMenu" : ""
                      }`}
                      onClick={() => {
                        setRating("All");
                        setCurrentDropdown("");
                      }}
                    >
                      All
                    </div>

                    {viewStatusList.map((elm, i) => (
                      <div
                        key={i}
                        className={`cursor ${
                          rating === elm ? "activeMenu" : ""
                        }`}
                        onClick={() => {
                          setRating(elm);
                          setCurrentDropdown("");
                        }}
                      >
                        {elm}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* DIFFICULTY FILTER */}
            <div>
              <div
                className={`dropdown js-dropdown js-drop3-active ${
                  currentDropdown === "difficulty" ? "-is-dd-active" : ""
                }`}
              >
                <div
                  onClick={() =>
                    setCurrentDropdown(
                      currentDropdown === "difficulty" ? "" : "difficulty"
                    )
                  }
                  className="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                >
                  <span>
                    {currentdifficulty === "All"
                      ? "Difficulty"
                      : currentdifficulty}
                  </span>
                  <i className="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  className={`toggle-element js-drop3-toggle ${
                    currentDropdown === "difficulty" ? "-is-el-visible" : ""
                  }`}
                >
                  <div className="text-14 y-gap-15">
                    <div
                      className={`cursor ${
                        currentdifficulty === "All" ? "activeMenu" : ""
                      }`}
                      onClick={() => {
                        setCurrentdifficulty("All");
                        setCurrentDropdown("");
                      }}
                    >
                      All
                    </div>

                    {difficultyList.map((elm, i) => (
                      <div
                        key={i}
                        className={`cursor ${
                          currentdifficulty === elm ? "activeMenu" : ""
                        }`}
                        onClick={() => {
                          setCurrentdifficulty(elm);
                          setCurrentDropdown("");
                        }}
                      >
                        {elm}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CARDS */}
        <div className="row y-gap-30 justify-start pt-40">
          {pageItems.slice(0, 8).map((elm, i) => (
            <CourseCardTwo key={i} data={elm} index={i} />
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="row justify-center pt-60 lg:pt-40">
          <div className="col-auto">
            <Link
              to="/courses-list-1"
              className="button -md -outline-purple-1 text-purple-1"
            >
              View All Courses
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
