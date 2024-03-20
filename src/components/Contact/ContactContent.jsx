'use client'
import ButtonForm from "../Button/ButtonForm";
import {Input,Textarea,Select, SelectSection, SelectItem} from "@nextui-org/react";
import { useState,useEffect } from "react";


export default function ContactContent({data}) {
    const [name,setName]=useState('');
    const [lastname,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [tel,setTel]=useState('');
 
    const [message,setMessage]=useState('')

    const [confirm,setConfirm]= useState(false)
    const sendMail = async (e) => {
        e.preventDefault();
        if(confirm==true){
            console.log('Foam Click ส่งEmail')
        }else {
            console.log('Foam NO Click ส่งEmail')
        }
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            email,lastname,name,tel,message
      
          })
          
        })
        
        setName('');
        setLastName('');
        setTel('');
        setEmail('');
        setMessage('');
        setConfirm(false)
   
      }


    //Select Product
    const handleSelectionChangeProduct = (e) => {
        setProduct(e.target.value);
      };
  return (
    <section className='bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-4 pb-[48px] sm:pb-[60px] xl:pb-[80px]'>
            <div className='flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center lg:items-start w-full h-full gap-x-[5%] gap-y-[48px]'>
                {/* L */}
                <div className='flex flex-col w-full ss:w-[90%] sm:w-[80%] md:w-[60%] lg:w-[65%] xl:w-[718px] gap-y-[48px] lg:gap-y-[60px]'>
                    <div className='flex flex-col w-full gap-y-[12px]'>
                        <h2 className='font-line text-[20px] lg:text-[24px] text-[#DC818D] font-[700] leading-[150%] text-center lg:text-start'>
                            {data?.location?.header}
                        </h2>
                        <p className='text-[16px] xl:text-[18px] text-[#002E62] font-[400] text-center lg:text-start ss:whitespace-pre-line lg:whitespace-pre-line'>
                            {data?.location?.locationText}
                        </p>
                    </div>
                    {/* Form Contact */}
                    <form onSubmit={sendMail} className='flex flex-col w-full gap-y-[16px] lg:gap-y-[24px]'>
                        <div className="flex flex-col w-full gap-y-[16px] lg:gap-y-[24px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[24px]">
                                <Input className="w-full" classNames={{base:"rounded-[8px]",inputWrapper:"h-[48px] bg-[#F3F5FB]",placeholder:"text-[16px] text-[#6F7489] font-[400]"}}
                                    size={'sm'} value={name} 
                                    onChange={(e)=>{setName(e.target.value)}} 
                                    type="text" label={data?.input?.name} />
                                <Input className="w-full" classNames={{base:"rounded-[8px]",inputWrapper:"h-[48px] bg-[#F3F5FB]",placeholder:"text-[16px] text-[#6F7489] font-[400]"}}
                                    size={'sm'} value={lastname} 
                                    onChange={(e)=>{setLastName(e.target.value)}} 
                                    type="text" label={data?.input?.lastname} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[24px]">
                                <Input className="w-full" classNames={{base:"rounded-[8px]",inputWrapper:"h-[48px] bg-[#F3F5FB]",placeholder:"text-[16px] text-[#6F7489] font-[400]"}}
                                    size={'sm'} value={email} 
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    type="email" label={data?.input?.email} />
                                <Input className="w-full" classNames={{base:"rounded-[8px]",inputWrapper:"h-[48px] bg-[#F3F5FB]",placeholder:"text-[16px] text-[#6F7489] font-[400]"}}
                                    size={'sm'} value={tel} 
                                    onChange={(e)=>{setTel(e.target.value)}}
                                    type="tel" label={data?.input?.tel} />
                 
                            </div>
                        </div>
                        <div className="flex w-full justify-center items-center h-[190px]">
                            <Textarea
                                value={message}
                                onChange={(e)=>{setMessage(e.target.value)}}
                                placeholder={data?.input?.message}
                                className="w-full h-full"
                                radius="8"
                                classNames={{base:"rounded-[8px]",innerWrapper:"w-full h-[190px] py-[12px] bg-[#F3F5FB]",inputWrapper:"bg-[#F3F5FB] data-[hover=true]:bg-[#F3F5FB] group-data-[focus=true]:bg-[#F3F5FB]",placeholder:"text-[16px] text-[#6F7489] font-[400]"}}
                            />
                        </div>
                        <ButtonForm type='submit' text={data?.input?.button}/>
                    </form>
                </div>

                {/* R */}
                <div className='flex flex-col w-full ss:w-[90%] sm:w-[80%] md:w-[60%] lg:w-[30%] xl:w-[326px] gap-y-[48px] lg:gap-y-[26px]'>
                    {/* Social */}
                    <div className='flex flex-col w-full gap-y-[12px]'>
                        <h2 className='font-line text-[20px] lg:text-[24px] text-[#DC818D] font-[700] leading-[150%] text-center lg:text-start'>
                            {data?.social?.header}
                        </h2>
                        <ul className='flex flex-col items-center lg:items-start w-full gap-y-[16px]'>
                            {/* Call */}
                            <li className='flex items-center w-[250px] lg:w-full gap-x-[8px]'>
                                <svg className='flex justify-center items-center min-w-[28px] min-h-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="14" fill="#002E62"/>
                                    <path d="M10.2921 11.6246C11.4483 14.7787 12.6453 16.0372 15.6904 17.3776L14.3707 19.231C10.874 17.5569 9.13232 14.7349 8.31206 12.5327L10.2921 11.6246Z" fill="#FCFCFC"/>
                                    <path d="M11.2645 7.27007C11.8827 7.26766 12.3528 7.78211 12.3107 8.36464C12.2444 9.28135 12.315 9.94274 12.5051 10.7626C12.6095 11.2129 12.3733 11.6703 11.9978 11.9649C11.4917 12.3619 11.1051 12.8679 10.7978 13.3034C10.3719 13.9071 8.90615 13.8637 8.582 13.2061C7.91583 11.8545 7.46436 9.36445 8.43717 7.68211C8.58997 7.41786 8.89764 7.27933 9.21645 7.27808L11.2645 7.27007Z" fill="#FCFCFC"/>
                                    <path d="M20.6466 17.2736C20.7235 16.6942 20.2392 16.1916 19.6218 16.1611C18.6502 16.113 17.9635 15.9673 17.1245 15.6904C16.6637 15.5383 16.1545 15.7049 15.7997 16.0215C15.3214 16.4482 14.7431 16.7498 14.2483 16.9855C13.5625 17.3123 13.4318 18.6917 14.0842 19.0747C15.4248 19.8618 17.988 20.5845 19.8734 19.8748C20.1696 19.7633 20.3522 19.4915 20.3919 19.1927L20.6466 17.2736Z" fill="#FCFCFC"/>
                                </svg>
                                <a href={`tel:${data?.social?.tel}`} target='_blank' className='text-[16px] xl:text-[18px] text-[#002E62] font-[400] text-center lg:text-start ss:whitespace-pre-line lg:whitespace-normal xl:whitespace-pre-line cursor-pointer'>
                                    {data?.social?.tel}
                                </a>
                            </li>
                            {/* mail */}
                            <li className='flex items-center w-[250px] lg:w-full gap-x-[8px]'>
                                <svg className='flex justify-center items-center min-w-[28px] min-h-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="14" fill="#002E62"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9279 9.3302C20.9736 9.29467 21 9.24223 21 9.18695C21 9.0837 20.9097 9 20.7983 9H7.31312C7.14019 9 7 9.12994 7 9.29022C7 9.3765 7.04142 9.45831 7.11301 9.51345L13.687 14.5762C13.8303 14.6866 14.0382 14.6861 14.1809 14.5752L20.9279 9.3302ZM7.63157 10.9962C7.3805 10.8029 7 10.9684 7 11.2709V18.6429C7 18.8401 7.17251 19 7.38532 19H20.6147C20.8275 19 21 18.8401 21 18.6429V11.1275C21 10.8241 20.6178 10.6589 20.3671 10.8538L14.2247 15.6288L14.1836 15.6607C14.0409 15.7716 13.833 15.7721 13.6897 15.6618L13.6485 15.63L7.63157 10.9962Z" fill="#FCFCFC"/>
                                </svg>
                                <a href={`mailto:${data?.social?.email}`} target='_blank' className='text-[16px] xl:text-[18px] text-[#002E62] font-[400] text-center lg:text-start ss:whitespace-pre-line lg:whitespace-normal xl:whitespace-pre-line cursor-pointer'>
                                    {data?.social?.email}
                                </a>
                            </li>
                            {/* Line */}
                            <li className='flex items-center w-[250px] lg:w-full gap-x-[8px]'>
                                <svg className='flex justify-center items-center min-w-[28px] min-h-[28px]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0ZM13.8651 6.87719C17.9957 6.87719 21.3442 9.56093 21.3442 12.8715C21.3442 14.0278 20.9354 15.1075 20.2276 16.0232C20.1926 16.0753 20.1469 16.1329 20.0892 16.1965L20.0848 16.2013C19.843 16.4908 19.5708 16.7626 19.2714 17.0135C17.2032 18.9269 13.7989 21.2049 13.3495 20.8535C13.2028 20.7387 13.2571 20.4561 13.3189 20.1348C13.4215 19.601 13.5447 18.9603 12.8 18.805C12.7168 18.7955 12.6338 18.7852 12.5515 18.7735L12.5499 18.7734V18.7733C9.04649 18.2751 6.38596 15.8224 6.38596 12.8715C6.38586 9.56093 9.73443 6.87719 13.8651 6.87719ZM9.52575 14.7829H11.0342C11.2487 14.7829 11.4242 14.6072 11.4242 14.3924V14.3598C11.4242 14.1451 11.2487 13.9694 11.0342 13.9694H9.94835V11.4968C9.94835 11.282 9.77285 11.1064 9.55829 11.1064H9.52575C9.31118 11.1064 9.13569 11.282 9.13569 11.4968V14.3923C9.13569 14.6071 9.31118 14.7829 9.52575 14.7829ZM18.8727 12.9679V12.9353C18.8727 12.7205 18.6972 12.5449 18.4826 12.5449H17.3969V11.9267H18.4826C18.6972 11.9267 18.8727 11.7511 18.8727 11.5363V11.5037C18.8727 11.289 18.6972 11.1133 18.4826 11.1133H16.9742C16.7596 11.1133 16.5841 11.289 16.5841 11.5037V14.3993C16.5841 14.6141 16.7596 14.7898 16.9742 14.7898H18.4826C18.6972 14.7898 18.8727 14.6141 18.8727 14.3993V14.3667C18.8727 14.152 18.6972 13.9763 18.4826 13.9763H17.3969V13.3582H18.4826C18.6972 13.3583 18.8727 13.1826 18.8727 12.9679ZM15.9719 14.6665L15.972 14.6663C16.0441 14.5935 16.0847 14.495 16.0848 14.3924V11.4969C16.0848 11.2821 15.9093 11.1065 15.6946 11.1065H15.6621C15.4475 11.1065 15.272 11.2821 15.272 11.4969V13.1966L13.8622 11.3039C13.7948 11.1862 13.668 11.1065 13.5235 11.1065H13.4909C13.2764 11.1065 13.1008 11.2821 13.1008 11.4969V14.3924C13.1008 14.6072 13.2763 14.7829 13.4909 14.7829H13.5235C13.738 14.7829 13.9135 14.6072 13.9135 14.3924V12.6609L15.3336 14.6022C15.3423 14.6158 15.3519 14.6289 15.3622 14.6413L15.3622 14.6414C15.4012 14.6947 15.4546 14.7312 15.5141 14.7535C15.5598 14.7724 15.6098 14.7829 15.662 14.7829H15.6946C15.7582 14.7829 15.8207 14.7672 15.8768 14.7373C15.9158 14.7187 15.9487 14.6947 15.9719 14.6665ZM12.1291 14.7829H12.1617C12.3762 14.7829 12.5517 14.6072 12.5517 14.3924V11.4968C12.5517 11.2821 12.3762 11.1064 12.1617 11.1064H12.1291C11.9146 11.1064 11.739 11.2821 11.739 11.4968V14.3924C11.739 14.6072 11.9146 14.7829 12.1291 14.7829Z" fill="#002E62"/>
                                </svg>
                                <a href={`${data?.social?.line?.link}`} target='_blank' className='text-[16px] xl:text-[18px] text-[#002E62] font-[400] text-center lg:text-start ss:whitespace-pre-line lg:whitespace-normal xl:whitespace-pre-line'>
                                    {data?.social?.line?.id}
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                    {/* BusinessHours */}
                    <div className='flex flex-col w-full gap-y-[12px]'>
                        <h2 className='font-line text-[20px] lg:text-[24px] text-[#DC818D] font-[700] leading-[150%] text-center lg:text-start'>
                            {data?.BusinessHours?.header}
                        </h2>
                        <ul className='flex flex-col w-full gap-y-[16px]'>
                            {data?.BusinessHours?.content?.map((item,index)=>(
                                <li className='flex justify-between items-center w-full gap-x-[2%]'>
                                    <p className='w-[39%] text-[16px] xl:text-[18px] text-[#002E62] font-[400] text-center lg:text-start ss:whitespace-pre-line lg:whitespace-normal xl:whitespace-pre-line'>
                                        {item?.day}
                                    </p>
                                    <p className='w-[59%] text-[16px] xl:text-[18px] text-[#002E62] font-[400] text-center lg:text-start ss:whitespace-pre-line lg:whitespace-normal xl:whitespace-pre-line'>
                                        {item?.time}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
              
            </div>
        </div>
    </section>
  )
}
