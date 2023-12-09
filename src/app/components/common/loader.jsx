export default function Loader() {
  return (
    <div>
      <div className="flex flex-row justify-center gap-4 my-3">
        <div className="w-3 h-3 bg-primary-200 animate-bounce "></div>
        <div className="w-3 h-3 bg-primary-200 animate-bounce "></div>
        <div className="w-3 h-3 bg-primary-200 animate-bounce "></div>
      </div>
      <h1 className="text-secondary-400 absolute font-bold animate-ping">
        Loading...
      </h1>
      <h1 className="text-secondary-400 font-bold relative inline-flex ">
        Loading...
      </h1>
    </div>
  );
}
