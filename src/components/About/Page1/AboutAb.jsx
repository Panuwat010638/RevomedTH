'use client'
import { Image } from "@nextui-org/react"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function AboutAb({data,locale}) {
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[32px] lg:gap-y-[40px]'>
                
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-x-[64px] gap-y-[24px]">
                    <div className="flex w-full sm:w-2/3 lg:w-3/5">
                        <p className={`font-line text-[16px] lg:text-[18px] text-[#002E62] font-[400] leading-[180%] lg:whitespace-pre-line text-balance ${locale == 'th' ? '':'text-justify'}`}>
                            {data?.detail}
                        </p>
                    </div>
                    <div className="flex justify-center items-center w-full sm:w-2/3 lg:w-2/5">
                        <Image className="object-cover object-center w-full h-full z-0 rounded-[16px]" 
                        classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0"}}
                        radius="none"
                        src={urlFor(data?.images?.image).url()}
                        placeholder="blur"
                        alt={data?.images?.alt}
                        width="100%" height="100%" quality={100}/>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
