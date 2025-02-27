import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CvDownloadBtn({ DICT }) {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <div className='px-3 py-1 mb-5 text-sm font-bold transition duration-500 border-2 w-fit text-secondary-500 dark:text-white border-secondary-500 dark:border-white shadow-md3 hover:shadow-md3-hover dark:shadow-md3-dk dark:hover:shadow-md3-hover-dk hover:bg-primary-200 dark:hover:bg-primary-300'>
        <a href={DICT.esCVDownloadBtn.pdfUrl} className='' target='_blank'>
          <p>{DICT.esCVDownloadBtn.title}</p>
        </a>
      </div>
      <div className='px-3 py-1 mb-5 text-sm font-bold transition duration-500 border-2 w-fit text-secondary-500 dark:text-white border-secondary-500 dark:border-white shadow-md3 hover:shadow-md3-hover dark:shadow-md3-dk dark:hover:shadow-md3-hover-dk hover:bg-primary-200 dark:hover:bg-primary-300'>
        <a href={DICT.enCVDownloadBtn.pdfUrl} className='' target='_blank'>
          <p>{DICT.enCVDownloadBtn.title}</p>
        </a>
      </div>
    </div>
  )
}
