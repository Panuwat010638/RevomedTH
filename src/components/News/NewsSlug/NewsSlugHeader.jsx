'use client'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

export default function NewsSlugHeader({data,locale}) {
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pt-[32px] pb-[32px] xl:pt-[24px] xl:pb-[32px]'>
            <div className='flex flex-col sm:flex-row justify-center md:justify-between items-center w-full h-full gap-[16px]'>
                {/*  */}
               
                <Breadcrumbs size="md" className="flex items-center w-full md:w-[80%]">
                  <BreadcrumbItem href={`/${locale}/news`} classNames={{item:"text-[16px] xl:text-[18px] text-[#ABB1C1] font-[400] leading-[150%]"}} className="text-[16px] xl:text-[18px] text-[#ABB1C1] font-[400] leading-[150%]">{locale == "th" ? "ข่าวสารของเรา":locale=="cn" ? "我们的新闻" : "Our News"}</BreadcrumbItem>
                  <BreadcrumbItem href={`/${locale}/news?category=${data?.category}`} classNames={{item:"text-[16px] xl:text-[18px] text-[#ABB1C1] font-[400] leading-[150%]"}}>{data?.category}</BreadcrumbItem>
                  <BreadcrumbItem classNames={{item:"text-[16px] xl:text-[18px] text-[#6F7489] font-[400] leading-[150%]"}}>{locale == "th" ? "เนื้อหา":locale=="cn" ? "内容" : "Content"}</BreadcrumbItem>
                </Breadcrumbs>

                

                {/* Date */}
                <div className='flex justify-center md:justify-end w-full md:auto'>
                    <p className="text-[16px] xl:text-[18px]  text-[#6F7489] font-[400] leading-[150%]">
                        {`${data?.date[8]}${data?.date[9]}/${data?.date[5]}${data?.date[6]}/${data?.date[0]}${data?.date[1]}${data?.date[2]}${data?.date[3]}`}
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
