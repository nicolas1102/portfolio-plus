import Title from "@/app/components/common/title";
import Image from "next/image";

export default function ProjectItem({ imgUrl, title, description, tecnologies, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <Image
        src={imgUrl}
        width="500"
        height="500"
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
        <p>
          {description}
        </p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {tecnologies.map((item) => (
            <span
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
              key={item}
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}
