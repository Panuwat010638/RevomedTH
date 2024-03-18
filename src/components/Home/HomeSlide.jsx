'use client'
import { useEffect,useState } from "react"


export default function HomeSlide({data,locale}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [activeIndex3, setActiveIndex3] = useState(0);
    
  
    const [len,setLen]=useState(data?.length)
    const updateActiveIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex > len-4) {
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
      const updateActiveIndex3 = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex > len-1) {
            newIndex = 0;
        }
        setActiveIndex3(newIndex);
    }
    useEffect(() => {
        const interval = setInterval(() => {
          // เรียกใช้ฟังก์ชันเพื่อเปลี่ยนตำแหน่งทุก 5 วินาที
          updateActiveIndex3(activeIndex3 + 1);
        }, 5000);
    
        return () => {
          // เมื่อ component ถูก unmount ให้ล้าง interval
          clearInterval(interval);
        };
      });
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full relative gap-y-[32px]'>
                
                <div className="hidden lg:flex w-full md:w-[80%] lg:w-full gap-x-[2%] overflow-hidden">
                    {data?.data?.map((item,index)=>(
                        <div key={index} style={{ transform: `translateX(-${activeIndex * 108.5}%)` }} 
                        className="flex flex-col items-center min-w-full sm:min-w-[49%] lg:min-w-[23.5%] min-h-full bg-[#F3F5FB]
                        p-6 rounded-[16px] gap-y-[8px] transition-all duration-500">
                            <h4 className="font-line text-[16px] text-[#6F7489] font-[400] leading-[150%] text-center">
                                {item?.location}
                            </h4>
                            <div className="flex justify-center w-full h-[120px] pb-[8px] border-b-[1px] border-solid border-[#ABB1C1]">
                                <h3 className="font-line text-[20px] xl:text-[24px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center">
                                    {item?.title}
                                </h3>
                            </div>
                            <h4 className="font-line text-[16px] text-[#002E62] font-[400] leading-[150%] text-center">
                                {item?.detail}
                            </h4>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:flex lg:hidden w-full md:w-[80%] lg:w-full gap-x-[2%] overflow-hidden">
                    {data?.data?.map((item,index)=>(
                        <div key={index} style={{ transform: `translateX(-${activeIndex2 * 208.2}%)` }} 
                        className="flex flex-col items-center min-w-full sm:min-w-[49%] lg:min-w-[23.5%] min-h-full bg-[#F3F5FB]
                        p-6 rounded-[16px] gap-y-[12px] transition-all duration-500">
                            <h4 className="font-line text-[16px] text-[#6F7489] font-[400] leading-[150%] text-center">
                                {item?.location}
                            </h4>
                            <div className="flex justify-center w-full h-[90px] lg:h-[120px] pb-[12px] border-b-[1px] border-solid border-[#ABB1C1]">
                                <h3 className="font-line text-[20px] xl:text-[24px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center">
                                    {item?.title}
                                </h3>
                            </div>
                            <h4 className="font-line text-[16px] text-[#002E62] font-[400] leading-[150%] text-center">
                                {item?.detail}
                            </h4>
                        </div>
                    ))}
                </div>
                <div className="flex sm:hidden w-full md:w-[80%] lg:w-full overflow-hidden">
                    {data?.data?.map((item,index)=>(
                        <div key={index} style={{ transform: `translateX(-${activeIndex3 * 100}%)` }} 
                        className="flex flex-col items-center min-w-full sm:min-w-[49%] lg:min-w-[23.5%] min-h-full bg-[#F3F5FB]
                        p-6 rounded-[16px] gap-y-[8px] transition-all duration-500">
                            <h4 className="font-line text-[16px] text-[#6F7489] font-[400] leading-[150%] text-center">
                                {item?.location}
                            </h4>
                            <div className="flex justify-center w-full h-[120px] pb-[8px] border-b-[1px] border-solid border-[#ABB1C1]">
                                <h3 className="font-line text-[20px] xl:text-[24px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center">
                                    {item?.title}
                                </h3>
                            </div>
                            <h4 className="font-line text-[16px] text-[#002E62] font-[400] leading-[150%] text-center">
                                {item?.detail}
                            </h4>
                        </div>
                    ))}
                </div>

                <div className={`${len == 4 ? "lg:hidden":"lg:flex"} hidden justify-center items-end w-full lg:h-full`}>
                    <div className="flex justify-center items-center xl:pb-[40px] gap-x-[8px]">
                      {data?.data?.slice(0,len-3).map((item,index)=>(
                        <div key={index} onClick={()=>setActiveIndex(index)} className={`flex w-[12px] h-[12px]  rounded-full cursor-pointer ${activeIndex == index ? "bg-[#FDAEB8]":"bg-[#E0E3EB]"}`}/>
                      ))}
                    </div>
                </div>
                <div className="hidden sm:flex lg:hidden justify-center items-end w-full lg:h-full">
                    <div className="flex justify-center items-center xl:pb-[40px] gap-x-[8px]">
                      {data?.data?.slice(0,(len/2)+(len%2)).map((item,index)=>(
                        <div key={index} onClick={()=>setActiveIndex2(index)} className={`flex w-[12px] h-[12px]  rounded-full cursor-pointer ${activeIndex2 == index ? "bg-[#FDAEB8]":"bg-[#E0E3EB]"}`}/>
                      ))}
                    </div>
                </div>
                <div className="flex sm:hidden justify-center items-end w-full lg:h-full">
                    <div className="flex justify-center items-center xl:pb-[40px] gap-x-[8px]">
                      {data?.data?.slice(0,len).map((item,index)=>(
                        <div key={index} onClick={()=>setActiveIndex3(index)} className={`flex w-[12px] h-[12px]  rounded-full cursor-pointer ${activeIndex3 == index ? "bg-[#FDAEB8]":"bg-[#E0E3EB]"}`}/>
                      ))}
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
