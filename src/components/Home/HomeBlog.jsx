'use client'
import ButtonBlueHeader from "../Button/ButtonBlueHeader"
import CardBlogInHome from "../Card/CardBlogInHome"
import { Image,Link } from "@nextui-org/react"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}


export default function HomeBlog({data,news,locale}) {
   
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full relative gap-y-[48px]'>
                
                {/* Header */}
                <div className="hidden sm:flex justify-between w-full items-center gap-x-[24px]">
                    <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center'>
                    {data?.header}
                    </h2>
                    <ButtonBlueHeader text={data?.button?.title} link={data?.button?.link} locale={locale}/>
                </div>
                {/* Header */}
                <div className="flex sm:hidden justify-center w-full items-center gap-x-[24px]">
                    <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center'>
                    {data?.header}
                    </h2>
                </div>

                {/* Highlight */}
                <div className="hidden md:flex w-full">
                    {news?.slice(0,1).map((item,index)=>(
                        <div key={index} className="flex justify-between items-center gap-x-[5%]">
                            {/* Image */}
                            <div className="flex justify-center items-center w-[47.5%]">
                                <Image className="object-cover object-center w-full h-full z-0 rounded-[16px]" 
                                classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0 rounded-[16px]"}}
                                radius="none"
                                src={urlFor(item?.mainImage?.image).url()}
                                placeholder="blur"
                                alt={item?.mainImage?.alt}
                                width="100%" height="100%" quality={100}/>
                            </div>

                            {/* Text */}
                            <div className="flex flex-col w-[47.5%] gap-y-[32px]">
                                <div className="flex justify-between items-center gap-x-[24px]">
                                    <h4 className="text-[18px] lg:text-[20px] text-[#DC818D] font-[500] leading-[150%]">
                                        {item?.category}
                                    </h4>
                                    <p className='text-[16px] xl:text-[18px] text-[#6F7489] font-[400] leading-[180%]'>
                                        {item?.date}
                                    </p>
                                </div>
                                <Link href={`/${locale}/news/${item?.slug?.slug?.current}`} className="text-[20px] lg:text-[24px] text-[#012043] font-[600] leading-[150%] line-clamp-3">
                                    {item?.title}
                                </Link>
                                <p className='text-[16px] xl:text-[18px] text-[#002E62] font-[400] leading-[180%] line-clamp-4'>
                                    {item?.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Blog */}
                <div className="hidden md:flex justify-center w-full gap-x-[2%]">
                    {news?.slice(1,4).map((item,index)=>(
                        <CardBlogInHome key={index} item={item} index={index} locale={locale}/>
                    ))}
                </div>

                {/* Blog M */}
                <div className="flex md:hidden flex-col justify-center w-full ss:w-[80%] sm:w-[60%] gap-y-[24px]">
                    {news?.slice(0,4).map((item,index)=>(
                        <CardBlogInHome key={index} item={item} index={index} locale={locale}/>
                    ))}
                </div>
                
            </div>
        </div>
    </section>
  )
}
