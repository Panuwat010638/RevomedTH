'use client'
import { useState } from "react"

export default function CSRRoadmap({data,locale}) {
    const [select,setSelect]=useState(data?.roadmap[0]?.year)
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[40px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start w-full h-full  gap-y-[24px] gap-x-[2.5%]'>
                {/* Header */}
                <div className='lg:h-[400px] flex w-full lg:w-[15%]  justify-center lg:justify-start border-b-[1px] lg:border-b-0 border-r-0 lg:border-r-[1px] border-solid border-[#EBABB4] pb-[24px] lg:pb-0 pr-0 lg:pr-[24px]'>
                    <h2 className='font-line text-[24px] xl:text-[32px] text-[#002E62] font-[700] whitespace-pre-line text-center lg:text-start'>
                        {data?.header}
                    </h2>
                </div>
                <ul className='flex flex-col ss:flex-row lg:flex-col justify-start ss:justify-center lg:justify-start w-[184px] ss:w-full lg:w-[15%] lg:h-[400px]'>
                    {data?.roadmap?.map((item,index)=>(
                        <li className="flex items-center px-[10px] py-[20px]">
                            <button onClick={()=>setSelect(item?.year)} className={`flex items-center gap-x-[16px] font-line text-[16px] lg:text-[18px] font-[700] transition-all duration-500
                            ${select== item?.year ? "text-[#BA636F]":"text-[#EBABB4]"}`}>
                                <div className={`flex min-w-[16px] min-h-[16px] rounded-full transition-all duration-500 
                                ${select== item?.year ? "bg-[#BA636F]":"bg-[#EBABB4]"}`}/>
                                {item?.year}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className='flex flex-col w-full ss:w-[80%] sm:w-[60%] md:w-[70%] lg:w-[65%] lg:h-full relative'>
                    {data?.roadmap?.map((item,index)=>(
                        <div className={`flex flex-col w-full lg:h-full px-[32px] py-[16px] bg-[#FFECEE] gap-y-[16px] rounded-[16px] transition-all duration-500 ${select==item?.year? "opacity-100 relative z-[10]":"opacity-0 absolute top-0"}`}>
                            <h4 className="font-line text-[16px] lg:text-[18px] text-[#BA636F] font-[700]">
                                {item?.year}
                            </h4>
                            <ul className="flex flex-col w-full list-disc pl-6 gap-y-[4px]">
                              {item?.list?.map((item,index)=>(
                                <li key={`list`+index} className="text-[16px] xl:text-[18px] text-[#14142A] font-[400] leading-[150%]">
                                  {item?.text}
                                </li>
                              ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    </section>
  )
}
