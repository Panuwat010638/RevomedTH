'use client'
import ButtonBlue from "../Button/ButtonBlue"
import CardHomeRevomedWorld from "../Card/CardHomeRevomedWorld"
import wi01 from "../../../public/assets/Images/Home/wi01.png"
import wi02 from "../../../public/assets/Images/Home/wi02.png"
import wi03 from "../../../public/assets/Images/Home/wi03.png"
import wi04 from "../../../public/assets/Images/Home/wi04.png"
import wi05 from "../../../public/assets/Images/Home/wi05.png"
import wi06 from "../../../public/assets/Images/Home/wi06.png"


export default function HomeRevomedWorld({locale}) {
    const data = [
        {title:'โรงงานรับผลิต',icon:wi01,alt:'icon 01'},
        {title:'นำเข้าสารสกัดที่ดีที่สุด\nจากทั่วทุกมุมโลก',icon:wi02,alt:'icon 02'},
        {title:'Packaging Design',icon:wi03,alt:'icon 03'},
        {title:'การสร้างแบรนด์และการตลาด',icon:wi04,alt:'icon 04'},
        {title:'การอบรมสำหรับนักธุรกิจ',icon:wi05,alt:'icon 05'},
        {title:'ธุรกิจอื่น ๆ',icon:wi06,alt:'icon 06'},
    ]
  return (
    <section className='bg-[#F3F5FB]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 py-[48px] sm:py-[60px] xl:py-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[56px]'>
                   
                <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center'>
                {'ธุรกิจในเครือของเรา'}
                </h2>
               
                
                <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full gap-y-[16px] md:gap-y-[24px] gap-x-[16px] md:gap-x-[24px]">
                    {data?.slice(0,6)?.map((item,index)=>(
                        <CardHomeRevomedWorld key={index} item={item} index={index}/>
                    ))}
                    
                </div>

                <ButtonBlue text={"ดูข้อมูลเพิ่มเติม"} link={"#"}/>
            </div>
        </div>
    </section>
  )
}
