import axios from 'axios';

export const sendContactMail = async (
    recipientMail: string,
    name: string,
    senderMail: string,
    content: string
) => {
    const data = {
        recipientMail,
        name,
        senderMail,
        content
    };

    try {
        const res = await axios({
            method: 'post',
            url: '/api/contact',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        });
        return res;
    } catch (error) {
        return error;
    }
};
