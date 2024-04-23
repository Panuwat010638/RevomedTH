import BusinessUnitBanner from "@/components/BusinessUnit/BusinessUnitBanner"
import BusinessUnitHeader from "@/components/BusinessUnit/BusinessUnitHeader"
import BusinessUnitContent from "@/components/BusinessUnit/BusinessUnitContent"

import groq from "groq"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts(params) {

    const lng  = decodeURIComponent(params.lng)
    const query = groq`*[_type == "BusinessUnitPage" && language->title == "${lng}" ] | order(_createdAt desc)`
    const postsData = await client.fetch(query)
    const posts = postsData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    const queryBusiness = groq`*[_type == "BusinessUnitContent" && language->title == "${lng}" ] | order(_createdAt asc)`
    const postsDataBusiness = await client.fetch(queryBusiness)
    const business = postsDataBusiness.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    return {
        props: { posts,business},revalidate:10
    }
  }
  
  export async function generateMetadata({ params, searchParams }, parent) {

    const lng  = decodeURIComponent(params.lng)
    const query = groq`*[_type == 'BusinessUnitPage' && language->title == "${lng}" ][0]`
    const post = await client.fetch(query)
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('png').url():null;
    return {
      title: post.seo?.titletag ,
      description: post.seo?.description,
      keywords: post.seo?.keywords,
      alternates: {
        canonical: `/businessunits`,
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

export default async function BusinessUnitspage({ params }) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
    const business = posts.props.business
  return (
    <main>
        <div className="flex w-full h-[80px]"/>
        <BusinessUnitBanner data={data[0]?.banner} locale={params.lng}/>
        <BusinessUnitHeader data={data[0]?.header} locale={params.lng}/>
        <BusinessUnitContent business={business} locale={params.lng}/>
    </main>
  )
}
