import nodemailer from "nodemailer";

export const sendEmail = async ({ email, subject, message, userEmail }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_MAIL, // your SMTP email
      pass: process.env.SMTP_PASSWORD, // your SMTP password
    },
  });

  const mailOptions = {
    from: userEmail,
    to: email,
    subject: subject,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};
