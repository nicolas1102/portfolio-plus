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
      className="overflow-hidden transition duration-500 border-2 group border-secondary-500 dark:border-white w-80 shadow-md3 hover:shadow-md3-hover dark:shadow-md3-dk dark:hover:shadow-md3-hover-dk"
    >
      <div className="overflow-hidden">
        <Image
          src={imgUrl}
          width="500"
          height="500"
          alt={title}
          className="object-cover w-full h-48 transition duration-500 cursor-pointer md:h-52 group-hover:scale-110"
        />
      </div>
      <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold md:text-xl dark:text-white md:mb-3 ">
          {title}
        </h3>
        <p className="mb-2">{description}</p>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm dark:text-white ">
          {tecnologies.map((item) => (
            <span
              className="inline-block px-2 py-1 font-semibold transition duration-700 border-2 border-secondary-500 dark:border-white group-hover:bg-primary-200 dark:group-hover:bg-primary-300 shadow-sm2 hover:shadow-sm2-hover dark:shadow-sm2-dk dark:hover:shadow-sm2-hover-dk"
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
