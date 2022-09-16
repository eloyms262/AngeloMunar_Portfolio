import { useFormik } from "formik";
async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log({ contactDetails });

  const data = await response.json();
  console.log({ data });
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}
export default function Contact() {
  const formik = useFormik({
    initialValues: { name: "", email: "", subject: "", body: "" },
    onSubmit: async function sendMessageHandler() {
      try {
        await sendContactData({
          email,
          name,
          message,
          subject,
          body,
        });
      } catch (error) {
        return;
      }
    },
  });

  return (
    <div id="my-contacts" className="bg-[#3F5687] mt-8 ">
      <h1 className="font-oswald text-3xl text-white font-bold w-10/12 mx-7 py-3">
        Contacts
      </h1>

      <div className="w-10/12 mx-auto">
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <label htmlFor="name" className="text-white font-SourceSansPro py-1">
            Name
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.name}
            id="name"
            name="name"
            placeholder="Your name"
            className="h-7 w-8/12 rounded-md text-oswald font-light"
          />
          <label htmlFor="email" className="text-white font-SourceSansPro py-1">
            Email
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            className="h-7 w-8/12 rounded-md text-oswald font-light"
          />
          <label
            htmlFor="subject"
            className="text-white font-SourceSansPro py-1"
          >
            Subject
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.subject}
            id="subject"
            name="subject"
            placeholder="Subject"
            className="h-7 w-8/12 rounded-md text-oswald font-light"
          />
          <label
            htmlFor="message"
            className="text-white font-SourceSansPro py-1"
          >
            Message
          </label>
          <textarea
            onChange={formik.handleChange}
            value={formik.values.body}
            as="textarea"
            id="body"
            name="body"
            placeholder="Say Hello! Feel free to contact me"
            className="h-24 w-full rounded-md text-oswaldfont-light"
            rows="5"
          />
          <button
            type="submit"
            className="flex justify-center items-center bg-slate-300 font-oswald font-normal text-lg rounded-md w-32 mx-auto my-8"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
