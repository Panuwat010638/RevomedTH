'use client'
import { Image,Link } from "@nextui-org/react"
import groq from "groq"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function CardNews({item,index,locale}) {
  return (
    <div className="flex flex-col w-full md:w-[49%] lg:w-[32%] h-full gap-y-[24px] relative">
        {/* Image */}
        <div className="flex justify-center items-center w-full md:h-[196px] lg:h-[242px] xl:h-[296px]">
            <Image className="object-cover object-center w-full h-full z-0 rounded-[16px]" 
            classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0 rounded-[16px]"}}
            radius="none"
            src={urlFor(item?.mainImage?.image).url()}
            placeholder="blur"
            alt={item?.mainImage?.alt}
            width="100%" height="100%" quality={100}/>
        </div>
        {/* Text */}
        <div className="flex flex-col w-full gap-y-[8px]">
            <h3 className="h-[48px] xl:h-[54px] text-[16px] xl:text-[18px] text-[#012043] font-[600] leading-[150%] line-clamp-2">
                {item?.title}
            </h3>
            <div className="flex justify-between items-center w-full gap-x-12px] pt-[8px] border-t-[1px] border-solid border-[#E0E3EB]">
                <h4 className="text-[16px] text-[#DC818D] font-[500]">
                    {item?.category}
                </h4>
                <p className='text-[16px] text-[#6F7489] font-[400]'>
                    {item?.date}
                </p>
            </div>
        </div>
        <Link href={`/${locale}/news/${item?.slug?.slug?.current}`} className="flex justify-center items-center w-full h-full absolute top-0 z-[10] rounded-[16px]">
        </Link>
    </div>
  )
}
