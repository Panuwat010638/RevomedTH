'use client'
import { Image } from "@nextui-org/react"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function NewsBanner({data}) {
  return (
    <section className="bg-[#F3F5FB]">
        <div className="max-w-full">
            <div className="flex justify-center items-center w-full h-[200px] lg:h-[376px]">
                {/* Image Banner */}
                <div className="flex justify-center items-center w-full h-full">
                    <Image className="object-cover object-center w-full h-full z-0" 
                    classNames={{img:" object-cover w-full h-full z-0",wrapper:" object-cover w-full h-full z-0"}}
                    radius="none"
                    src={urlFor(data?.images?.image).format('png').url()}
                    placeholder="blur"
                    alt={data?.images?.alt}
                    width="100%" height="100%" quality={100}/>
                </div>
            </div>
        </div>
    </section>
  )
}
