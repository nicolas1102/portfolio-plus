import Title from "@/app/components/common/title";
import Image from "next/image";

export default function ProjectItem({ year, title, duration, details }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l-2 border-secondary-500 dark:border-white ">
      <div className="border-2 ml-4 mb-4 p-2 border-secondary-500 dark:border-white shadow-md3 hover:shadow-md3-hover dark:shadow-md3-dk dark:hover:shadow-md3-hover-dk transition duration-500">
        <li className="mb-5">
          <div className="absolute w-3 h-3 bg-secondary-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-secondary-500 dark:bg-white" />
          <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-secondary-500 bg-secondary-500 dark:bg-white rounded-md">
              {year}
            </span>
            <h3 className="text-lg font-semibold text-secondary-500 dark:text-white">
              {title}
            </h3>
            <p className="my-1 text-sm font-bold leading-none text-primary-300 dark:text-primary-200">
              {"- " + duration + " -"}
            </p>
          </div>
          <p className="my-2 text-base font-normal text-secondary-500 dark:text-white">
            {details}
          </p>
        </li>
      </div>
    </ol>
  );
}
