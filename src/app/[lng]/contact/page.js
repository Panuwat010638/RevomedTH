import ContactHeader from "@/components/Contact/ContactHeader"
import ContactContent from "@/components/Contact/ContactContent"
import ContactMap from "@/components/Contact/ContactMap"

import groq from "groq"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts(params) {

    const lng  = decodeURIComponent(params.lng)
    const query = groq`*[_type == "ContactPage" && language->title == "${lng}" ] | order(_createdAt desc)`
    const postsData = await client.fetch(query)
    const posts = postsData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    return {
        props: { posts},revalidate:10
    }
  }
  
  export async function generateMetadata({ params, searchParams }, parent) {

    const lng  = decodeURIComponent(params.lng)
    const query = groq`*[_type == 'ContactPage' && language->title == "${lng}" ][0]`
    const post = await client.fetch(query)
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('png').url():null;
    return {
      title: post.seo?.titletag ,
      description: post.seo?.description,
      keywords: post.seo?.keywords,
      alternates: {
        canonical: `/${lng}/contact`,
        languages: {
          'en': '/en/contact',
          'th': '/th/contact',
          'cn': '/cn/contact'
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

export default async function Contactpage({ params }) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
  return (
    <main>
        <div className="flex w-full h-[80px]"/>
        <ContactHeader data={data[0]?.header} locale={params.lng}/>
        <ContactContent data={data[0]} locale={params.lng}/>
        <ContactMap/>
    </main>
  )
}
