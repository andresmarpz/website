import getActivity from "@/lib/activity";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	const { name, email, message, notify } = JSON.parse(req.body);
	if(!name || !email || !message){
		return res.status(400).json({error: "Missing body parameter"});
	}

	if(!process.env.SMTP_HOSTNAME || !process.env.SMTP_USERNAME || !process.env.SMTP_PASSWORD){
		return res.status(500).json({error: "Missing SMTP configuration"});
	}

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOSTNAME,
		port: 587,
		secure: false,
		auth: {
			user: process.env.SMTP_USERNAME,
			pass: process.env.SMTP_PASSWORD
		}
	})

	try{
		const info = await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: process.env.SMTP_TO,
			subject: "New message from website",
			text: message
		})

		if(notify){
			await transporter.sendMail({
				from: '"Andrés" <no-reply@andrs.me>',
				to: email,
				subject: "Message received",
				text: `Hello! Thanks for your message! I've received at ${getActivity(new Date()).time} and will get back to you as soon as possible.`
			})
		}

		if(info) return res.status(200).json({message: "Email sent successfully"});
	}catch(err){
		return res.status(500).json({error: "Failed to send email"});
	}
}