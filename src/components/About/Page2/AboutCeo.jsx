'use client'
import { Image } from "@nextui-org/react"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from "@portabletext/react"
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
        normal: ({ children }) => <p className="text-[16px] xl:text-[18px] text-[#002E62] font-[300] mb-2 md:mb-[32px] whitespace-pre-line">{children}</p>
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

export default function AboutCeo({data,locale}) {
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full relative gap-y-[32px]'>

                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full gap-y-[24px]">
                    <div className="flex flex-col justify-center items-center w-full sm:w-2/3 lg:w-1/4 gap-y-[12px]">
                        <div className="flex justify-center items-center w-full">
                            <Image className="object-cover object-center w-full h-full z-0 rounded-[16px]" 
                            classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0"}}
                            radius="none"
                            src={urlFor(data?.images?.image).url()}
                            placeholder="blur"
                            alt={data?.images?.alt}
                            width="100%" height="100%" quality={100}/>
                        </div>
                        <div className="flex flex-col items-center lg:items-start w-full gap-y-[4px]">
                            <h3 className="font-line text-[20px] xl:text-[24px] text-[#002E62] font-[700] leading-[150%] uppercase">
                                {data?.name?.name}
                            </h3>
                            <p className="font-line text-[16px] text-[#0A2B40] font-[400]">
                                {data?.name?.nameEN}
                            </p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start w-full gap-y-[4px]">
                            <h3 className="text-[18px] lg:text-[20px] text-[#DC818D] font-[700] uppercase">
                                {data?.role?.role}
                            </h3>
                            <p className="font-line text-[16px] text-[#0A2B40] font-[400]">
                                {data?.role?.subrole}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col w-full sm:w-2/3 lg:w-3/5 gap-y-[32px]">
                        <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] text-center lg:text-start'>
                            {data?.header}
                        </h2>
                        <PortableText
                        value={data?.body}
                        components={ptComponents}
                        />
                        <div className="flex flex-col justify-end items-end w-full gap-y-[12px] lg:pt-[48px]">
                            <div className="flex flex-col items-center gap-y-[12px]">
                                <div className="flex justify-center items-center lg:w-[360px] xl:w-[411px]">
                                    <Image className="object-cover object-center w-full h-full z-0 rounded-[16px]" 
                                    classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0"}}
                                    radius="none"
                                    src={urlFor(data?.signature?.image).url()}
                                    placeholder="blur"
                                    alt={data?.signature?.alt}
                                    width="100%" height="100%" quality={100}/>
                                </div>
                                <h3 className="font-line text-[16px] lg:text-[20px] xl:text-[24px] text-[#002E62] font-[700] leading-[150%] uppercase">
                                    {data?.signature?.company}
                                </h3>
                                <p className="font-line text-[16px] text-[#0A2B40] font-[400]">
                                    {data?.name?.nameEN}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            

            </div>
        </div>
    </section>
  )
}
