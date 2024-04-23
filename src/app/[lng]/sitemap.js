import groq from "groq";
import client from "@/client";

const URL = process.env.NEXT_PUBLIC_PUBLIC_URL;

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function sitemap() {

    const queryBlog = groq`*[_type == "newsTH" && language->title == "th" ] | order(publishedAt desc){
        language,
        slug,
        publishedAt,
    }`

    const getSortedPostData = await client.fetch(queryBlog,{ next: { revalidate: 10 } });
    const blog = getSortedPostData.map(({ slug, publishedAt }) => ({
        url: `${URL}/th/news/${decodeURIComponent(slug.slug.current)}`,
        lastModified: publishedAt,
    }))


////////////////////////////////////////////////////////// 

    const routes = ["", "/about","/news","/investment","/csr","/contact","/businessunits"].map((route) => ({
        url: `${URL}/th${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...news ];
}