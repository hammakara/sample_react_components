import { courses } from "./data/courses";
import CourseCard from "./components/CourseCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <div className="courses">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;

