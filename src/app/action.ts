import sendEmail from "../lib/brevo";
import { redirect } from "next/navigation";

export default async function handleForm(formData: FormData) {
  "use server";
  const title = formData.get("title");
  const to_name = formData.get("to_name");
  const to = formData.get("to");
  const content = formData.get("content");

  if (!title || !to || !to_name || !content) {
    return console.log("Please fill all fields");
  }
  console.log({ title, to, content });

  await sendEmail({
    subject: title as string,
    to: [
      {
        name: to_name as string,
        email: to as string,
      },
    ],
    htmlContent: content as string,
  });
  redirect(`/success`);
}
