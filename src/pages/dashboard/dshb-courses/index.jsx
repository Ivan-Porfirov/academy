// import Preloader from "@/components/common/Preloader";
// import MyCourses from "@/components/dashboard/MyCourses";
// import Sidebar from "@/components/dashboard/Sidebar";
// import HeaderDashboard from "@/components/layout/headers/HeaderDashboard";

const metadata = {
  title: "Dashboard – Courses Admin | Academy",
  description: "Course administration panel"
};

export default function DshbCoursesPage() {
  return (
    <div className="barba-container" data-barba="container">
      <MetaComponent meta={metadata} />
      <main className="main-content">
        <CoursesAdmin />
      </main>
    </div>
  );
}