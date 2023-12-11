import Image from "next/image";

export default function Loader() {
  return (
    <div>
      <div className="flex justify-center items-center p-3">
        <Image
          src={"/images/nicolas-icon.png"}
          width="500"
          height="500"
          alt="portfolio"
          className="h-12 w-12 md:h-8 object-cover absolute animate-ping"
        />
        <Image
          src={"/images/nicolas-icon.png"}
          width="500"
          height="500"
          alt="portfolio"
          className="h-16 w-16 md:h-8 object-cover relative animate-bounce"
        />
      </div>
      <div className="flex flex-row justify-center gap-4 my-3">
        <div className="w-3 h-3 bg-primary-200 animate-bounce"></div>
        <div className="w-3 h-3 bg-primary-200 animate-bounce"></div>
        <div className="w-3 h-3 bg-primary-200 animate-bounce"></div>
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
