'use client'
import { Image } from "@nextui-org/react"
import arrowR from "../../../../public/assets/Images/Home/arrowR.png"
import arrowT from "../../../../public/assets/Images/Home/arrowT.png"

export default function AboutGrow({data,locale}) {
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 py-[48px] sm:py-[60px] xl:py-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[100px] md:gap-y-[48px] relative'>
                
                <div className="flex flex-col-reverse md:flex-row w-full md:justify-between md:gap-x-[10%] xl:gap-x-[15%] gap-y-[90px] pt-[60px] md:pt-0">
                    {data?.data?.map((item,index)=>(
                        <div key={index} className="flex flex-row-reverse items-center md:items-start md:flex-col w-full md:w-[26.67%] xl:w-[23.3%] gap-[40px] z-[10]">
                            <div className="flex flex-col w-[80%] md:w-full gap-y-[16px]">
                                <h4 className="font-line text-[24px] xl:text-[36px] text-[#EBABB4] font-[700] leading-[150%] uppercase">
                                    {item?.year}
                                </h4>
                                <p className="text-[16px] lg:text-[18px] text-[#002E62] font-[400] leading-[180%] lg:whitespace-pre-line">
                                    {item?.detail}
                                </p>
                            </div>
                            <div className="flex md:hidden justify-center items-center min-w-[56px] md:w-[80px] min-h-[56px] md:h-[80px] rounded-full">
                               
                            </div>
                        </div>
                    ))}
                </div>

                {/* circle */}
                <div className="hidden md:flex justify-center items-center w-full">
                <Image className=" object-contain object-center w-full h-full z-0" 
                        classNames={{img:"object-contain w-full h-full z-0 rounded-[16px]",wrapper:"object-contain w-full h-full z-0"}}
                        radius="none"
                        src={arrowR?.src}
                        placeholder="blur"
                        alt={'ArrowR'}
                        width="100%" height="100%" quality={100}/>              
                </div>
                <div className="flex md:hidden justify-center items-center absolute top-0 left-0 ss:left-[0.25%] s:left-[2%] sm:left-[4%]">
                <Image className=" object-contain object-center w-full h-[600px] ss:h-[550px] z-0" 
                        classNames={{img:"object-contain w-full h-full z-0 rounded-[16px]",wrapper:"object-contain w-full h-full z-0"}}
                        radius="none"
                        src={arrowT?.src}
                        placeholder="blur"
                        alt={'ArrowT'}
                        width="100%" height="100%" quality={100}/>              
                </div>

                
            </div>
        </div>
    </section>
  )
}
