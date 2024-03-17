import CardNews from "../Card/CardNews"
import ButtonBlue from "../Button/ButtonBlue"

export default function InvestmentNews({locale,news,data}) {
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center md:justify-between items-center w-full h-full gap-[40px]'>
                {/* Header */}
                <div className="flex justify-center w-full items-center gap-x-[24px]">
                    <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center'>
                    {data?.header}
                    </h2>
                </div>
               
                <div className="flex flex-wrap w-full ss:w-[80%] sm:w-[60%] md:w-[70%] lg:w-full gap-x-[2%] gap-y-[24px] lg:gap-y-[40px]">
                    {news?.slice(0,6)?.map((item,index)=>(
                        <CardNews key={`Investment News`+index} item={item} index={index} locale={locale}/>
                    ))}
                </div>
                
                <ButtonBlue text={data?.button?.title} link={data?.button?.link} locale={locale}/>
            
            </div>
        </div>
    </section>
  )
}
