// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.EMAIL_API_KEY);

async function sendMail(req: NextApiRequest, res: NextApiResponse) {
  const { email, message, name } = req.body;

  try {
    const msg = {
      to: "jc@jcvisueldesign.dk", // email recipient
      from: "jc@jcvisueldesign.dk", // Verified sendgrid sender
      subject: "Mail from portfolio website contact form",
      text: "and easy to do anywhere, even with Node.js",
      html: `<strong>From ${email}</strong>
    <p>Name: ${name}</p>
    <p>Message: ${message}</p>
    `,
    };

    await sendgrid.send(msg);
  } catch (error) {
    return res.status(res.statusCode);
  }

  return res.status(200).json({ status: "Ok" });
}

export default sendMail;
