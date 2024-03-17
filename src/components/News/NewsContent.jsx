'use client'
import { useState,useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import {Pagination,Tabs, Tab} from "@nextui-org/react";

import CardNews from "../Card/CardNews"

export default function NewsContent({news,category,locale}) {
    const [cat,setCat]=useState('ALL')
    const router = useSearchParams();
    const pathname = usePathname();
    // PaginaTion ////////////////////////////////////
    const itemsPerPage = 18;
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex,setStartIndex]=useState(0)
    const [endIndex,setEndIndex]=useState(0)
    const [newsfilter,setFilterNews]=useState(news||[])
    useEffect(() => {
        const cur = Number(currentPage-1);
        const startIndex = cur * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setStartIndex(startIndex)
        setEndIndex(endIndex)
        // ทำอย่างอื่นที่คุณต้องการที่นี่ เช่น เรียก API หรืออัพเดตสถานะอื่น ๆ
      }, [currentPage,startIndex,endIndex]);

    const lengthData = newsfilter?.length
    const result = parseInt(lengthData / itemsPerPage);
    const result2 = parseInt(lengthData % itemsPerPage);
    // Scroll to Top Current Page change///////////////////////////////////////////////////
    useEffect(() => {
        // เมื่อ currentPage เปลี่ยนแปลง ให้เลื่อนหน้าเว็บไปที่ด้านบน
        window.scrollTo({ top: 376});
      }, [currentPage]);
    // Params Quary Category //////////////////////////////////////////////////////////////
    const qp = router.toString()||'/news'
      const text=qp.replace("category=", "");
      const text2=decodeURI(text)
      const textQuery1=text2.replace("+", " ");
      const textQuery=textQuery1.replace("+", " ");
      useEffect(() => {
          setCat(textQuery)
          if (textQuery !='/news' ) {       
              setCat(textQuery);
              setCurrentPage(1);
          } else {
           
              setCat('ALL');
              setCurrentPage(1);
          }
        }, [pathname,qp,router,pathname]);
        useEffect(() => {
          if(cat!='ALL'){
         
            const filteredNews = news.filter(item => item.category == `${cat}`);
            setFilterNews(filteredNews);
            setCurrentPage(1);
 
          }else {
            setFilterNews(news);
            setCurrentPage(1);
        
          }            
        }, [cat]);

    
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[40px] lg:gap-y-[64px]'>
                {/* Category */}
                <div className="flex flex-col md:flex-row flex-wrap items-center w-full ss:w-[80%] sm:w-[60%] md:w-[70%] lg:w-auto gap-[16px] lg:gap-[24px]">
                    <button onClick={()=>setCat("ALL")} className={`flex justify-center items-center w-full lg:w-[240px] px-0 ss:px-[32px] py-[12px] 
                    transition-all duration-500 rounded-[8px]
                    ${cat == 'ALL' ? "bg-[#004D7D] text-[#fcfcfc]":"bg-[#fcfcfc] text-[#6F7489] hover:bg-[#f3f5fb]"}
                    font-line text-[16px] lg:text-[18px]  font-[700] leading-[150%]`}>
                        ข่าวสารทั้งหมด
                    </button>
                    
                    {category?.map((item,index)=>(
                        <button key={index} onClick={()=>setCat(item?.title)} className={`flex justify-center items-center w-full lg:w-[240px] px-0 ss:px-[32px] py-[12px] 
                        transition-all duration-500 rounded-[8px]
                        ${cat == item?.title ? "bg-[#004D7D] text-[#fcfcfc]":"bg-[#fcfcfc] text-[#6F7489] hover:bg-[#f3f5fb]"}
                        font-line text-[16px] lg:text-[18px]  font-[700] leading-[150%]`}>
                            {item?.title}
                        </button>
                    ))}
                </div>
                {/* News list card */}
                <div className="flex flex-wrap w-full ss:w-[80%] sm:w-[60%] md:w-[70%] lg:w-full gap-x-[2%] gap-y-[24px] lg:gap-y-[40px]">
                    {newsfilter?.slice(startIndex, endIndex).map((item,index)=>(
                        <CardNews key={index} item={item} index={index} locale={locale}/>
                    ))}
                </div>

                {/* Pagination */}
                {result != 0 && result2==0  ? (
                  <div className="flex justify-center items-center w-full">
                      <Pagination showControls 
                      total={result} 
                      classNames={{
                        item: "text-[#002E62]",
                        cursor:
                          "bg-[#002E62] text-[#fcfcfc]",
                        next:"text-[#002E62]",
                        prev:"text-[#002E62]",
                        }}
                      page={currentPage}
                      onChange={setCurrentPage}
                     
                       />
                  </div> 
                  ):result != 0 && result2!=0 ? (
                    <div className="flex justify-center items-center w-full">
                    <Pagination showControls 
                    total={result+1} 
                    classNames={{
                      item: "text-[#002E62]",
                      cursor:
                        "bg-[#002E62] text-[#fcfcfc]",
                      next:"text-[#002E62]",
                      prev:"text-[#002E62]",
                      }}
                    page={currentPage}
                    onChange={setCurrentPage}
                   
                     />
                </div> 
                ):null}

            </div>
        </div>
    </section>
  )
}
