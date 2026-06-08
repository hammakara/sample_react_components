function CourseCard({ course }) {
  return (
    <div className={`course ${course.soldOut ? "soldOut" : ""}`}>
      <img src={course.image} alt={course.name} />
      <div className="course-info">
        <h3>{course.name}</h3>
        <p>{course.description}</p>
        <span>{course.soldOut ? "SoldOut" : `${course.price}.00`}</span>
      </div>
    </div>
  );
}
export default CourseCard
