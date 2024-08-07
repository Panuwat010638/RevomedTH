'use client'
import { useState,useEffect } from "react"

export default function HomeBanner({data,localea}) {
    
  return (
    <section className="bg-[#fcfcfc]">
      <div className="max-w-full">
       <div className="flex justify-center items-center w-full h-full">
          <video autoPlay={true} playsInline={true} muted={true} loop controls={false} preload="auto" className='object-contain aspect-video w-full h-full'>
            <source src='/th/Videos/banner.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
       </div>
      </div>
    </section>
  )
}
