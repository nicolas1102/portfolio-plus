import Image from "next/image";

export default function Footer({ DICT }) {
  return (
    <div className="">
      <div className="">
        <div>
          <div className="">
            {DICT.items.map((item) => (
              <a
                href={item.url}
                className=""
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
