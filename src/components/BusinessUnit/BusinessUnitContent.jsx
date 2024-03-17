'use client'
import { Image } from "@nextui-org/react"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function BusinessUnitContent({business}) {
  console.log(business)
  return (
    <section className='bg-[#F3F5FB]'>
        <div className='max-w-full mx-auto pb-[80px] lg:pb-0'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[40px] lg:gap-y-[0px]'>
                
                {business?.map((item,index)=>(
                  <div key={`Business Unit `+item?.title} className='flex flex-col-reverse lg:flex-col items-center w-full sm:w-[80%] md:w-[60%] lg:w-full lg:h-[460px] xl:h-[568px] relative gap-y-[40px]'>
                    {/* Text */}
                    <div className={`flex ${index%2==0 ? "justify-end":"justify-start"} items-center w-full xl:w-[1280px] lg:h-full px-6 xl:px-4`}>
                      {/* Content Text */}
                      <div className='flex flex-col justify-center w-full lg:w-[50%] lg:h-full gap-y-[24px] lg:gap-y-[32px] lg:pl-[5%] xl:pl-[132px]'>
                        <h2 className='font-line text-[24px] lg:text-[36px] text-[#EBABB4] font-[700] text-center lg:text-start'>
                            {item?.title}
                        </h2>
                        <div className="flex flex-col w-full gap-y-[16px]">
                          <h3 className='text-[18px] lg:text-[20px] text-[#012043] font-[600] text-center lg:text-start'>
                              {item?.subtitle}
                          </h3>
                          <ul className="flex flex-col items-center lg:items-start w-full list-disc pl-6">
                            {item?.list?.map((item,index)=>(
                              <li key={`list`+index} className="text-[16px] xl:text-[18px] text-[#012043] font-[400] leading-[180%]">
                                {item?.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Image */}
                    <div className={`flex ${index%2==0 ? "justify-start":"justify-end"} w-full h-[308px] sm:h-[360px] lg:h-full lg:absolute top-0`}>
                      <div className="flex justify-center items-center w-full lg:w-[50%] h-full">
                          <Image className="object-cover object-center w-full h-full z-[10]" 
                          classNames={{img:" object-cover w-full h-full z-[10]",wrapper:" object-cover w-full h-full z-[10]"}}
                          radius="none"
                          src={urlFor(item?.mainImage?.image).url()}
                          placeholder="blur"
                          alt={item?.mainImage?.alt}
                          width="100%" height="100%" quality={100}/>
                      </div>
                    </div>
                  </div>
                ))}

            </div>
        </div>
    </section>
  )
}
