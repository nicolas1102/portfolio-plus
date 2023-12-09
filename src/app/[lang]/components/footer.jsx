import Image from "next/image";

export default function Footer({ DICT }) {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            {DICT.items.map((item) => (
              <a
                href={item.url}
                className="bg-white p-2 font-semibold text-white inline-flex items-center space-x-2  border-2 border-secondary-500 dark:border-white overflow-hidden shadow-sm2 hover:shadow-sm2-hover dark:shadow-sm2-dk dark:hover:shadow-sm2-hover-dk transition duration-500 hover:bg-primary-200 "
                key={Math.random()}
                target="_blank"
              >
                <Image
                  src={item.imgUrl}
                  width="24"
                  height="24"
                  alt={item.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm mt-2  opacity-70">
        &copy; {new Date().getFullYear()} {DICT.rights}
      </p>
    </div>
  );
}
