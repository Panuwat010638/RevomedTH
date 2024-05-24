'use client'
import { useState,useEffect ,useMemo} from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button,Link} from "@nextui-org/react";
import Image from 'next/image'
import { usePathname,useRouter } from 'next/navigation'
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function Navbar({lang,localeData,navbar}) {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  const [selectedKeys, setSelectedKeys] = useState([pathname.slice(0, 3).split('/')]);

  
  return (
    <header className="fixed w-screen z-[100]">
        <nav className={` transition-all duration-500 ${scrolled==false && pathname==`/${lang}` ? "bg-transparent":" bg-[#fcfcfc] drop-shadow-md"}`}>
          <div className="max-w-7xl mx-auto px-6 xl:px-0">
            <div className="flex flex-col justify-between items-center min-w-full h-full">
              {/* Nav Menu */}
              <div className="flex justify-between items-center w-full h-[80px]">
                {/* Logo */}
                <div className='flex items-center lg:w-[39%] h-full z-[110]'>
                    <Link href={`/${lang}`} className='flex justify-center items-center'>
                        <Image className="object-contain object-center w-[136px] h-[41px]" alt={navbar?.logo?.alt} src={urlFor(navbar?.logo?.image).url()} quality={100} width={136} height={41} />
                    </Link>
                </div>
                {/* Set Lang */}
                <ul className='hidden lg:flex justify-end items-center w-full list-none mr-6'>
                        
                        <Dropdown classNames={{content:"min-w-[120px]"}}>
                          <DropdownTrigger>
                            
                            <Button variant="light" className=" flex items-center gap-x-[8px] mx-0 px-0 text-[14px] lg:text-[20px] text-[#002E62] font-[400] leading-[125%] uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                              <path d="M21.9102 9.14013C21.9102 9.14013 21.9102 9.14013 21.9102 9.09013C21.2056 7.16635 19.9271 5.50541 18.2477 4.33199C16.5683 3.15857 14.5689 2.5293 12.5202 2.5293C10.4714 2.5293 8.47213 3.15857 6.79271 4.33199C5.11328 5.50541 3.8348 7.16635 3.1302 9.09013C3.1302 9.09013 3.1302 9.09013 3.1302 9.14013C2.34332 11.311 2.34332 13.6892 3.1302 15.8601C3.1302 15.8601 3.1302 15.8601 3.1302 15.9101C3.8348 17.8339 5.11328 19.4948 6.79271 20.6683C8.47213 21.8417 10.4714 22.471 12.5202 22.471C14.5689 22.471 16.5683 21.8417 18.2477 20.6683C19.9271 19.4948 21.2056 17.8339 21.9102 15.9101C21.9102 15.9101 21.9102 15.9101 21.9102 15.8601C22.6971 13.6892 22.6971 11.311 21.9102 9.14013ZM4.7602 14.5001C4.41342 13.1893 4.41342 11.8109 4.7602 10.5001H6.6202C6.46023 11.8287 6.46023 13.1716 6.6202 14.5001H4.7602ZM5.5802 16.5001H6.9802C7.21491 17.392 7.55041 18.2542 7.9802 19.0701C6.99949 18.4021 6.17969 17.5242 5.5802 16.5001ZM6.9802 8.50013H5.5802C6.17107 7.47921 6.98039 6.60159 7.9502 5.93013C7.53075 6.74737 7.20534 7.60954 6.9802 8.50013ZM11.5002 20.2001C10.272 19.2988 9.40934 17.9854 9.0702 16.5001H11.5002V20.2001ZM11.5002 14.5001H8.6402C8.45359 13.1733 8.45359 11.8269 8.6402 10.5001H11.5002V14.5001ZM11.5002 8.50013H9.0702C9.40934 7.01489 10.272 5.70144 11.5002 4.80013V8.50013ZM19.4202 8.50013H18.0202C17.7855 7.60828 17.45 6.74606 17.0202 5.93013C18.0009 6.5982 18.8207 7.47607 19.4202 8.50013ZM13.5002 4.80013C14.7284 5.70144 15.591 7.01489 15.9302 8.50013H13.5002V4.80013ZM13.5002 20.2001V16.5001H15.9302C15.591 17.9854 14.7284 19.2988 13.5002 20.2001ZM16.3602 14.5001H13.5002V10.5001H16.3602C16.5468 11.8269 16.5468 13.1733 16.3602 14.5001ZM17.0502 19.0701C17.48 18.2542 17.8155 17.392 18.0502 16.5001H19.4502C18.8507 17.5242 18.0309 18.4021 17.0502 19.0701ZM20.2402 14.5001H18.3802C18.4615 13.8366 18.5016 13.1686 18.5002 12.5001C18.5013 11.8316 18.4612 11.1637 18.3802 10.5001H20.2402C20.587 11.8109 20.587 13.1893 20.2402 14.5001Z" fill="#14142B"/>
                            </svg>
                          {selectedKeys}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                            aria-label="Single selection Lang"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                         
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                          >
                            {locales.map((locale, index) => {
                            let selectedLang = pathname.split('/')[1]
                            return (
                                <DropdownItem as={Link} href={redirectedPathname(locale)} key={locale} className={`px-[4px] ${index==(locales.length-1) ? "border-none":" border-r-[2px] border-solid border-[#ffffff]"} ${locale == selectedLang ? 'text-[#BA636F]' : ' text-[#002E62]'} hover:text-[#BA636F] transition-all duration-500 uppercase text-[14px] lg:text-[20px] font-[400] leading-[125%]`}>
                                    
                                    {locale}
                                   
                                </DropdownItem>
                                )
                            })}
                          </DropdownMenu>
                        </Dropdown>
                        
                      </ul>
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
                               
                                <Link onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} href={`/${lang}`+item?.href} className={`pl-[32px] xl:pl-[40px] xl:pr-[32px] text-[16px] xl:text-[18px] font-[500] leading-[150%] transition-colors duration-500 hover:text-[#BA636F] uppercase ${pathname== `/${lang}${item?.href}` ? "text-[#BA636F]":"text-[#002E62]"}`}>
                                  {item?.title}
                                </Link>
                                
                            </li>
                          ))}
                        </ul>
                        <ul className='flex lg:hidden justify-end items-center w-full list-none mr-6 px-[16px]'>
                        
                        <Dropdown classNames={{content:"min-w-[120px]"}}>
                          <DropdownTrigger>
                            
                            <Button variant="light" className=" flex items-center gap-x-[8px] mx-0 px-0 text-[14px] lg:text-[20px] text-[#002E62] font-[400] leading-[125%] uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                              <path d="M21.9102 9.14013C21.9102 9.14013 21.9102 9.14013 21.9102 9.09013C21.2056 7.16635 19.9271 5.50541 18.2477 4.33199C16.5683 3.15857 14.5689 2.5293 12.5202 2.5293C10.4714 2.5293 8.47213 3.15857 6.79271 4.33199C5.11328 5.50541 3.8348 7.16635 3.1302 9.09013C3.1302 9.09013 3.1302 9.09013 3.1302 9.14013C2.34332 11.311 2.34332 13.6892 3.1302 15.8601C3.1302 15.8601 3.1302 15.8601 3.1302 15.9101C3.8348 17.8339 5.11328 19.4948 6.79271 20.6683C8.47213 21.8417 10.4714 22.471 12.5202 22.471C14.5689 22.471 16.5683 21.8417 18.2477 20.6683C19.9271 19.4948 21.2056 17.8339 21.9102 15.9101C21.9102 15.9101 21.9102 15.9101 21.9102 15.8601C22.6971 13.6892 22.6971 11.311 21.9102 9.14013ZM4.7602 14.5001C4.41342 13.1893 4.41342 11.8109 4.7602 10.5001H6.6202C6.46023 11.8287 6.46023 13.1716 6.6202 14.5001H4.7602ZM5.5802 16.5001H6.9802C7.21491 17.392 7.55041 18.2542 7.9802 19.0701C6.99949 18.4021 6.17969 17.5242 5.5802 16.5001ZM6.9802 8.50013H5.5802C6.17107 7.47921 6.98039 6.60159 7.9502 5.93013C7.53075 6.74737 7.20534 7.60954 6.9802 8.50013ZM11.5002 20.2001C10.272 19.2988 9.40934 17.9854 9.0702 16.5001H11.5002V20.2001ZM11.5002 14.5001H8.6402C8.45359 13.1733 8.45359 11.8269 8.6402 10.5001H11.5002V14.5001ZM11.5002 8.50013H9.0702C9.40934 7.01489 10.272 5.70144 11.5002 4.80013V8.50013ZM19.4202 8.50013H18.0202C17.7855 7.60828 17.45 6.74606 17.0202 5.93013C18.0009 6.5982 18.8207 7.47607 19.4202 8.50013ZM13.5002 4.80013C14.7284 5.70144 15.591 7.01489 15.9302 8.50013H13.5002V4.80013ZM13.5002 20.2001V16.5001H15.9302C15.591 17.9854 14.7284 19.2988 13.5002 20.2001ZM16.3602 14.5001H13.5002V10.5001H16.3602C16.5468 11.8269 16.5468 13.1733 16.3602 14.5001ZM17.0502 19.0701C17.48 18.2542 17.8155 17.392 18.0502 16.5001H19.4502C18.8507 17.5242 18.0309 18.4021 17.0502 19.0701ZM20.2402 14.5001H18.3802C18.4615 13.8366 18.5016 13.1686 18.5002 12.5001C18.5013 11.8316 18.4612 11.1637 18.3802 10.5001H20.2402C20.587 11.8109 20.587 13.1893 20.2402 14.5001Z" fill="#14142B"/>
                            </svg>
                          {selectedKeys}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                            aria-label="Single selection Lang"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                          >
                            {locales.map((locale, index) => {
                            let selectedLang = pathname.split('/')[1]
                            return (
                                <DropdownItem as={Link} href={redirectedPathname(locale)} key={locale} className={`px-[4px] ${index==(locales.length-1) ? "border-none":" border-r-[2px] border-solid border-[#ffffff]"} ${locale == selectedLang ? 'text-[#BA636F]' : ' text-[#002E62]'} hover:text-[#BA636F] transition-all duration-500 uppercase text-[14px] lg:text-[20px] font-[400] leading-[125%]`}>
                                    
                                    {locale}
                                   
                                </DropdownItem>
                                )
                            })}
                          </DropdownMenu>
                        </Dropdown>
                        
                      </ul>
                      </div>
                      

            </div>
          </div>
        </nav>
    </header>
  )
}
