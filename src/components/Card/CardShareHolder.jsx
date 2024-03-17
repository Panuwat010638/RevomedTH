'use client'
import { Image,Link } from "@nextui-org/react"
import groq from "groq"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function CardShareHolder({item,index,locale}) {
  return (
    <div className="flex flex-col w-full md:w-[49%] lg:w-[23.5%] h-full gap-y-[24px] relative">
        {/* Image */}
        <div className="flex justify-center items-center w-full md:h-[240px] lg:h-[240px] xl:h-[294px]">
            <Image className="object-cover object-center w-full h-full z-0 rounded-[16px]" 
            classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0 rounded-[16px]"}}
            radius="none"
            src={urlFor(item?.images?.image).url()}
            placeholder="blur"
            alt={item?.images?.alt}
            width="100%" height="100%" quality={100}/>
        </div>
        {/* Text */}
        <div className="flex flex-col w-full gap-y-[8px]">
            <h4 className="text-[18px] xl:text-[20px] text-[#002E62] font-[500] line-clamp-2">
                {locale=='th' ? item?.nameTH:locale=='cn' ? item?.nameCN:item?.nameEN}
            </h4>
            <p className={`${locale == 'en' ? "hidden":''} text-[16px] text-[#6F7489] font-[400]`}>
                {locale=='th' ? item?.nameEN:locale=='cn' ? item?.nameEN:null}
            </p>
        </div>
      
    </div>
  )
}
