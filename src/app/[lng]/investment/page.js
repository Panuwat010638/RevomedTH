import InvestmentBanner from "@/components/Investment/InvestmentBanner"
import InvestmentHeader from "@/components/Investment/InvestmentHeader"
import InvestmentShapeoftheFuture from "@/components/Investment/InvestmentShapeoftheFuture"
import InvestmentShareholderInformation from "@/components/Investment/InvestmentShareholderInformation"
import InvestmentNews from "@/components/Investment/InvestmentNews"

import groq from "groq"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts(params) {
   
    const lng  = decodeURIComponent(params.lng)
    if(lng == "th"){
        const query = groq`*[_type == "InvestmentPage" && language->title == "${lng}" ] | order(_createdAt desc)`
          const posts = await client.fetch(query)
      
          const queryBlog = groq`*[_type == "newsTH" ] | order(_createdAt desc){
            title,
            mainImage,
            slug,
            body,
            date,
            'category':category->title,
        }`
          const postsBlog = await client.fetch(queryBlog)
          const news = postsBlog.sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return dateB - dateA;
            });
         
      
          return {
              props: { posts,news }
           
          }
    }else if(lng == "cn"){
        const query = groq`*[_type == "InvestmentPage" && language->title == "${lng}" ] | order(_createdAt desc)`
          const posts = await client.fetch(query)
      
          const queryBlog = groq`*[_type == "newsCN" ] | order(_createdAt desc){
            title,
            mainImage,
            slug,
            body,
            date,
            'category':category->title,
        }`
          const postsBlog = await client.fetch(queryBlog)
          const news = postsBlog.sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return dateB - dateA;
            });
         
      
          return {
              props: { posts,news }
           
          }
    }else {
        const query = groq`*[_type == "InvestmentPage" && language->title == "${lng}" ] | order(_createdAt desc)`
          const posts = await client.fetch(query)
      
          const queryBlog = groq`*[_type == "newsEN" ] | order(_createdAt desc){
            title,
            mainImage,
            slug,
            body,
            date,
            'category':category->title,
        }`
          const postsBlog = await client.fetch(queryBlog)
          const news = postsBlog.sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return dateB - dateA;
            });
         
      
          return {
              props: { posts,news }
           
          }
    }
    
}
  
  export async function generateMetadata({ params, searchParams }, parent) {

    const lng  = decodeURIComponent(params.lng)
    const query = groq`*[_type == 'InvestmentPage' && language->title == "${lng}" ][0]`
    const post = await client.fetch(query)
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('png').url():null;
    return {
      title: post.seo?.titletag ,
      description: post.seo?.description,
      keywords: post.seo?.keywords,
      alternates: {
        canonical: `/investment`,
        languages: {
          'en': '/en',
          'th': '/th',
          'cn': '/cn'
        },
      },
      openGraph: {
        title: post.seo?.titletag,
        description: post.seo?.description,
        images: ogImageUrl ? [ ogImageUrl ] : ['/th/og.png' ],
        type: 'website',
        authors: ['C.C. AUTO PART Co., Ltd.']
      }
    }
  }

export default async function investmentpage({params}) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
    const news = posts.props.news;
  
  return (
    <main>
        <div className="flex w-full h-[80px]"/>
        <InvestmentBanner data={data[0]?.banner} locale={params.lng}/>
        <InvestmentHeader data={data[0]?.header} locale={params.lng}/>
        <InvestmentShapeoftheFuture data={data[0]?.ShapeoftheFuture} locale={params.lng}/>
        {/*<InvestmentShareholderInformation data={data[0]?.ShareholderInformation} locale={params.lng}/>*/}
        <InvestmentNews data={data[0]?.news} news={news} locale={params.lng}/>
    </main>
  )
}
