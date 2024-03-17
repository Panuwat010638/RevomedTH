'use client'
import ButtonBlueHeader from "../Button/ButtonBlueHeader"
import CardBlogInHome from "../Card/CardBlogInHome"
import { Image } from "@nextui-org/react"
import img01 from "../../../public/assets/Images/Home/Blog/img01.png"
import img02 from "../../../public/assets/Images/Home/Blog/img02.png"
import img03 from "../../../public/assets/Images/Home/Blog/img03.png"
import img04 from "../../../public/assets/Images/Home/Blog/img04.png"

export default function HomeBlog() {
    const data =[
        {title:"คนแรกของไทย! ผู้หญิงเก่ง “ดร.วาสนา อินทะแสง” พาไทยชื่อเสียงดังไกล ตั้งโรงงานผลิตอาหารเสริม Revomed New Zealand Limited",detail:"ยังคงเดินหน้าขยายฐานการผลิตในต่างประเทศอย่างต่อเนื่อง สำหรับ “Revomed Group” นำโดย “ดร.วาสนา อินทะแสง” หลังจากที่เพิ่งเปิดโปรเจกต์แรกของปี 2024 สุดยิ่งใหญ่ กับการขยายฐานสู่ประเทศเมียนมา",category:"ข่าวสาร Revomed",mainImage:{image:img01,alt:"img01"},date:"01/03/2567"},
        {title:'"รีโว่เมด" บุก "เมียนมา" พาแบรนด์ไทยเติบโต ตั้งเป้าโตขึ้น 2 เท่าในปี 66',detail:"คนแรกของไทย! ผู้หญิงเก่ง “ดร.วาสนา อินทะแสง” พาไทยชื่อเสียงดังไกล ตั้งโรงงานผลิตอาหารเสริม...",category:"ข่าวสาร Revomed",mainImage:{image:img02,alt:"img01"},date:"17/10/2566"},
        {title:"เมย์ วาสนา KICK OFF REVOMED CAMBODIA ยกโรงงานระดับมาตรฐานสู่กัมพูชา",detail:"คนแรกของไทย! ผู้หญิงเก่ง “ดร.วาสนา อินทะแสง” พาไทยชื่อเสียงดังไกล ตั้งโรงงานผลิตอาหารเสริม Revomed New Zealand Limited",category:"ข่าวสาร Revomed",mainImage:{image:img03,alt:"img01"},date:"28/06/2566"},
        {title:"รีโว่เมด พร้อมดันแบรนด์ไทยสู่ตลาดโลก เล็งขายหุ้นไอพีโอ",detail:"คนแรกของไทย! ผู้หญิงเก่ง “ดร.วาสนา อินทะแสง” พาไทยชื่อเสียงดังไกล ตั้งโรงงานผลิตอาหารเสริม Revomed New Zealand Limited",category:"ข่าวสาร Revomed",mainImage:{image:img04,alt:"img01"},date:"11/08/2565"},
    ]
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full relative gap-y-[48px]'>
                
                {/* Header */}
                <div className="hidden sm:flex justify-between w-full items-center gap-x-[24px]">
                    <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center'>
                    {'ข่าวสารของเรา'}
                    </h2>
                    <ButtonBlueHeader text={"ดูทั้งหมด"} link={"#"}/>
                </div>
                {/* Header */}
                <div className="flex sm:hidden justify-center w-full items-center gap-x-[24px]">
                    <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center'>
                    {'ข่าวสารของเรา'}
                    </h2>
                </div>

                {/* Highlight */}
                <div className="hidden md:flex w-full">
                    {data?.slice(0,1).map((item,index)=>(
                        <div className="flex justify-between items-center gap-x-[5%]">
                            {/* Image */}
                            <div className="flex justify-center items-center w-[47.5%]">
                                <Image className="object-cover object-center w-full h-full z-0 rounded-[16px]" 
                                classNames={{img:" object-cover w-full h-full z-0 rounded-[16px]",wrapper:" object-cover w-full h-full z-0 rounded-[16px]"}}
                                radius="none"
                                src={item?.mainImage?.image?.src}
                                placeholder="blur"
                                alt={item?.mainImage?.alt}
                                width="100%" height="100%" quality={100}/>
                            </div>

                            {/* Text */}
                            <div className="flex flex-col w-[47.5%] gap-y-[32px]">
                                <div className="flex justify-between items-center gap-x-[24px]">
                                    <h4 className="text-[18px] lg:text-[20px] text-[#DC818D] font-[500] leading-[150%]">
                                        {item?.category}
                                    </h4>
                                    <p className='text-[16px] xl:text-[18px] text-[#6F7489] font-[400] leading-[180%]'>
                                        {item?.date}
                                    </p>
                                </div>
                                <h3 className="text-[20px] lg:text-[24px] text-[#012043] font-[600] leading-[150%] line-clamp-3">
                                    {item?.title}
                                </h3>
                                <p className='text-[16px] xl:text-[18px] text-[#002E62] font-[400] leading-[180%] line-clamp-4'>
                                    {item?.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Blog */}
                <div className="hidden md:flex justify-center w-full gap-x-[2%]">
                    {data?.slice(1,4).map((item,index)=>(
                        <CardBlogInHome key={index} item={item} index={index}/>
                    ))}
                </div>

                {/* Blog M */}
                <div className="flex md:hidden flex-col justify-center w-full ss:w-[80%] sm:w-[60%] gap-y-[24px]">
                    {data?.slice(0,4).map((item,index)=>(
                        <CardBlogInHome key={index} item={item} index={index}/>
                    ))}
                </div>
                
            </div>
        </div>
    </section>
  )
}
