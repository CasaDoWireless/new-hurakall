// aws-ses.js
import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";
AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: "sa-east-1",
});
AWS.config.getCredentials(function (error) {
  if (error) {
    console.log(error.stack);
  }
});
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// Create a transporter of nodemailer
const transporter = nodemailer.createTransport({
  SES: ses,
});

interface IFile {
  base64: string;
  type: string;
}

interface ISendMail {
  userEmail: string;
  subject: string;
  name: string;
  telefone: string;
  content: string;
  file: IFile;
}

export const sendMail = async ({
  userEmail,
  subject,
  name,
  telefone,
  content,
  file,
}: ISendMail) => {
  try {
    const response = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_ADMIN,
      to: process.env.NEXT_PUBLIC_EMAIL_CLIENT,
      subject: "Fale Conosco",
      html: `
            <!DOCTYPE>
            <html>
            <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            </head>
            <body>
            <div style="padding:20px;">
            <div style="max-width: 500px;">
            <p>            
            Você recebeu esta mensagem do site www.hurakall.com.br <br/><br/>            
            <b>Informações do emissor: </b> <br/>
            Nome: ${name} <br/>
            Email: ${userEmail} <br/>
            Telefone: ${telefone} <br/><br/>
            <b>Assunto:</b> <br/>
            ${subject} <br/><br/>
            <b>Observações:</b> <br/>
            ${content} <br/>
            </p>
            </div>
            </div>
            </body>
            </html>
    `,
      attachments: file.base64
        ? [
            {
              filename: "file." + file.type.replace("image/", ""),
              content: file.base64.replace(`data:${file.type};base64,`, ""),
              encoding: "base64",
            },
          ]
        : [],
    });
    return response?.messageId
      ? { ok: true }
      : { ok: false, msg: "Failed to send email" };
  } catch (error: any) {
    console.log("ERROR", error.message);
    return { ok: false, msg: "Failed to send email" };
  }
};
