import { montserrat } from "@/app/styles/fonts";
import Image from "next/image";

export default function Introduction({ lang, DICT }) {
  return (
    <header >
      <h1>NICOLAS DIAZ</h1>
      <p>This is Nicolas Díaz</p>
      <h1 className="w-64 text-3xl font-bold underline">Hello world!</h1>
      <div className="p-6 max-w-sm mx-auto bg-gray-800 rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Cultiapp Logo White Background"
            width={48}
            height={48}
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </header>
  );
}
