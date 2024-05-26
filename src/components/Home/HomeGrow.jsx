'use client'
import { Image } from "@nextui-org/react"
import arrowR from "../../../public/assets/Images/Home/arrowR.png"
import arrowT from "../../../public/assets/Images/Home/arrowT.png"

export default function HomeGrow({data,locale}) {
    
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[100px] md:gap-y-[48px] relative'>
                {/* Header */}
                <div className='flex flex-col justify-center items-center w-full gap-y-[12px]'>
                    <div className='flex justify-center items-center gap-x-[20px]'>
                        <svg width="15" height="38" viewBox="0 0 15 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5294 14.7919C14.4723 15.2911 14.0155 15.6367 13.5207 15.5791C13.1591 15.5407 12.8926 15.2911 12.7784 14.9647L2.72938 13.6783L4.11876 14.4463C3.77618 14.8111 3.26229 15.0031 2.72938 14.9455C1.83487 14.8303 1.20683 14.0047 1.32102 13.1023C1.43521 12.1999 2.25358 11.5663 3.14809 11.6815C3.90938 11.7775 4.48036 12.3919 4.55649 13.1215L7.90615 13.5439L12.4929 14.1391L13.711 14.3311L13.0829 13.9471C13.2542 13.8319 13.4826 13.7551 13.711 13.7935C14.2439 13.8511 14.5865 14.3119 14.5294 14.7919Z" fill="#DC818D"/>
                            <path d="M5.81682 10.8925C6.40682 10.9693 6.95875 10.7197 7.30133 10.2781L5.96908 9.64445L11.2791 10.3165C11.4884 10.3357 11.6978 10.1821 11.7168 9.97085C11.7358 9.75965 11.5836 9.54844 11.3742 9.52924L7.62488 9.04924C7.54875 8.31963 6.97777 7.70522 6.21648 7.60922C5.32197 7.49402 4.5036 8.12763 4.38941 9.03004C4.29425 9.95165 4.92231 10.7773 5.81682 10.8925Z" fill="#DC818D"/>
                            <path d="M9.52561 7.13008C10.3059 7.22608 11.0101 6.66928 11.1053 5.90127C11.2004 5.11406 10.6485 4.40365 9.88723 4.30765C9.10691 4.21164 8.40271 4.76846 8.30755 5.53647C8.21239 6.30447 8.76432 7.01488 9.52561 7.13008Z" fill="#DC818D"/>
                            <path d="M12.5307 2.46733C13.0255 2.52493 13.4823 2.17933 13.5394 1.68012C13.5965 1.18092 13.2539 0.720116 12.7591 0.662516C12.2642 0.604915 11.8074 0.950519 11.7504 1.44972C11.6933 1.94893 12.0358 2.39053 12.5307 2.46733Z" fill="#DC818D"/>
                            <path d="M13.7024 24.8701C13.5882 25.7726 12.7698 26.4062 11.8753 26.291C11.114 26.195 10.543 25.5806 10.4669 24.8509L7.11723 24.4285L2.56853 23.8525L1.33145 23.6989L1.97853 24.0061C1.78821 24.1597 1.54079 24.2365 1.29337 24.2173C0.798537 24.1597 0.45595 23.6989 0.513047 23.1997C0.570143 22.7005 1.02691 22.3549 1.52175 22.4125C1.88336 22.4509 2.14981 22.7005 2.26401 23.0269L12.313 24.3133L10.9237 23.5453C11.2662 23.1805 11.7801 22.9885 12.313 23.0461C13.1695 23.1421 13.8166 23.9677 13.7024 24.8701Z" fill="#DC818D"/>
                            <path d="M9.19945 27.0997C8.60946 27.0229 8.05752 27.2725 7.71494 27.7141L9.04719 28.3477L3.73722 27.6757C3.52786 27.6565 3.31849 27.8101 3.29946 28.0213C3.28043 28.2325 3.4327 28.4437 3.64205 28.4629L7.37235 28.9429C7.44848 29.6725 8.01945 30.2869 8.78074 30.3829C9.67526 30.4981 10.4937 29.8645 10.6078 28.9621C10.7411 28.0405 10.094 27.2149 9.19945 27.0997Z" fill="#DC818D"/>
                            <path d="M5.49465 30.8701C4.71433 30.7741 4.01013 31.331 3.91497 32.099C3.81981 32.8862 4.37175 33.5966 5.13303 33.6926C5.91335 33.7886 6.61755 33.2318 6.71271 32.4638C6.8269 31.6766 6.27497 30.9661 5.49465 30.8701Z" fill="#DC818D"/>
                            <path d="M2.49148 35.5336C1.99664 35.476 1.53987 35.8216 1.48277 36.3208C1.42568 36.82 1.76823 37.2808 2.26307 37.3384C2.75791 37.396 3.21471 37.0504 3.27181 36.5512C3.34793 36.052 2.98632 35.5912 2.49148 35.5336Z" fill="#DC818D"/>
                            <path d="M13.7713 18.4097C13.3145 18.3521 12.8768 18.5249 12.5723 18.8321L13.4096 19.3889L2.80872 18.0257C2.71356 17.4113 2.23776 16.9121 1.59066 16.8353C0.829374 16.7393 0.125178 17.2769 0.0109852 18.0641C-0.0841758 18.8321 0.448725 19.5425 1.22905 19.6577C1.70485 19.7153 2.14259 19.5425 2.44711 19.2161L1.57164 18.6785L12.1916 20.0417C12.2867 20.6561 12.7626 21.1554 13.4096 21.2322C14.1709 21.3282 14.8751 20.7905 14.9893 20.0033C15.0845 19.2161 14.5326 18.5057 13.7713 18.4097Z" fill="#DC818D"/>
                        </svg>
                        <h3 className='font-line text-[18px] lg:text-[24px] text-[#DC818D] font-[400] leading-normal lg:whitespace-pre-line text-center'>
                            {data?.subheader}
                        </h3>
                    </div>
                    <h2 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] leading-[150%] whitespace-pre-line sm:whitespace-normal text-center'>
                        {data?.header}
                    </h2>
                </div>

                <div className="flex flex-col-reverse md:flex-row w-full md:justify-between md:gap-x-[10%] xl:gap-x-[15%] gap-y-[72px]">
                    {data?.data?.map((item,index)=>(
                        <div key={index} className="flex flex-row-reverse items-center md:items-start md:flex-col w-full md:w-[26.67%] xl:w-[23.3%] gap-[40px] z-[10]">
                            <div className="flex flex-col w-[80%] md:w-full gap-y-[16px] text-pretty">
                                <h4 className="font-line text-[24px] xl:text-[36px] text-[#EBABB4] font-[700] leading-[150%] uppercase">
                                    {item?.year}
                                </h4>
                                <p className={`text-[16px] lg:text-[18px]  text-[#002E62] font-[400] leading-[180%] lg:whitespace-pre-line ${locale== "th" ? "":"text-balance"}`}>
                                    {item?.detail}
                                </p>
                            </div>
                            <div className="flex md:hidden justify-center items-center min-w-[56px] md:w-[80px] min-h-[56px] md:h-[80px] rounded-full">
                               
                            </div>
                        </div>
                    ))}
                </div>

                {/* circle */}
                <div className="hidden md:flex justify-center items-center w-full">
                <Image className=" object-contain object-center w-full h-full z-0" 
                        classNames={{img:"object-contain w-full h-full z-0 rounded-[16px]",wrapper:"object-contain w-full h-full z-0"}}
                        radius="none"
                        src={arrowR?.src}
                        placeholder="blur"
                        alt={'ArrowR'}
                        width="100%" height="100%" quality={100}/>              
                </div>
                <div className="flex md:hidden justify-center items-center absolute bottom-0 left-0 ss:left-[0.25%] s:left-[2%] sm:left-[4%]">
                <Image className=" object-contain object-center w-full h-[550px] z-0" 
                        classNames={{img:"object-contain w-full h-full z-0 rounded-[16px]",wrapper:"object-contain w-full h-full z-0"}}
                        radius="none"
                        src={arrowT?.src}
                        placeholder="blur"
                        alt={'ArrowT'}
                        width="100%" height="100%" quality={100}/>              
                </div>

                
            </div>
        </div>
    </section>
  )
}
