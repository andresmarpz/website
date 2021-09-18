import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const emailPass =
    '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';

const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 25,
    auth: {
        user: 'apikey',
        pass: emailPass
    }
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { senderMail, name, content, recipientMail } = req.body;

    if (
        senderMail === '' ||
        name === '' ||
        content === '' ||
        recipientMail === ''
    ) {
        res.status(403).send('');
        return;
    }

    const mailerRes = await mailer({
        senderMail,
        name,
        text: content,
        recipientMail
    });
    res.send(mailerRes);
    //[4]
};

const mailer = ({ senderMail, name, text, recipientMail }: any) => {
    const from =
        name && senderMail
            ? `${name} <${senderMail}>`
            : `${name || senderMail}`;
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `New message from ${from}`,
        text,
        replyTo: from
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        );
    });
};
