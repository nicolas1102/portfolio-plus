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
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="">
        &copy; {new Date().getFullYear()} {DICT.rights}
      </p>
    </div>
  );
}
