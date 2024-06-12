import { sendMail } from "../../../service/aws-ses";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function checkUserAPI(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { email, subject, name, telefone, content, file } = JSON.parse(
    request.body
  );
  const result = await sendMail({
    userEmail: email,
    subject,
    name,
    telefone,
    content,
    file,
  });
  response.json(result);
}
