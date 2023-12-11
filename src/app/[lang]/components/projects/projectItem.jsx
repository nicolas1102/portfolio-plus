import Image from "next/image";

export default function ProjectItem({
  imgUrl,
  title,
  description,
  tecnologies,
  link,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-2 border-secondary-500 dark:border-white overflow-hidden w-80 shadow-md3 hover:shadow-md3-hover dark:shadow-md3-dk dark:hover:shadow-md3-hover-dk transition duration-500"
    >
      <div className="overflow-hidden">
        <Image
          src={imgUrl}
          width="500"
          height="500"
          alt="portfolio"
          className="w-full h-36 md:h-48 object-cover cursor-pointer transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
        <p className="mb-2">{description}</p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {tecnologies.map((item) => (
            <span
              className="inline-block px-2 py-1 font-semibold border-2 border-secondary-500 dark:border-white group-hover:bg-primary-200  dark:group-hover:bg-primary-300 shadow-sm2 hover:shadow-sm2-hover dark:shadow-sm2-dk dark:hover:shadow-sm2-hover-dk transition duration-700"
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
