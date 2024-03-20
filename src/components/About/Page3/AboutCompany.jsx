'use client'
import { Image } from "@nextui-org/react"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function AboutCompany({data,locale}) {
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full relative gap-y-[32px]'>

                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full gap-y-[24px] lg:gap-y-[40px] lg:gap-x-[5%] xl:gap-x-[10%]">
                    <div className="flex flex-col justify-center items-center w-full sm:w-2/3 lg:w-[30%] gap-y-[24px]">
                        <div className="flex justify-center items-center w-full">
                            <Image className="object-cover object-center w-full h-[92px] z-0 rounded-[16px]" 
                            classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0"}}
                            radius="none"
                            src={urlFor(data?.logo?.image).url()}
                            placeholder="blur"
                            alt={data?.logo?.alt}
                            width="100%" height="100%" quality={100}/>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <Image className="object-cover object-center w-full h-full z-0 rounded-[16px]" 
                            classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0"}}
                            radius="none"
                            src={urlFor(data?.images?.image).url()}
                            placeholder="blur"
                            alt={data?.images?.alt}
                            width="100%" height="100%" quality={100}/>
                        </div>
                        <div className="flex flex-col items-center w-full gap-y-[4px]">
                            <h3 className="text-[18px] xl:text-[20px] text-[#DC818D] font-[700] uppercase">
                                {data?.company?.name}
                            </h3>
                            <p className="font-line text-[16px] text-[#8097B0] font-[400]">
                                {data?.company?.location}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col w-full sm:w-2/3 lg:w-[65%] xl:w-[60%] gap-y-[32px]">
                        {/* Sec01 */}
                        <div className="flex flex-col w-full gap-y-[16px]">
                            <h2 className='text-[18px] lg:text-[20px] font-[700] text-[#002E62]'>
                                {data?.header}
                            </h2>
                            <div className="flex flex-col lg:flex-row w-full gap-y-[8px] gap-x-[24px]">
                                <h3 className="text-[16px] lg:w-[25%] lg:text-[18px] text-[#002E62] font-[500]">
                                    {data?.name?.title}
                                </h3>
                                <p className="text-[16px] lg:w-[65%] lg:text-[18px] text-[#0A2B40] font-[400] leading-[180%] lg:whitespace-pre-line">
                                    {data?.name?.text}
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row w-full gap-y-[8px] gap-x-[24px]">
                                <h3 className="text-[16px] lg:w-[25%] lg:text-[18px] text-[#002E62] font-[500]">
                                    {data?.day?.title}
                                </h3>
                                <p className="text-[16px] lg:w-[65%] lg:text-[18px] text-[#0A2B40] font-[400] leading-[180%] lg:whitespace-pre-line">
                                    {data?.day?.text}
                                </p>
                            </div>
                        </div>

                        {/* Sec02 */}
                        <div className="flex flex-col w-full gap-y-[16px]">
                            <h2 className='text-[18px] lg:text-[20px] font-[700] text-[#002E62]'>
                                {data?.Vision?.title}
                            </h2>
                            <p className="text-[16px] lg:w-[65%] lg:text-[18px] text-[#0A2B40] font-[400] leading-[180%] lg:whitespace-pre-line">
                                {data?.Vision?.text}
                            </p>
                        </div>
                        {/* Sec03 */}
                        <div className="flex flex-col w-full gap-y-[16px]">
                            <h2 className='text-[18px] lg:text-[20px] font-[700] text-[#002E62]'>
                                {data?.CoreValues?.title}
                            </h2>
                            <ul className="flex flex-col w-full list-disc pl-6">
                            {data?.CoreValues?.list?.map((item,index)=>(
                              <li key={`list`+index} className="text-[16px] xl:text-[18px] text-[#002E62] font-[400] leading-[180%]">
                                {item?.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Sec04 */}
                        <div className="flex flex-col w-full gap-y-[16px]">
                            <h2 className='text-[18px] lg:text-[20px] font-[700] text-[#002E62]'>
                                {data?.ourpotential?.title}
                            </h2>
                            <ul className="flex flex-col w-full list-decimal pl-6">
                            {data?.ourpotential?.list?.map((item,index)=>(
                              <li key={`list`+index} className="text-[16px] xl:text-[18px] text-[#002E62] font-[400] leading-[180%]">
                                {item?.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        
                    </div>
                </div>
            

            </div>
        </div>
    </section>
  )
}
