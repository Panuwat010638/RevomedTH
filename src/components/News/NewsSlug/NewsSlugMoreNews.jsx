import CardMoreNews from "@/components/Card/CardMoreNews"

export default function NewsSlugMoreNews({locale,news}) {
    console.log(news)
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center md:justify-between items-center w-full h-full gap-[40px]'>
                {/* Header */}
                <div className="flex justify-center w-full items-center gap-x-[24px]">
                    <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center'>
                    {'ข่าวสารที่เกี่ยวข้อง'}
                    </h2>
                </div>
               
                <div className="flex flex-col md:flex-row w-full ss:w-[80%] sm:w-[60%] md:w-full gap-x-[2%] gap-y-[24px]">
                    {news?.slice(0,3)?.map((item,index)=>(
                        <CardMoreNews key={`More News`+index} item={item} index={index}/>
                    ))}
                </div>
                

            
            </div>
        </div>
    </section>
  )
}
