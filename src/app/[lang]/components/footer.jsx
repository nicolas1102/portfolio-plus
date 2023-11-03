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
                className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
                key={item.key}
              >
                <Image
                  src={item.imgUrl}
                  width="24"
                  height="24"
                  alt={item.name}
                  // className="w-5 h-5 fill-current"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm mt-2  opacity-50">
        &copy; {new Date().getFullYear()} Nicolás Díaz. All rights reserved.
      </p>
    </div>
  );
}
