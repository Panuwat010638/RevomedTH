'use client'
import ButtonBlue from "../Button/ButtonBlue"
import CardHomeRevomedWorld from "../Card/CardHomeRevomedWorld"

export default function HomeRevomedWorld({data,locale}) {
  return (
    <section className='bg-[#F3F5FB]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 py-[48px] sm:py-[60px] xl:py-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[56px]'>
                   
                <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center'>
                {data?.header}
                </h2>
               
                
                <div className="flex flex-wrap w-full gap-y-[16px] md:gap-y-[24px] gap-x-[2%]">
                    {data?.list?.slice(0,6)?.map((item,index)=>(
                        <CardHomeRevomedWorld key={index} item={item} index={index} locale={locale} />
                    ))}
                    
                </div>

                <ButtonBlue text={data?.button?.title} link={data?.button?.link} locale={locale}/>
            </div>
        </div>
    </section>
  )
}
