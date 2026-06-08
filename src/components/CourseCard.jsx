function CourseCard({
  image,
  name,
  description,
  price,
}) {
  return (
    <div className="course">
      <img src={image} alt={name} />

      <div className="course-info">
        <h3>{name}</h3>

        <p>{description}</p>

        <span>${price}.00</span>
      </div>
    </div>
  );
}
export default CourseCard
