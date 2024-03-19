'use client'
import { useEffect,useState } from "react"
import { Image } from "@nextui-org/react"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function AboutGallery({data,locale}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);

    const [len,setLen]=useState(data?.length)
    const updateActiveIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex > (len/4)+(len%2)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }
    useEffect(() => {
        const interval = setInterval(() => {
          // เรียกใช้ฟังก์ชันเพื่อเปลี่ยนตำแหน่งทุก 5 วินาที
          updateActiveIndex(activeIndex + 1);
        }, 5000);
    
        return () => {
          // เมื่อ component ถูก unmount ให้ล้าง interval
          clearInterval(interval);
        };
      });
      const updateActiveIndex2 = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex > (len/2)-1) {
            newIndex = 0;
        }
        setActiveIndex2(newIndex);
    }
    useEffect(() => {
        const interval = setInterval(() => {
          // เรียกใช้ฟังก์ชันเพื่อเปลี่ยนตำแหน่งทุก 5 วินาที
          updateActiveIndex2(activeIndex2 + 1);
        }, 5000);
    
        return () => {
          // เมื่อ component ถูก unmount ให้ล้าง interval
          clearInterval(interval);
        };
      });
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-full mx-auto pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full relative gap-y-[32px]'>

                <div className="hidden sm:flex w-full ss:w-[90%] sm:w-full md:w-full overflow-hidden">
                    {data?.map((item,index)=>(
                        <div key={index} style={{ transform: `translateX(-${activeIndex * 100}%)` }} 
                        className="flex flex-col items-center min-w-full sm:min-w-[25%] min-h-full transition-all duration-500">
                            {/* Image */}
                            <div className="flex justify-center items-center w-full sm:h-[180px] md:h-[240px] lg:h-[320px] xl:h-[360px]">
                                <Image className="object-cover object-center w-full h-full z-0" 
                                classNames={{img:" object-cover w-full h-full z-0",wrapper:" object-cover w-full h-full z-0"}}
                                radius="none"
                                src={urlFor(item?.image).format('png').url()}
                                placeholder="blur"
                                alt={item?.alt}
                                width="100%" height="100%" quality={100}/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex sm:hidden w-full ss:w-[90%] sm:w-full md:w-full overflow-hidden">
                    {data?.map((item,index)=>(
                        <div key={index} style={{ transform: `translateX(-${activeIndex * 100}%)` }} 
                        className="flex flex-col items-center min-w-full sm:min-w-[23.5%] min-h-full transition-all duration-500">
                            {/* Image */}
                            <div className="flex justify-center items-center w-full md:h-[280px] lg:h-[320px] xl:h-[360px]">
                                <Image className="object-cover object-center w-full h-full z-0" 
                                classNames={{img:" object-cover w-full h-full z-0",wrapper:" object-cover w-full h-full z-0"}}
                                radius="none"
                                src={urlFor(item?.image).format('png').url()}
                                placeholder="blur"
                                alt={item?.alt}
                                width="100%" height="100%" quality={100}/>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`hidden sm:flex justify-center items-end w-full lg:h-full`}>
                    <div className="flex justify-center items-center xl:pb-[40px] gap-x-[8px]">
                      {data?.slice(0,(len/4)+(len%2)).map((item,index)=>(
                        <div key={index} onClick={()=>setActiveIndex(index)} className={`flex w-[12px] h-[12px] rounded-full cursor-pointer ${activeIndex == index ? "bg-[#FDAEB8]":"bg-[#E0E3EB]"}`}/>
                      ))}
                    </div>
                </div>
                <div className="flex sm:hidden justify-center items-end w-full lg:h-full">
                    <div className="flex justify-center items-center xl:pb-[40px] gap-x-[8px]">
                      {data?.slice(0,(len)).map((item,index)=>(
                        <div key={index} onClick={()=>setActiveIndex2(index)} className={`flex w-[12px] h-[12px] rounded-full cursor-pointer ${activeIndex2 == index ? "bg-[#FDAEB8]":"bg-[#E0E3EB]"}`}/>
                      ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
