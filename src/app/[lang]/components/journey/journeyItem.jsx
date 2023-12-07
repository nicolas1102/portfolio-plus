export default function ProjectItem({ year, title, duration, details }) {
  return (
    <ol className="">
      <li className="mb-10 ml-4">
        <div className="" />
        <p className="">
          <span className="">{year}</span>
          <h3 className="">{title}</h3>
          <div className="">{duration}</div>
        </p>
        <p className="">{details}</p>
      </li>
    </ol>
  );
}
