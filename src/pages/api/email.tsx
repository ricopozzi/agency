import { NextApiRequest, NextApiResponse } from "next";
import nodemailer, {SendMailOptions} from "nodemailer"

let transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: 'ricoqueza@gmail.com',
        pass: process.env.NEXT_PUBLIC_PASSWORD
    },
    secure: true
})


export default async function (req: NextApiRequest, res: NextApiResponse) {

            const { name, email, message, phone }: any = req.body

            const mailData:SendMailOptions = {
                from: 'ricoqueza@gmail.com',
                to: 'ricoqueza@gmail.com',
                subject: 'Formulário preenchido',
                text: message,
                html: `<div>de: ${name}<br>email: ${email}<br>telefone:${phone}<br>mensagem: ${message}</div>`
            }

            transporter.sendMail(mailData, (err, info) => {
                if(err){
                    res.json(err)
                } else {
                    res.json(info)
                }
            })

}