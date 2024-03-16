'use client'
import Link from "next/link"

export default function ButtonForm({text}) {
  return (
    <div className="flex justify-center lg:justify-end items-center w-full">
        <button type="submit" className="flex justify-center items-center w-full ss:w-auto px-[64px] py-[12px] 
        transition-all duration-500 bg-[#002E62] hover:bg-[#012043] rounded-[8px]
        font-line text-[16px] lg:text-[18px] text-[#fcfcfc] font-[700] leading-[150%]">
            {text}
        </button>
    </div>
  )
}
