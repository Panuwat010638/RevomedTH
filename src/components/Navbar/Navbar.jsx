'use client'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import logoimg from "../../../public/assets/Images/Navbar/logo.png"

export default function Navbar({lang,localeData}) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 80;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]);
  
  const locales = localeData.map(item => item.title);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const redirectedPathname = (locale) => {
  
      if (!pathname) return '/'
  
      const segments = pathname.split('/')
  
      if (segments.length > 3) {
  
          segments[1] = locale
  
          return segments.slice(0, 3).join('/')
      }
      segments[1] = locale
  
      return segments.join('/')
  }
  const navbar = {
      logo:{image:logoimg,alt:"Revomed Logo"},
      menu:[
        {title:"หน้าแรก",href:"/",status:true},
        {title:"เกี่ยวกับ Revomed",href:"#",status:true},
        {title:"Business Units",href:"#",status:true},
        {title:"นักลงทุนสัมพันธ์",href:"#",status:true},
        {title:"ข่าวสารของเรา",href:"#",status:true},
        {title:"CSR (Corporate Social Responsibility)",href:"#",status:true},
        {title:"ติดต่อเรา",href:"#",status:true},
      ]
  }
  return (
    <header className="fixed w-screen z-[100]">
        <nav className={` transition-all duration-500 ${scrolled==false && pathname==`/${lang}` ? "bg-transparent":" bg-[#fcfcfc] drop-shadow-md"}`}>
          <div className="max-w-7xl mx-auto px-6 xl:px-0">
            <div className="flex flex-col justify-between items-center min-w-full h-full">
              {/* Nav Menu */}
              <div className="flex justify-between items-center w-full h-[80px]">
                {/* Logo */}
                <div className='flex items-center lg:w-[39%] h-full z-[110]'>
                    <Link href="/" className='flex justify-center items-center'>
                        <Image className="object-contain object-center w-[136px] h-[41px]" alt={navbar?.logo?.alt} src={navbar?.logo?.image} quality={100} width={136} height={41} />
                    </Link>
                </div>
                {/* Menu Button Mobile */}
                <div className="flex items-center h-full z-[110]">
                  <button
                    type="button"
                    className="flex items-center justify-center h-full focus:ring-0 focus:border-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <div className='flex flex-col justify-center items-center gap-y-[4px]'>
                      <div className={`flex w-[20px] h-[2px] bg-[#495D7B] rounded-[0.25px] transition-all duration-500 ${mobileMenuOpen==true ? 'translate-y-[7px] rotate-45 w-[24px]':'translate-y-0 rotate-0'}`}></div>
                      <div className='flex justify-center items-center h-[2px] overflow-hidden'>
                          <div className={`flex w-[12px] h-full rounded-l-[0.25px] bg-[#495D7B] transition-all duration-500 ${mobileMenuOpen==true ? '-translate-x-full opacity-0':'translate-x-0 opacity-100'}`}></div>
                          <div className={`flex w-[12px] h-full rounded-r-[0.25px] bg-[#495D7B] transition-all duration-500 ${mobileMenuOpen==true ? 'translate-x-[110%] opacity-0':'translate-x-0 opacity-100'}`}></div>
                      </div>
                      <div className={`flex w-[20px] h-[2px] bg-[#495D7B] rounded-[0.25px] transition-all duration-500 ${mobileMenuOpen==true ? '-translate-y-[5px] -rotate-45 w-[24px]':'translate-y-0 rotate-0'}`}></div>
                    </div>
                  </button>
                </div>
              </div>


              {/* Menu */}
              <div className={`flex flex-col gap-y-[36px] w-full md:w-[420px] lg:w-[520px] md:drop-shadow-md h-screen bg-[#fcfcfc] px-6 pb-[42px] fixed top-0 right-0 z-[99] transition-all duration-500 transform ${mobileMenuOpen==true ? 'translate-x-0':'translate-x-full'}`}>
                        <ul className="flex flex-col pt-[106px] gap-y-[24px]">
                          {navbar?.menu?.slice(0,navbar?.menu?.length).map((item,index)=>(
                            <li key={index} onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className={`${item?.status== true ? "flex":"hidden"} items-center w-full`}>
                               
                                <Link onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} href={item?.href} className={`pl-[32px] xl:pl-[96px] text-[16px] xl:text-[18px] font-[500] leading-[150%] transition-colors duration-500 hover:text-[#002E62] uppercase ${pathname== `${item?.href}` ? "text-[#002E62]":"text-[#002E62]"}`}>
                                  {item?.title}
                                </Link>
                              
                                
                            </li>
                          ))}
                        </ul>

                      </div>

            </div>
          </div>
        </nav>
    </header>
  )
}
