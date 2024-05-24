import HomeBanner from "@/components/Home/HomeBanner";
import HomeInnovation from "@/components/Home/HomeInnovation";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeCreateBrand from "@/components/Home/HomeCreateBrand";
import HomeRevomedWorld from "@/components/Home/HomeRevomedWorld";
import HomePartner from "@/components/Home/HomePartner";
import HomeGrow from "@/components/Home/HomeGrow";
import HomeSlide from "@/components/Home/HomeSlide";
import HomeBlog from "@/components/Home/HomeBlog";

export const revalidate = 100;
export const dynamicParams = true;

import groq from "groq";
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts(params) {
   
  const lng  = decodeURIComponent(params.lng)
  if(lng == "th"){
      const query = groq`*[_type == "HomePage" && language->title == "${lng}" ] | order(_createdAt desc)`
        const posts = await client.fetch(query)
    
        const queryBlog = groq`*[_type == "newsTH"  ] | order(_createdAt asc){
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
      const query = groq`*[_type == "HomePage" && language->title == "${lng}" ] | order(_createdAt desc)`
        const posts = await client.fetch(query)
    
        const queryBlog = groq`*[_type == "newsEN"  ] | order(_createdAt asc){
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
      const query = groq`*[_type == "HomePage" && language->title == "${lng}" ] | order(_createdAt desc)`
        const posts = await client.fetch(query)
    
        const queryBlog = groq`*[_type == "newsEN"  ] | order(_createdAt asc){
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
  const query = groq`*[_type == 'HomePage' && language->title == "${lng}" ][0]`
  const post = await client.fetch(query)
  const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('png').url():null;
  return {
    title: post.seo?.titletag ,
    description: post.seo?.description,
    keywords: post.seo?.keywords,
    alternates: {
      canonical: `/`,
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

export default async function Home({ params }) {
  const posts = await getPosts(params);
  const data = posts.props.posts;
  const news = posts.props.news;
  return (
    <main>
      <h1 className="sr-only">{data[0]?.seo?.titletag}</h1>
      <HomeBanner locale={params.lng}/>
      <HomeInnovation data={data[0].INNOVATION} locale={params.lng}/>
      <HomeAbout data={data[0].about} locale={params.lng}/>
      <HomeCreateBrand data={data[0].brand} locale={params.lng}/>
      <HomeRevomedWorld data={data[0].world} locale={params.lng}/>
      <HomePartner data={data[0].partner} locale={params.lng}/>
      <HomeGrow data={data[0].grow} locale={params.lng}/>
      <HomeSlide data={data[0].slide} locale={params.lng}/>
      <HomeBlog data={data[0].news} news={news} locale={params.lng}/>
    </main>
  );
}
