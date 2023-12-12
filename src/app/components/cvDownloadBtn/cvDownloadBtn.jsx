import { useState, useEffect } from "react";
import Image from "next/image";

export default function CvDownloadBtn({ DICT }) {
  return (
    <div className="flex justify-center">
      <div className="text-sm font-bold mb-5 w-fit px-3 py-1 text-secondary-500 dark:text-white border-2 border-secondary-500 dark:border-white shadow-md3 hover:shadow-md3-hover dark:shadow-md3-dk dark:hover:shadow-md3-hover-dk transition duration-500 hover:bg-primary-200  dark:hover:bg-primary-300">
        <a href={DICT.pdfUrl} className="" target="_blank">
          <p>{DICT.title}</p>
        </a>
      </div>
    </div>
  );
}
