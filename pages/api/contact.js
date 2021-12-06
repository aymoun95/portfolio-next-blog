import nodemailer from "nodemailer";
import { validateField } from "../../utils/helpers";
import { EMAIL_REGEX, NAME_REGEX } from "../../utils/regex";
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_HOST,
    pass: process.env.EMAIL_PASS,
  },
  secure: true,
});
export default async function (req, res) {
  const { email, name, message } = req.body;
  if (email === "" || name === "" || message === "") {
    res.status(403).send("");
    return;
  }
  if (!validateField(email, EMAIL_REGEX) || !validateField(name, NAME_REGEX)) {
    res.status(406).send("");
    return;
  }
  const mailData = {
    from: `${name} <${email}>`,
    to: "aymenbenzlaouia95@gmail.com",
    subject: `Message From ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200);
    return res.send("success");
  } catch (err) {
    res.status(500);
    return res.send("fail");
  }
}
