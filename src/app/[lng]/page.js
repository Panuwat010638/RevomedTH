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

export default function Home({ params }) {
  return (
    <main>
      <HomeBanner locale={params.lng}/>
      <HomeInnovation locale={params.lng}/>
      <HomeAbout locale={params.lng}/>
      <HomeCreateBrand locale={params.lng}/>
      <HomeRevomedWorld locale={params.lng}/>
      <HomePartner locale={params.lng}/>
      <HomeGrow locale={params.lng}/>
      <HomeSlide locale={params.lng}/>
    
    </main>
  );
}
