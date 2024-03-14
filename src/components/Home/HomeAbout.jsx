'use client'
import { Image } from "@nextui-org/react"
import ceo from "../../../public/assets/Images/Home/ceo.png"

export default function HomeAbout({data,locale}) {
  return (
    <section className='bg-[#F3F5FB]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 py-[48px] sm:py-[60px] xl:py-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[32px] lg:gap-y-[40px]'>
                <div className="flex justify-center items-center gap-x-[12px] lg:gap-x-[24px]">
                    <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center'>
                    {'ให้เราเป็น'}
                    </h2>
                    <svg width="28" height="4" viewBox="0 0 28 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2H152" stroke="#EBABB4" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center'>
                    {'คู่คิดของธุรกิจคุณ'}
                    </h2>
                </div>
                
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-x-[64px] gap-y-[24px]">
                    <div className="flex justify-center items-center w-full sm:w-2/3 lg:w-2/5">
                        <Image className="object-cover object-center w-full h-full z-0 rounded-[16px]" 
                        classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0"}}
                        radius="none"
                        src={ceo?.src}
                        placeholder="blur"
                        alt={'Ceo Image'}
                        width="100%" height="100%" quality={100}/>
                    </div>
                    <div className="flex w-full sm:w-2/3 lg:w-3/5">
                        <p className='font-line text-[16px] lg:text-[18px] text-[#002E62] font-[400] leading-[180%] whitespace-pre-line'>
                            {'เรามุ่งมั่นที่จะส่งมอบความสำเร็จและความยั่งยืนของธุรกิจให้กับลูกค้า ให้การสนับสนุนด้านการสร้างแบรนด์ด้วยการให้คำปรึกษาด้านธุรกิจและแผนการตลาดระดับพรีเมี่ยม และยังเชื่อมโยงลูกค้ากับพันธมิตรผู้ผลิตของเราผ่านเครือข่ายที่อยู่ในประเทศต่างๆ จากทั่วทุกมุมโลก อาทิ เกาหลี ญี่ปุ่น ฝรั่งเศส อิตาลี และอเมริกา\n\nด้วยทีมวิจัยจากทั่วทุกมุมโลกที่เชี่ยวชาญด้านผลิตภัณฑ์ เพื่ออำนวยความสะดวกให้กับลูกค้าของเรา เพื่อส่งมอบสิ่งที่ดีที่สุดให้กับพาร์ทเนอร์ของเรา'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
