import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    const content = {
        to: 'justinhodges2023@gmail.com',
        from: email, // Use your SendGrid verified sender
        subject: `New Contact Message from ${name}`,
        text: message,
        html: `<strong>${message}</strong>`,
    };

    try {
        await sgMail.send(content);
        res.status(200).send('Message sent successfully.');
    } catch (error) {
        console.error('Email not sent.', error);
        res.status(500).send('Failed to send email.');
    }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
