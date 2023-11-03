export default function Introduction({ DICT }) {
  return (
    <header>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 px-10">
        <h1 className="text-6xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
          {DICT.h1}
        </h1>
        <p className="text-xl md:text-base mb-3 font-medium">{DICT.title} </p>
        <p className="text-base max-w-xl mb-6 font-bold">
          {DICT.description[0]}
          <br />
          {DICT.description[1]}
        </p>
      </div>
    </header>
  );
}
