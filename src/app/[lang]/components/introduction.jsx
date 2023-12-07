export default function Introduction({ DICT }) {
  return (
    <header>
      <div className="">
        <h1 className="">
          {DICT.h1}
        </h1>
        <p className="">{DICT.title} </p>
        <p className="">
          {DICT.description[0]}
          <br />
          {DICT.description[1]}
        </p>
      </div>
    </header>
  );
}
