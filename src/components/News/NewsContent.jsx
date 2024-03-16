'use client'
import { useState,useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"

import CardNews from "../Card/CardNews"

export default function NewsContent({news,category}) {
    console.log(news)
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[40px] lg:gap-y-[64px]'>
                {/* Category */}
                <div>

                </div>
                {/* News list card */}
                <div className="flex flex-wrap w-full ss:w-[80%] sm:w-[60%] md:w-[70%] lg:w-full gap-x-[2%] gap-y-[24px] lg:gap-y-[40px]">
                    {news?.map((item,index)=>(
                        <CardNews key={index} item={item} index={index}/>
                    ))}
                </div>

            </div>
        </div>
    </section>
  )
}
