'use client'
import Link from "next/link"

export default function ButtonBlueHeader({text,link,locale}) {
  return (
    <div className="flex justify-center items-center w-full ss:w-auto">
        <Link href={`/${locale}`+link} className="flex justify-center items-center w-full ss:w-[189px] px-0 ss:px-[32px] py-[12px] 
        transition-all duration-500 bg-[#002E62] hover:bg-[#012043] rounded-[8px]
        font-line text-[16px] lg:text-[18px] text-[#fcfcfc] font-[700] leading-[150%]">
            {text}
        </Link>
    </div>
  )
}
