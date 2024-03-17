'use client'
import { Image } from "@nextui-org/react"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function InvestmentShapeoftheFuture({data,locale}) {
   
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pt-[40px] pb-[40px] lg:pb-[80px] xl:pb-[112px]'>
            <div className='flex flex-col lg:flex-row justify-center items-center w-full h-full lg:h-[535px] lg:gap-x-[5%] gap-y-[40px]'>
                {/* Image */}
                <div className="flex justify-center items-center w-full ss:w-[80%] sm:w-[60%] md:w-[70%] lg:w-[47.5%] lg:h-full">
                    <Image className="object-cover object-center w-full min-h-full z-0 rounded-[16px]" 
                    classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0 rounded-[16px]"}}
                    radius="none"
                    src={urlFor(data?.images?.image).format('png').url()}
                    placeholder="blur"
                    alt={data?.images?.alt}
                    width="100%" height="100%" quality={100}/>
                </div>
                {/* Text */}
                <div className="flex flex-col gap-y-[24px] w-full ss:w-[80%] sm:w-[60%] md:w-[70%] lg:w-[47.5%] lg:h-full">
                    <h2 className='font-line text-[20px] lg:text-[24px] text-[#DC818D] font-[700] leading-[150%] text-center lg:text-start md:whitespace-pre-line'>
                        {data?.header}
                    </h2>
                    <p className='text-[16px] xl:text-[18px] text-[#002E62] font-[400] leading-[150%] ss:whitespace-pre-line lg:whitespace-pre-line'>
                        {data?.detail}
                    </p>
                    <ul className="flex flex-col w-full list-disc pl-6 gap-y-[16px]">
                      {data?.list?.map((item,index)=>(
                        <li key={`list`+index} className="text-[16px] xl:text-[18px] text-[#002E62] font-[400] leading-[150%]">
                          {item?.text}
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
