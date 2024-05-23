import client from "@/client"
import groq from "groq"

import NewsSlugHeader from "@/components/News/NewsSlug/NewsSlugHeader"
import NewsSlugContent from "@/components/News/NewsSlug/NewsSlugContent"
import NewsSlugMoreNews from "@/components/News/NewsSlug/NewsSlugMoreNews"

export async function getStaticParams({ params, searchParams }, parent) {
    const lng  = decodeURIComponent(params.lng)
   
    if(lng == "th"){
        const pathsTH = [] = await client.fetch(
        `*[_type == "newTH" && defined(slug.currenct)][].slug.current`
        )
        return pathsTH.map(path => ({
            slug: decodeURIComponent(path.toString())
        }))
    }else if(lng == "cn"){
        const pathsCN = [] = await client.fetch(
            `*[_type == "newTH" && defined(slug.currenct)][].slug.current`
        )
        return pathsCN.map(path => ({
            slug: decodeURIComponent(path.toString())
        }))
    }else {
        const pathsEN = [] = await client.fetch(
            `*[_type == "newTH" && defined(slug.currenct)][].slug.current`
        )
        return pathsEN.map(path => ({
            slug: decodeURIComponent(path.toString())
        }))
    }
    
}


async function getPosts(params) {
   
    const slug  = decodeURIComponent(params.slug)
    const lng  = decodeURIComponent(params.lng)
    if(lng == "th"){
        const query = groq`*[_type == "newsTH" && slug.slug.current == '${slug}'][0]{
            title,
            mainImage,
            body,
            date,
            'category':category->title,
            "headings": body[length(style) == 2 && string::startsWith(style, "h2")]
        }`
          const posts = await client.fetch(query, slug)
      
          const queryBlog = groq`*[_type == "newsTH" && slug.slug.current != '${slug}' && category->title == "${posts?.category}"] | order(_createdAt desc){
            title,
            mainImage,
            body,
            date,
            'category':category->title,
            "headings": body[length(style) == 2 && string::startsWith(style, "h2")]
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
        const query = groq`*[_type == "newsTH" && slug.slug.current == '${slug}'][0]{
            title,
            mainImage,
            body,
            date,
            'category':category->title,
            "headings": body[length(style) == 2 && string::startsWith(style, "h2")]
        }`
          const posts = await client.fetch(query, slug)
      
          const queryBlog = groq`*[_type == "newsTH" && slug.slug.current != '${slug}' && category->title == "${posts?.category}"] | order(_createdAt desc){
            title,
            mainImage,
            body,
            date,
            'category':category->title,
            "headings": body[length(style) == 2 && string::startsWith(style, "h2")]
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
        const query = groq`*[_type == "newsTH" && slug.slug.current == '${slug}'][0]{
            title,
            mainImage,
            body,
            date,
            'category':category->title,
            "headings": body[length(style) == 2 && string::startsWith(style, "h2")]
        }`
          const posts = await client.fetch(query, slug)
      
          const queryBlog = groq`*[_type == "newsTH" && slug.slug.current != '${slug}' && category->title == "${posts?.category}"] | order(_createdAt desc){
            title,
            mainImage,
            body,
            date,
            'category':category->title,
            "headings": body[length(style) == 2 && string::startsWith(style, "h2")]
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

    const slug  = decodeURIComponent(params.slug)
    const lng  = decodeURIComponent(params.lng)
    if(lng == "th"){
        const query = groq`*[_type == "newsTH" && slug.slug.current == '${slug}'][0]`
         const post = await client.fetch(query, slug)
         const title = post?.seo?.titletag||""||post.title
         const description =post?.seo?.description||""||post.title
         const keywords =post?.seo?.keywords||""||post.title
         const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('png').url():null;
        if(post?.seo==undefined){
         return {
           title: post.title,
           description: post.title,
           keywords:post.title,
           alternates: {
            canonical: `/news/${post.slug.slug.current}`,
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
        }else {
         return {
           title: title,
           description: description,
           keywords:keywords,
           alternates: {
            canonical: `/news/${post.slug.slug.current}`,
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
    }else if(lng == "cn"){
        const query = groq`*[_type == "newsTH" && slug.slug.current == '${slug}'][0]`
         const post = await client.fetch(query, slug)
         const title = post?.seo?.titletag||""||post.title
         const description =post?.seo?.description||""||post.title
         const keywords =post?.seo?.keywords||""||post.title
         const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('png').url():null;
        if(post?.seo==undefined){
         return {
           title: post.title,
           description: post.title,
           keywords:post.title,
           alternates: {
            canonical: `/news/${post.slug.slug.current}`,
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
        }else {
         return {
           title: title,
           description: description,
           keywords:keywords,
           alternates: {
            canonical: `/news/${post.slug.slug.current}`,
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
    }else {
        const query = groq`*[_type == "newsTH" && slug.slug.current == '${slug}'][0]`
         const post = await client.fetch(query, slug)
         const title = post?.seo?.titletag||""||post.title
         const description =post?.seo?.description||""||post.title
         const keywords =post?.seo?.keywords||""||post.title
         const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('png').url():null;
        if(post?.seo==undefined){
         return {
           title: post.title,
           description: post.title,
           keywords:post.title,
           alternates: {
            canonical: `/news/${post.slug.slug.current}`,
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
        }else {
         return {
           title: title,
           description: description,
           keywords:keywords,
           alternates: {
            canonical: `/news/${post.slug.slug.current}`,
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
    }
    
    
  }

export default async function NewsSlugPage({params}) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
    const news = posts.props.news;
   
  return (
    <main>
        <div className="flex w-full h-[80px]"/>
        <NewsSlugHeader data={data} locale={params.lng}/>
        <NewsSlugContent data={data} locale={params.lng}/>
        <NewsSlugMoreNews news={news} locale={params.lng}/>
    </main>
  )
}
