import CSRBanner from "@/components/CSR/CSRBanner"
import CSRHeader from "@/components/CSR/CSRHeader"
import CSRAbout from "@/components/CSR/CSRAbout"
import CSRRoadmap from "@/components/CSR/CSRRoadmap"
import CSRNews from "@/components/CSR/CSRNews"

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
        const query = groq`*[_type == "CSRPage" && language->title == "${lng}" ] | order(_createdAt desc)`
          const posts = await client.fetch(query)
      
          const queryBlog = groq`*[_type == "newsTH" && category->title == "โครงการ CSR" ] | order(_createdAt asc){
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
        const query = groq`*[_type == "CSRPage" && language->title == "${lng}" ] | order(_createdAt desc)`
          const posts = await client.fetch(query)
      
          const queryBlog = groq`*[_type == "newsEN" && category->title == "โครงการ CSR" ] | order(_createdAt asc){
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
        const query = groq`*[_type == "CSRPage" && language->title == "${lng}" ] | order(_createdAt desc)`
          const posts = await client.fetch(query)
      
          const queryBlog = groq`*[_type == "newsEN" && category->title == "โครงการ CSR" ] | order(_createdAt asc){
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
    const query = groq`*[_type == 'CSRPage' && language->title == "${lng}" ][0]`
    const post = await client.fetch(query)
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('png').url():null;
    return {
      title: post.seo?.titletag ,
      description: post.seo?.description,
      keywords: post.seo?.keywords,
      alternates: {
        canonical: `/csr`,
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
        authors: ['Revomed Group Co.,Ltd.']
      }
    }
  }

export default async function CSRpage({params}) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
    const news = posts.props.news;
  return (
    <main>
        <div className="flex w-full h-[80px]"/>
        <CSRBanner data={data[0]?.banner} locale={params.lng}/>
        <CSRHeader data={data[0]?.header} locale={params.lng}/>
        <CSRAbout  data={data[0]?.about}  locale={params.lng}/>
        <CSRRoadmap data={data[0]?.ourroadmap}  locale={params.lng}/>
        <div className={`${news[0]== undefined ? "hidden":"block"}`}>
          <CSRNews   data={data[0]?.news} news={news} locale={params.lng}/>
        </div>
    </main>
  )
}
