'use client'
import Image from "next/image"
import Link from "next/link"
import client from "@/client"
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}
import logoimg from "../../../public/assets/Images/Navbar/logoF.png"
import lo01 from "../../../public/assets/Images/Navbar/lo01.png"
import lo02 from "../../../public/assets/Images/Navbar/lo02.png"
import lo03 from "../../../public/assets/Images/Navbar/lo03.png"
import lo04 from "../../../public/assets/Images/Navbar/lo04.png"
import lo05 from "../../../public/assets/Images/Navbar/lo05.png"
import lo06 from "../../../public/assets/Images/Navbar/lo06.png"
import lo07 from "../../../public/assets/Images/Navbar/lo07.png"
import lo08 from "../../../public/assets/Images/Navbar/lo08.png"

export default function Footer({footer,lang,localeData}) {
    const footer2 ={
        logo:{image:logoimg,alt:"Revomed Logo"},
        morelogo:[
            {image:lo01,alt:"Revomed Logo"},
            {image:lo02,alt:"Revomed Logo"},
            {image:lo03,alt:"Revomed Logo"},
            {image:lo05,alt:"Revomed Logo"},
            {image:lo06,alt:"Revomed Logo"},
            {image:lo07,alt:"Revomed Logo"},
            {image:lo08,alt:"Revomed Logo"},
        ],
        menu:[
            {title:"หน้าแรก",href:"/",status:true},
            {title:"เกี่ยวกับ Revomed",href:"#",status:true},
            {title:"Business Units",href:"#",status:true},
            {title:"นักลงทุนสัมพันธ์",href:"#",status:true},
            {title:"ข่าวสารของเรา",href:"#",status:true},
            {title:"CSR",href:"#",status:true},
            {title:"ติดต่อเรา",href:"#",status:true},
          ],
        location:"บริษัท รีโว่เมด (ไทยแลนด์) จำกัด เลขที่ 29/11 หมู่ที่ 10\nต.บางบัวทอง อ.บางบัวทอง จ.นนทบุรี 11110",
        social:{
            line:"https://line.me/ti/p/~@revomed",
            facebook:"https://www.facebook.com/revomedthailand",
            tel:"061-662-4242",
            email:"revomedthai@gmail.com"
        },
        partner:[
            {title:'ทวีปเอเชีย',partner:[
                {name:"Cambodia",link:'#'},
                {name:"Korea",link:'#'},
                {name:"Japan",link:'#'},
            ]},
            {title:'ทวีปยุโรป',partner:[
                {name:"France",link:'#'},
                {name:"Italy",link:'#'},
            ]},
            {title:'ทวีปอเมริกา',partner:[
                {name:"United States",link:'#'},
            ]},
            {title:'หมู่เกาะทางแปซิฟิก',partner:[
                {name:"Australia",link:'#'},
            ]},
        ]
    }
  return (
    <footer className='bg-[#002E62]'>
        <div className="max-w-7xl mx-auto px-6 xl:px-4 py-[40px]">
            <div className="flex flex-col items-center lg:items-start justify-center w-full h-full gap-y-[32px]">
                {/* Logo */}
                <div className="flex justify-center lg:justify-start items-center w-full">
                    <Link href={`/${lang}`} className='flex justify-center items-center cursor-pointer'>
                        <Image className="object-contain object-center w-[136px] h-[41px]" alt={footer?.logo?.alt} src={urlFor(footer?.logo?.image).url()} quality={100} width={136} height={41} />
                    </Link>
                </div>
                {/* Top */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-x-[5%] gap-y-[32px]">
                    {/* R */}
                    <div className="flex flex-col items-center lg:items-start gap-y-[20px] w-full sm:w-[80%] md:w-[60%] lg:w-[30%] pb-[32px] lg:pb-0  border-b-[1px] lg:border-none border-solid border-[#6F7489]">
                        
                        <p className="text-[16px] text-[#E0E3EB] font-[400] leading-[180%] text-center lg:text-start ss:whitespace-pre-line lg:whitespace-normal xl:whitespace-pre-line">
                            {footer?.location}
                        </p>
                        <div className="flex flex-row lg:flex-col xl:flex-row justify-between items-end lg:items-center w-full gap-x-[5%] gap-y-[16px]">
                            <div className="flex flex-col w-[65%] lg:w-full xl:w-[65%] gap-y-[20px]">
                                {/* Tel */}
                                <div className="flex items-center w-full gap-x-[5%]">
                                    <svg className="w-[15%] min-h-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.4697 8.99938C20.6675 8.99938 20.8608 8.94073 21.0253 8.83085C21.1897 8.72097 21.3179 8.56479 21.3936 8.38206C21.4693 8.19934 21.4891 7.99827 21.4505 7.80429C21.4119 7.61031 21.3167 7.43213 21.1768 7.29227C21.037 7.15242 20.8588 7.05718 20.6648 7.01859C20.4708 6.98001 20.2698 6.99981 20.087 7.0755C19.9043 7.15119 19.7481 7.27936 19.6383 7.44381C19.5284 7.60826 19.4697 7.8016 19.4697 7.99938C19.4697 8.2646 19.5751 8.51895 19.7626 8.70649C19.9501 8.89402 20.2045 8.99938 20.4697 8.99938ZM17.4697 8.99938C17.6675 8.99938 17.8608 8.94073 18.0253 8.83085C18.1897 8.72097 18.3179 8.56479 18.3936 8.38206C18.4693 8.19934 18.4891 7.99827 18.4505 7.80429C18.4119 7.61031 18.3167 7.43213 18.1768 7.29227C18.037 7.15242 17.8588 7.05718 17.6648 7.01859C17.4708 6.98001 17.2698 6.99981 17.087 7.0755C16.9043 7.15119 16.7481 7.27936 16.6383 7.44381C16.5284 7.60826 16.4697 7.8016 16.4697 7.99938C16.4697 8.2646 16.5751 8.51895 16.7626 8.70649C16.9501 8.89402 17.2045 8.99938 17.4697 8.99938ZM14.4697 8.99938C14.6675 8.99938 14.8608 8.94073 15.0253 8.83085C15.1897 8.72097 15.3179 8.56479 15.3936 8.38206C15.4693 8.19934 15.4891 7.99827 15.4505 7.80429C15.4119 7.61031 15.3167 7.43213 15.1768 7.29227C15.037 7.15242 14.8588 7.05718 14.6648 7.01859C14.4708 6.98001 14.2698 6.99981 14.087 7.0755C13.9043 7.15119 13.7481 7.27936 13.6383 7.44381C13.5284 7.60826 13.4697 7.8016 13.4697 7.99938C13.4697 8.1307 13.4956 8.26074 13.5458 8.38206C13.5961 8.50339 13.6698 8.61363 13.7626 8.70649C13.8555 8.79935 13.9657 8.873 14.087 8.92326C14.2084 8.97351 14.3384 8.99938 14.4697 8.99938ZM18.9097 12.9994C18.6897 12.9994 18.4597 12.9294 18.2397 12.8794C17.7942 12.7812 17.3564 12.6509 16.9297 12.4894C16.4658 12.3206 15.9559 12.3294 15.498 12.514C15.0402 12.6986 14.6668 13.046 14.4497 13.4894L14.2297 13.9394C13.2542 13.3952 12.3562 12.7225 11.5597 11.9394C10.7804 11.1433 10.1081 10.2491 9.55972 9.27938L9.99972 8.99938C10.4431 8.7823 10.7905 8.40891 10.9751 7.95107C11.1597 7.49323 11.1685 6.98329 10.9997 6.51938C10.8409 6.0918 10.7107 5.65418 10.6097 5.20938C10.5597 4.97938 10.5197 4.75938 10.4897 4.52938C10.3683 3.825 9.99934 3.18712 9.44934 2.73062C8.89934 2.27412 8.20442 2.02899 7.48972 2.03938H4.48972C4.06697 2.03883 3.64887 2.12763 3.26284 2.29996C2.87681 2.4723 2.53155 2.72428 2.24972 3.03938C1.96341 3.36188 1.74999 3.74231 1.62402 4.15475C1.49804 4.56719 1.46247 5.00195 1.51972 5.42938C2.04643 9.61642 3.9521 13.509 6.93612 16.493C9.92014 19.477 13.8127 21.3827 17.9997 21.9094C18.1295 21.9193 18.2599 21.9193 18.3897 21.9094C19.1854 21.9094 19.9484 21.5933 20.511 21.0307C21.0736 20.4681 21.3897 19.705 21.3897 18.9094V15.9094C21.3793 15.2116 21.126 14.5393 20.6734 14.0081C20.2207 13.477 19.597 13.1203 18.9097 12.9994ZM19.3997 18.9994C19.4014 19.1443 19.3715 19.2879 19.3121 19.4202C19.2528 19.5524 19.1654 19.6702 19.056 19.7653C18.9466 19.8604 18.8178 19.9306 18.6786 19.9711C18.5394 20.0115 18.393 20.0211 18.2497 19.9994C14.5159 19.5121 11.0468 17.8075 8.37972 15.1494C5.71472 12.4642 4.01296 8.97282 3.53972 5.21938C3.518 5.07271 3.52916 4.92305 3.57239 4.78123C3.61563 4.63941 3.68987 4.50898 3.78972 4.39938C3.88231 4.29397 3.99605 4.20922 4.12354 4.15064C4.25103 4.09206 4.38942 4.06097 4.52972 4.05938H7.52972C7.76227 4.05421 7.98934 4.13026 8.17186 4.27445C8.35438 4.41864 8.48093 4.62195 8.52972 4.84938C8.56972 5.12271 8.61972 5.39271 8.67972 5.65938C8.79524 6.18652 8.94898 6.70456 9.13972 7.20938L7.73972 7.85938C7.62002 7.9143 7.51234 7.99233 7.42288 8.08898C7.33341 8.18562 7.26392 8.29899 7.21839 8.42257C7.17286 8.54615 7.15219 8.67751 7.15757 8.8091C7.16294 8.94069 7.19426 9.06992 7.24972 9.18938C8.68892 12.2721 11.167 14.7502 14.2497 16.1894C14.4932 16.2894 14.7663 16.2894 15.0097 16.1894C15.2579 16.097 15.4593 15.91 15.5697 15.6694L16.1997 14.2694C16.7167 14.4543 17.2443 14.6079 17.7797 14.7294C18.0397 14.7894 18.3197 14.8394 18.5897 14.8794C18.8153 14.9302 19.0163 15.0576 19.1585 15.2399C19.3007 15.4222 19.3754 15.6482 19.3697 15.8794L19.3997 18.9994Z" fill="#FCFCFC"/>
                                    </svg>
                                    <a href={`tel:${footer?.social?.tel}`} className="cursor-pointer w-[80%] text-[16px] text-[#E0E3EB] font-[400] leading-[180%] lg:whitespace-pre-line">
                                        {footer?.social?.tel}
                                    </a>
                                </div>
                                {/* mail */}
                                <div className="flex items-center w-full gap-x-[5%]">
                                    <svg className="w-[15%] min-h-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.59 6L12.71 11.88C12.617 11.9737 12.5064 12.0481 12.3846 12.0989C12.2627 12.1497 12.132 12.1758 12 12.1758C11.868 12.1758 11.7373 12.1497 11.6154 12.0989C11.4936 12.0481 11.383 11.9737 11.29 11.88L5.41 6H18.59ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.41L9.88 13.29C10.4425 13.8518 11.205 14.1674 12 14.1674C12.795 14.1674 13.5575 13.8518 14.12 13.29L20 7.41V17Z" fill="#FCFCFC"/>
                                    </svg>
                                    <a href={`mailto:${footer?.social?.email}`} className="cursor-pointer w-[80%] text-[16px] text-[#E0E3EB] font-[400] leading-[180%] lg:whitespace-pre-line">
                                        {footer?.social?.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-end lg:justify-start xl:justify-end items-center w-auto lg:w-full xl:w-[auto gap-x-[16px]">
                                <a href={footer?.social?.line} target="_blank">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.9663 15.7673C22.8832 15.7673 22.8008 15.7837 22.724 15.8155C22.6471 15.8474 22.5773 15.894 22.5185 15.9528C22.4597 16.0116 22.413 16.0814 22.3812 16.1583C22.3494 16.2351 22.333 16.3175 22.333 16.4007V19.184L19.9997 16.084C19.9415 15.9897 19.8608 15.9113 19.7648 15.856C19.6687 15.8007 19.5604 15.7702 19.4497 15.7673C19.3665 15.7673 19.2841 15.7837 19.2073 15.8155C19.1305 15.8474 19.0607 15.894 19.0018 15.9528C18.943 16.0116 18.8964 16.0814 18.8646 16.1583C18.8327 16.2351 18.8163 16.3175 18.8163 16.4007V21.134C18.8163 21.2172 18.8327 21.2995 18.8646 21.3764C18.8964 21.4532 18.943 21.523 19.0018 21.5818C19.0607 21.6406 19.1305 21.6873 19.2073 21.7191C19.2841 21.7509 19.3665 21.7673 19.4497 21.7673C19.5328 21.7673 19.6152 21.7509 19.692 21.7191C19.7689 21.6873 19.8387 21.6406 19.8975 21.5818C19.9563 21.523 20.003 21.4532 20.0348 21.3764C20.0666 21.2995 20.083 21.2172 20.083 21.134V18.334L22.3997 21.5173C22.4587 21.6061 22.5473 21.6711 22.6497 21.7007C22.7265 21.7179 22.8062 21.7179 22.883 21.7007C22.9561 21.7272 23.034 21.738 23.1116 21.7323C23.1892 21.7265 23.2646 21.7044 23.333 21.6673L23.4997 21.5507C23.6167 21.43 23.6824 21.2687 23.683 21.1007V16.4007C23.6838 16.31 23.6651 16.2202 23.6282 16.1374C23.5913 16.0545 23.537 15.9806 23.4691 15.9206C23.4011 15.8605 23.3211 15.8158 23.2344 15.7893C23.1476 15.7629 23.0562 15.7554 22.9663 15.7673ZM15.333 20.4507H13.5663V16.4007C13.5663 16.2327 13.4996 16.0716 13.3808 15.9528C13.2621 15.834 13.101 15.7673 12.933 15.7673C12.765 15.7673 12.6039 15.834 12.4852 15.9528C12.3664 16.0716 12.2997 16.2327 12.2997 16.4007V21.134C12.2997 21.302 12.3664 21.463 12.4852 21.5818C12.6039 21.7006 12.765 21.7673 12.933 21.7673H15.333C15.5025 21.7674 15.6654 21.7012 15.7868 21.5829C15.9083 21.4646 15.9787 21.3035 15.983 21.134C15.9875 21.0459 15.9741 20.9577 15.9434 20.875C15.9128 20.7922 15.8656 20.7166 15.8048 20.6527C15.744 20.5887 15.6708 20.5378 15.5897 20.5031C15.5086 20.4684 15.4212 20.4505 15.333 20.4507ZM17.183 15.7673C17.0135 15.7673 16.8506 15.8335 16.7292 15.9518C16.6078 16.0701 16.5374 16.2312 16.533 16.4007V21.134C16.5374 21.3035 16.6078 21.4646 16.7292 21.5829C16.8506 21.7012 17.0135 21.7674 17.183 21.7673C17.351 21.7673 17.5121 21.7006 17.6308 21.5818C17.7496 21.463 17.8163 21.302 17.8163 21.134V16.4007C17.8163 16.2327 17.7496 16.0716 17.6308 15.9528C17.5121 15.834 17.351 15.7673 17.183 15.7673ZM29.8497 3.33398H10.1497C8.34314 3.33839 6.61184 4.05798 5.33442 5.3354C4.057 6.61282 3.33741 8.34411 3.33301 10.1507V29.8507C3.33741 31.6572 4.057 33.3885 5.33442 34.6659C6.61184 35.9433 8.34314 36.6629 10.1497 36.6673H29.8497C31.6562 36.6629 33.3875 35.9433 34.6649 34.6659C35.9423 33.3885 36.6619 31.6572 36.6663 29.8507V10.1507C36.6619 8.34411 35.9423 6.61282 34.6649 5.3354C33.3875 4.05798 31.6562 3.33839 29.8497 3.33398ZM30.3663 23.8007C30.3007 23.9 30.2283 23.9946 30.1497 24.084C29.7522 24.5731 29.3054 25.0199 28.8163 25.4173C25.483 28.534 19.883 32.2673 19.133 31.684C18.383 31.1007 20.1997 28.7507 18.2497 28.3507C18.1113 28.3681 17.9714 28.3681 17.833 28.3507C12.0997 27.5507 7.83301 23.534 7.83301 18.7173C7.83301 13.3007 13.3163 8.91732 20.0663 8.91732C26.8163 8.91732 32.2997 13.3007 32.2997 18.7173C32.2418 20.5803 31.5611 22.3701 30.3663 23.8007ZM27.5163 15.784H24.9997C24.8317 15.784 24.6706 15.8507 24.5518 15.9695C24.4331 16.0883 24.3663 16.2493 24.3663 16.4173V21.1507C24.3663 21.2338 24.3827 21.3162 24.4146 21.393C24.4464 21.4699 24.493 21.5397 24.5518 21.5985C24.6107 21.6573 24.6805 21.7039 24.7573 21.7358C24.8341 21.7676 24.9165 21.784 24.9997 21.784H27.4663C27.5495 21.784 27.6319 21.7676 27.7087 21.7358C27.7855 21.7039 27.8554 21.6573 27.9142 21.5985C27.973 21.5397 28.0196 21.4699 28.0515 21.393C28.0833 21.3162 28.0997 21.2338 28.0997 21.1507C28.0997 20.9827 28.033 20.8216 27.9142 20.7028C27.7954 20.584 27.6343 20.5173 27.4663 20.5173H25.7497V19.5173H27.5163C27.6858 19.513 27.8469 19.4426 27.9652 19.3211C28.0835 19.1997 28.1497 19.0369 28.1497 18.8673C28.1497 18.6993 28.0829 18.5383 27.9642 18.4195C27.8454 18.3007 27.6843 18.234 27.5163 18.234H25.7497V17.2173H27.5163C27.6843 17.2173 27.8454 17.1506 27.9642 17.0318C28.0829 16.913 28.1497 16.752 28.1497 16.584C28.1759 16.4882 28.1792 16.3876 28.1593 16.2903C28.1395 16.193 28.097 16.1017 28.0353 16.0238C27.9737 15.9459 27.8946 15.8837 27.8044 15.842C27.7143 15.8003 27.6156 15.7805 27.5163 15.784Z" fill="#FCFCFC"/>
                                    </svg>
                                </a>
                                <a href={footer?.social?.facebook} target="_blank">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.833 3.33398H5.16634C4.68011 3.33398 4.2138 3.52714 3.86998 3.87096C3.52616 4.21477 3.33301 4.68109 3.33301 5.16732V34.834C3.33301 35.0747 3.38043 35.3131 3.47256 35.5356C3.5647 35.758 3.69974 35.9601 3.86998 36.1303C4.04022 36.3006 4.24232 36.4356 4.46476 36.5278C4.68719 36.6199 4.92558 36.6673 5.16634 36.6673H21.133V23.7507H16.7997V18.7507H21.133V15.0007C21.0432 14.1202 21.1472 13.2309 21.4375 12.3949C21.7279 11.5589 22.1976 10.7966 22.8138 10.1613C23.43 9.52611 24.1776 9.03339 25.0044 8.71771C25.8311 8.40204 26.7169 8.27107 27.5997 8.33398C28.8969 8.326 30.1935 8.39278 31.483 8.53398V13.034H28.833C26.733 13.034 26.333 14.034 26.333 15.484V18.7007H31.333L30.683 23.7007H26.333V36.6673H34.833C35.0738 36.6673 35.3122 36.6199 35.5346 36.5278C35.757 36.4356 35.9591 36.3006 36.1294 36.1303C36.2996 35.9601 36.4347 35.758 36.5268 35.5356C36.6189 35.3131 36.6663 35.0747 36.6663 34.834V5.16732C36.6663 4.92656 36.6189 4.68816 36.5268 4.46573C36.4347 4.2433 36.2996 4.0412 36.1294 3.87096C35.9591 3.70071 35.757 3.56567 35.5346 3.47354C35.3122 3.38141 35.0738 3.33398 34.833 3.33398Z" fill="#FCFCFC"/>
                                    </svg>
                                </a>
                                

                            </div>
                        </div>
                    </div>

                    {/* L */}
                    <div className="flex flex-col lg:flex-row w-full sm:w-[80%] md:w-[60%] lg:w-[65%] gap-x-[5%] gap-y-[24px]">
                        <div className="grid grid-cols-3 lg:grid-cols-2 gap-y-[16px] gap-x-[0px] sm:gap-x-[16px] md:gap-x-[24px] w-full lg:w-[35%] lg:place-content-start xl:place-items-end">
                            <ul className="flex flex-col gap-y-[16px] col-span-2 lg:col-span-1 w-full">
                            {footer?.menu?.slice(0,4).map((item,index)=>(
                                <li key={index} className={`${item?.status== true ? "flex":"hidden"} items-center w-full`}>
                                    <Link  href={`/${lang}`+item?.href} className={`text-[16px] text-[#E0E3EB] font-[400] leading-[180%] cursor-pointer`}>
                                      {item?.title}
                                    </Link>
                                </li>
                            ))}
                            </ul>
                            <ul className="flex flex-col gap-y-[16px] w-full">
                            {footer?.menu?.slice(4,footer?.menu?.length).map((item,index)=>(
                                <li key={index} className={`/${lang}${item?.status== true ? "flex":"hidden"} items-center w-full`}>
                                    <Link  href={`/${lang}`+item?.href} className={`text-[16px] text-[#E0E3EB] font-[400] leading-[180%] cursor-pointer`}>
                                      {item?.title}
                                    </Link>
                                </li>
                            ))}
                            </ul>
                            
                        </div>
                        <div className="grid grid-cols-3 gap-y-[16px] gap-x-[0px] sm:gap-x-[16px] md:gap-x-[24px] w-full lg:w-[60%]">
                            {/* 1 */}
                            <div className="flex flex-col gap-y-[16px] w-full">
                                <h4 className="text-[16px] text-[#E0E3EB] font-[600]">
                                    {footer?.partner[0]?.title}
                                </h4>
                                <ul className="flex flex-col gap-y-[16px] w-full">
                                {footer?.partner[0]?.list?.map((item,index)=>(
                                    <li key={index} className={`flex items-center w-full`}>
                                        <a  href={item?.link} target="_blank" className={`text-[16px] text-[#E0E3EB] font-[400] leading-[180%] cursor-pointer`}>
                                          {item?.name}
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            {/* 2 */}
                            <div className="flex flex-col gap-y-[16px] w-full">
                                <h4 className="text-[16px] text-[#E0E3EB] font-[600]">
                                    {footer?.partner[1]?.title}
                                </h4>
                                <ul className="flex flex-col gap-y-[16px] w-full">
                                {footer?.partner[1]?.list?.map((item,index)=>(
                                    <li key={index} className={`flex items-center w-full`}>
                                        <a  href={item?.link} target="_blank" className={`text-[16px] text-[#E0E3EB] font-[400] leading-[180%] cursor-pointer`}>
                                          {item?.name}
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            {/* 3 */}
                            <div className="flex flex-col gap-y-[16px] w-full">
                                <h4 className="text-[16px] text-[#E0E3EB] font-[600]">
                                    {footer?.partner[2]?.title}
                                </h4>
                                <ul className="flex flex-col gap-y-[16px] w-full">
                                {footer?.partner[2]?.list?.map((item,index)=>(
                                    <li key={index} className={`flex items-center w-full`}>
                                        <a  href={item?.link} target="_blank" className={`text-[16px] text-[#E0E3EB] font-[400] leading-[180%] cursor-pointer`}>
                                          {item?.name}
                                        </a>
                                    </li>
                                ))}
                                </ul>
                                <h4 className="text-[16px] text-[#E0E3EB] font-[600]">
                                    {footer?.partner[3]?.title}
                                </h4>
                                <ul className="flex flex-col gap-y-[16px] w-full">
                                {footer?.partner[3]?.list?.map((item,index)=>(
                                    <li key={index} className={`flex items-center w-full`}>
                                        <a  href={item?.link} target="_blank" className={`text-[16px] text-[#E0E3EB] font-[400] leading-[180%] cursor-pointer`}>
                                          {item?.name}
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bot */}
                <div className="w-full sm:w-[80%] md:w-[60%] lg:w-full grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-7 lg:grid-rows-none gap-[24px] lg:gap-[48px] pt-[32px] border-t-[1px] border-solid border-[#6F7489]">
                    {footer?.morelogo?.map((item,index)=>(
                        <div className="flex justify-center items-center w-full h-[80px]">
                            <Image className="object-contain object-center w-full h-full" alt={item?.alt} src={urlFor(item?.image).url()} quality={100} width={136} height={80} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </footer>
  )
}
