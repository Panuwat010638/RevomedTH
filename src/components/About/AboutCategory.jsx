'use client'
import { useState } from "react"
//page1
import AboutAb from "./Page1/AboutAb"
import AboutWorld from "./Page1/AboutWorld"
import AboutGrow from "./Page1/AboutGrow"
import AboutGallery from "./Page1/AboutGallery"
import AboutPartnerYourBusiness from "./Page1/AboutPartnerYourBusiness"
import AboutPartner from "./Page1/AboutPartner"
import AboutSlide from "./Page1/AboutSlide"
//Page2
import AboutCeo from "./Page2/AboutCeo"
//page3
import AboutCompany from "./Page3/AboutCompany"

export default function AboutCategory({data1,data2,data3,category,locale}) {
    const [cat,setCat]=useState(category[0]?.title)

  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-full mx-auto'>
            <div className='flex flex-col justify-center items-center w-full h-full '>
                {/* Category */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-full ss:w-[80%] sm:w-[60%] md:w-[70%] lg:w-auto xl:w-[1280px] gap-[16px] lg:gap-[24px] px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]">
                                 
                    {category?.map((item,index)=>(
                        <button key={index} onClick={()=>setCat(item?.title)} className={`flex justify-center items-center px-4 sm::px-[32px] py-[12px] 
                        transition-all duration-300 rounded-[8px]
                        ${cat == item?.title ? "bg-[#004D7D] text-[#fcfcfc] font-[700]":"bg-[#fcfcfc] text-[#a7abbb] hover:bg-[#f3f5fb] font-[700]"}
                        font-line text-[16px] lg:text-[18px] leading-[150%]`}>
                            {item?.title}
                        </button>
                    ))}
                </div>

                {cat== category[0].title ? (
                    <div className="flex flex-col w-full">
                        <AboutAb data={data1.about} locale={locale}/>
                        <AboutWorld data={data1.world} locale={locale}/>
                        <AboutGrow data={data1.grow} locale={locale}/>
                        <AboutGallery data={data1.gallery} locale={locale}/>
                        <AboutPartnerYourBusiness data={data1.PartnerYourBusiness} locale={locale}/>
                        <AboutPartner data={data1.partner} locale={locale}/>
                        <AboutSlide data={data1.slide} locale={locale}/>
                    </div>
                ):null}

                {cat== category[1].title ? (
                    <div className="flex flex-col w-full">
                        <AboutCeo data={data2.about} locale={locale}/>
                    </div>
                ):null}

                {cat== category[2].title ? (
                    <div className="flex flex-col w-full">
                        <AboutCompany data={data3.about} locale={locale}/>
                    </div>
                ):null}
          

            </div>
        </div>
    </section>
  )
}
