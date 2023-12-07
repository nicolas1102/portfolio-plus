export default function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className=""
    >
      {children}
    </h1>
  );
}
