import ButtonBlue from "../Button/ButtonBlue"

export default function HomeInnovation({data,locale}) {
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 py-[48px] sm:py-[60px] xl:py-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[32px] lg:gap-y-[40px]'>
                <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line text-center'>
                    {'SHAPING INNOVATION,\nSHAPE OF THE FUTURE'}
                </h2>
                <svg width="154" height="4" viewBox="0 0 154 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2H152" stroke="#EBABB4" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <p className='font-line text-[16px] lg:text-[18px] text-[#002E62] font-[400] leading-[180%] lg:whitespace-pre-line text-center'>
                    {'เราคือกลุ่มธุรกิจในระดับสากล โดยมีฐานของกลุ่มธุรกิจตั้งอยู่ที่ประเทศไทยและขยายสู่ระดับสากลสู่ พม่า กัมพูชา จีน นิวซีแลนด์ เวียดนาม\nและมีแผนขยายธุรกิจออกไปอย่างต่อเนื่องให้ครอบคลุมได้มากที่สุด ทั้งผลิตภัณฑ์ดูแลสุขภาพและเครื่องสำอาง\nเช่น ครีมสูตร เครื่องสำอาง และอาหารเสริมภายใต้แบรนด์ของคุณ '}
                </p>
                <ButtonBlue text={"เกี่ยวกับเรา"} link={"#"} locale={locale}/>
            </div>
        </div>
    </section>
  )
}
