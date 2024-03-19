import AboutBanner from "@/components/About/AboutBanner"
import AboutHeader from "@/components/About/AboutHeader"
import AboutCategory from "@/components/About/AboutCategory";

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
    const query = groq`*[_type == "AboutPage" && language->title == "${lng}" ] | order(_createdAt desc)`
    const data1 = await client.fetch(query)
    const query2 = groq`*[_type == "AboutCEO" && language->title == "${lng}" ] | order(_createdAt desc)`
    const data2 = await client.fetch(query2)
        return {
            props: { data1 ,data2}
         
        }
}

export async function generateMetadata({ params, searchParams }, parent) {

  const lng  = decodeURIComponent(params.lng)
  const query = groq`*[_type == 'AboutPage' && language->title == "${lng}" ][0]`
  const post = await client.fetch(query)
  
  return {
    title: post.seo?.titletag ,
    description: post.seo?.description,
    keywords: post.seo?.keywords,
  }
}

export default async function Aboutpage({params}) {
    const posts = await getPosts(params);
    const data1 = posts.props.data1;
    const data2 = posts.props.data2;
   
  return (
    <main>
        <AboutBanner data={data1[0]?.banner} locale={params.lng}/>
        <AboutHeader data={data1[0]?.header} locale={params.lng}/>
        <AboutCategory category={data1[0]?.category} data1={data1[0]} data2={data2[0]} locale={params.lng}/>
    </main>
  )
}
