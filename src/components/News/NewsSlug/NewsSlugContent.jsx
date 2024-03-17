"use client"
import client from "@/client"
import Link from "next/link"
import { Image } from "@nextui-org/react"
import { useState,useEffect } from "react"
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}
const ptComponents = {

    block: { 
        h1: ({ children }) => <h1 id={`${children}`} className=" text-3xl md:text-5xl leading-snug font-semibold text-[#012043] mt-[24px] mb-4">{children}</h1>,
        h2: ({ children }) => <h2 id={`${children}`} className=" text-[20px] md:text-2xl scroll-mt-[168px] leading-snug font-semibold text-[#012043] mb-4">{children}</h2>,
        h3: ({ children }) => <h3 id={`${children}`} className=" text-xl leading-snug font-semibold text-[#012043] mt-[24px] mb-4">{children}</h3>,
        h4: ({ children }) => <h4 id={`${children}`} className=" text-xl leading-snug font-semibold text-[#012043] mt-[24px] mb-4">{children}</h4>,
        h5: ({ children }) => <h5 id={`${children}`} className=" text-lg leading-snug font-semibold text-[#012043] mt-[24px] mb-4 text-center">{children}</h5>,
        normal: ({ children }) => <p className="font-bai text-[16px] xl:text-[18px] text-[#000000] font-[300] mb-2 md:mb-[32px] whitespace-pre-line">{children}</p>
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
  
            return (
              <div className="flex justify-center w-full h-full aspect-auto my-8">
              <Image className="object-contain object-center w-full h-full z-0 rounded-[16px]" 
                    classNames={{img:"object-contain w-full h-full z-0 rounded-[16px]",wrapper:"object-contain w-full h-full z-0 rounded-[16px]"}}
                  alt={value.alt || 'blog image'}
                  radius="none"
                  loading="lazy"
                  width="100%" height="100%"
                  src={urlFor(value).format('png').url()}
              />
          </div>
            )
        },},
        marks: {
          link: ({ value, children }) => <a className="text-lg text-[#0000ef] font-[400] tracking-[0.02em] whitespace-pre-line transition-all duration-500 hover:underline" href={value?.href} target="_blank" rel={'noreferrer'}>{children}</a>,
          strong: ({ children }) => <strong id={`${children}`} className="  font-[700]">{children}</strong>,
      },
        list: {
        bullet: ({ children }) =>
            <ul className="font-bai ml-[48px] md:ml-[56px] list-disc text-[16px] xl:text-[18px] text-[#012043] font-[300] mb-2 md:mb-4 tracking-[0.02em]">
                {children}
            </ul>,
        number: ({ children }) =>
        <ol className="font-bai ml-[22px] md:ml-[30px] list-decimal text-[16px] xl:text-[18px] text-[#012043] font-[300] mb-2 md:mb-4 tracking-[0.02em]">
            {children}
        </ol>
    }
  }

export default function NewsSlugContent({data,locale}) {
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-[110px] pb-[40px] xl:pb-[72px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-[24px] xl:gap-[48px]'>
                {/* header */}
               <div className="flex justify-center items-center w-full">
                    <h1 className="text-[20px] lg:text-[24px] text-[#012043] font-[600] text-center">
                        {data?.title}
                    </h1>
               </div>
               {/* Image Banner */}
               <div className="flex justify-center items-center w-full h-full">
                    <Image className="object-cover object-center w-full h-full z-0 rounded-[16px]" 
                    classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0 rounded-[16px]"}}
                    radius="none"
                    src={urlFor(data?.mainImage?.image).format('png').url()}
                    placeholder="blur"
                    alt={data?.mainImage?.alt}
                    width="100%" height="100%" quality={100}/>
                </div>
               <div className='w-full h-full'>
                    <PortableText
                        value={data?.body}
                        components={ptComponents}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
