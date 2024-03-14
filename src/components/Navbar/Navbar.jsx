'use client'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Navbar({data,lang,localeData}) {
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
  return (
    <header className="fixed w-screen z-[100]">
        <nav className={` transition-all duration-500 ${scrolled==false && pathname==`/${lang}` ? "bg-transparent":" bg-[#fcfcfc]"}`}>

        </nav>
    </header>
  )
}
