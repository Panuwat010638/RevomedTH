import React from 'react'

export default function ContactMap() {
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex justify-center items-center w-full h-full'>
              <div className='flex justify-center items-center w-full h-[490px] rounded-[16px]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15487.133213354165!2d100.3825936!3d13.9715002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b0e993efd49%3A0xc0b9cf9a2c5d8cb5!2sRevomed!5e0!3m2!1sen!2sth!4v1710609514520!5m2!1sen!2sth" 
                width="100%" height="100%" 
                className=' rounded-[16px]'
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
        </div>
    </section>
  )
}
