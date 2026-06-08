import { courses } from "./data/courses";
import CourseCard from "./components/CourseCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {

  return (
    <div className="container">
      <Header />
      <div className="courses">
        {
          courses.length > 0 ? courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          )) : <div>
              <h1>No data</h1>
          </div>
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;

