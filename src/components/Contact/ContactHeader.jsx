import React from 'react'

export default function ContactHeader({data}) {
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 py-[48px] sm:py-[60px] xl:py-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[32px] lg:gap-y-[40px]'>
                <div className="flex flex-col justify-center items-center gap-y-[32px]">
                    <div className='flex flex-col justify-center items-center gap-y-[8px] lg:gap-y-[16px]'>
                        <h1 className='font-line text-[24px] lg:text-[36px] text-[#002E62] font-[700] text-center'>
                            {data?.header}
                        </h1>
                        <p className='font-line text-[18px] lg:text-[20px] text-[#6F7489] font-[400] text-center'>
                            {data?.subheader}
                        </p>
                    </div>
                    <svg width="153" height="4" viewBox="0 0 153 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 2H151.5" stroke="#EBABB4" strokeWidth="3" strokeLinecap="round"/>
                    </svg>

                </div>

            </div>
        </div>
    </section>
  )
}
