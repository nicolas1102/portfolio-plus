export default function Introduction({ DICT }) {
  return (
    <header>
      <div className="flex flex-col items-center justify-center p-5 px-10 text-center">
        <h1 className="mb-1 text-6xl font-bold md:text-7xl dark:text-white md:mb-3">
          {DICT.h1}
        </h1>
        <p className="mb-3 text-xl font-medium md:text-base text-primary-300 dark:text-primary-200">{DICT.title} </p>
        <p className="max-w-xl text-base">
          {DICT.description[0]}
          <br />
          {DICT.description[1]}
        </p>
      </div>
    </header>
  );
}
