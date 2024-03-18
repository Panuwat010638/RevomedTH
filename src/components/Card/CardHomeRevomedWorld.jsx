'use client'
import { Image } from "@nextui-org/react"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function CardHomeRevomedWorld({item,index}) {
  return (
    <div key={index} className="flex flex-col items-center w-[49%] sm:w-[32%] lg:w-[15%] h-full gap-[16px] lg:gap-[24px]">
        <div className="flex justify-center items-center w-[80px] h-[80px]">
            <Image className="object-cover object-center z-0" 
            classNames={{img:" object-cover w-full h-full z-0",wrapper:" object-cover z-0"}}
            radius="none"
            src={urlFor(item?.image).url()}
            placeholder="blur"
            alt={item?.alt}
            width="80" height="80" quality={100}/>
        </div>
        <p className='text-[16px] lg:text-[18px] text-[#BA636F] font-[400] leading-[150%] lg:whitespace-pre-line text-center'>
            {item?.title}
        </p>
    </div>
  )
}
