import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { email,lastname,name,tel,message } = await request.json();

        require('dotenv').config()

        const transporter = nodemailer.createTransport({
          port: 465,     
          host: "smtp.gmail.com",
             auth: {
                  user: process.env.EMAILMAIN,
                  pass: process.env.PASSWORD,
               },
          secure: true,
        });

        const mailOption = {
            from: `${email}`,
            to: process.env.EMAILMAIN,
            subject: "Send Email Contact",
            html: `
                <h3>สวัสดีครับ มีลูกค้าติดต่อมาครับ</h3>
                <li> ชื่อ: ${name}</li>
                <li> นามสกุล: ${lastname}</li>
                <li> เบอร์โทร: ${tel}</li>
                <li> อีเมล: ${email}</li>
                <li> ข้อความ : ${message}</li> 
                `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}