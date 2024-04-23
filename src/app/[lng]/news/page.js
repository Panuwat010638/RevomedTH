import NewsBanner from "@/components/News/NewsBanner"
import NewsHeader from "@/components/News/NewsHeader"
import NewsContent from "@/components/News/NewsContent"

import groq from "groq"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts(params) {

    const lng  = decodeURIComponent(params.lng)
    const query = groq`*[_type == "NewsPage" && language->title == "${lng}" ] | order(_createdAt desc)`
    const postsData = await client.fetch(query)
    const posts = postsData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    const queryNewsTH = groq`*[_type == "newsTH" ] | order(_createdAt desc){
      title,
      detail,
      date,
      slug,
      mainImage,
      "category":category->title,
    }`
    const postsDataNewsTH = await client.fetch(queryNewsTH)
    const newsTH = postsDataNewsTH .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    const queryNewsEN = groq`*[_type == "newsEN" ] | order(_createdAt desc){
      title,
      detail,
      date,
      slug,
      mainImage,
      "category":category->title,
    }`
    const postsDataNewsEN = await client.fetch(queryNewsEN)
    const newsEN = postsDataNewsEN .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    const queryNewsCN = groq`*[_type == "newsCN" ] | order(_createdAt desc){
      title,
      detail,
      date,
      slug,
      mainImage,
      "category":category->title,
    }`
    const postsDataNewsCN = await client.fetch(queryNewsCN)
    const newsCN = postsDataNewsCN .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    const queryCatTH = groq`*[_type == "newscategoryTH" ] | order(_createdAt desc)`
    const NewscategoryTH = await client.fetch(queryCatTH)
    const queryCatEN = groq`*[_type == "newscategoryEN" ] | order(_createdAt desc)`
    const NewscategoryEN = await client.fetch(queryCatEN)
    const queryCatCN = groq`*[_type == "newscategoryCN" ] | order(_createdAt desc)`
    const NewscategoryCN = await client.fetch(queryCatCN)
    return {
        props: { posts,newsTH,newsEN,newsCN,NewscategoryTH,NewscategoryEN,NewscategoryCN},revalidate:10
    }
  }
  
  export async function generateMetadata({ params, searchParams }, parent) {

    const lng  = decodeURIComponent(params.lng)
    const query = groq`*[_type == 'NewsPage' && language->title == "${lng}" ][0]`
    const post = await client.fetch(query)
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('png').url():null;
    return {
      title: post.seo?.titletag ,
      description: post.seo?.description,
      keywords: post.seo?.keywords,
      alternates: {
        canonical: `/news`,
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

export default async function newspage({ params }) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
    const newsTH = posts.props.newsTH;
    const newsEN = posts.props.newsEN;
    const newsCN = posts.props.newsCN;
    const categoryTH = posts.props.NewscategoryTH;
    const categoryEN = posts.props.NewscategoryEN;
    const categoryCN = posts.props.NewscategoryCN;
  return (
    <main>
  
        <div className="flex w-full h-[80px]"/>
        <NewsBanner data={data[0]?.banner} locale={params.lng}/>
        <NewsHeader data={data[0]?.header} locale={params.lng}/>
        <NewsContent locale={params.lng} news={params.lng == 'th' ? newsTH : params.lng=='en'? newsEN : newsCN} category={params.lng == 'th' ? categoryTH : params.lng=='en'? categoryEN : categoryCN}/>
    </main>
  )
}
