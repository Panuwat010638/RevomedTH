import "./globals.css";
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import client from '@/client'
import groq from 'groq'
import GA from './ga'
import { IBM_Plex_Sans_Thai } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const iBM_Plex_Sans_Thai =  IBM_Plex_Sans_Thai(
  { 
    weight: ['400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });
export const revalidate = 100;
export const dynamicParams = true;

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

async function getPosts({lng}) {
  const lang  = decodeURIComponent(lng)

  const query = groq`*[_type == "navbar" && language->title == "${lang}"] | order(_createdAt desc)`
  const posts = await client.fetch(query, {
    next: { revalidate: 10 },
  })
  const queryF = groq`*[_type == "footer" && language->title == "${lang}"] | order(_createdAt desc)`
  const footer = await client.fetch(queryF, {
    next: { revalidate: 10 },
  })
  const queryL = groq`*[_type == "language"] | order(_createdAt asc)`
  const locale = await client.fetch(queryL, {
    next: { revalidate: 10 },
  })

  const gtag = await client.fetch(groq`*[_type == "gaTag" ][0]`, {
    next: { revalidate: 10 },
  });
  const facebook = await client.fetch(groq`*[_type == "FacebookPixel" ][0]`, {
    next: { revalidate: 10 },
  });

  
  return {
      props: { posts,footer,locale,gtag,facebook }
  }
}

/////METADATA
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export async function generateMetadata({ params, searchParams }, parent) {
  const lng  = decodeURIComponent(params.lng)
  const gsc = await client.fetch(groq`*[_type == "gsc" ][0]`, {
    next: { revalidate: 10 },
  });

  

  return {
    title: 'Revomed Group Co.,Ltd.' ,
    description: 'Revomed Group Co.,Ltd.',
    keywords:'Revomed Group Co.,Ltd.',
    metadataBase: new URL(`https://www.revomedgroup.com/${lng}`),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'th': '/th',
        'cn': '/cn'
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: [{ name: 'Revomed Group Co.,Ltd.', url: `https://www.revomedgroup.com/${lng}` }],
    creator: 'Revomed Group Co.,Ltd.',
    publisher: 'Revomed Group Co.,Ltd.',

    verification: {
      google: gsc?.title,
    },
  }
}


export default async function RootLayout({ children,params: { lng } }) {
  const posts = await getPosts({lng });
  const navbar = posts.props.posts;
  const footer = posts.props.footer;
  const locale = posts.props.locale;
  const gtag = posts.props.gtag;
  const facebook = posts.props.facebook;
  return (
    <html lang={lng} dir={dir(lng)} className={iBM_Plex_Sans_Thai.className}>
      <body>
      <GA data={gtag?.title}/>
      
       <Navbar navbar={navbar[0]} lang={lng} localeData={locale}/>
        {children}
        <Footer footer={footer[0]} lang={lng} localeData={locale}/>
      </body>
    </html>
  );
}
