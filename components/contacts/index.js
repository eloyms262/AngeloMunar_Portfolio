import { Formik, Field, Form } from "formik";
export default function Contact() {
  return (
    <div className="bg-[#3F5687] mt-8 ">
      <h1 className="font-oswald text-3xl text-white font-bold w-10/12 mx-7 py-3">
        Contacts
      </h1>
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <div className="w-10/12 mx-auto">
          <Form className="flex flex-col ">
            <label className="text-white font-SourceSansPro py-1">Name</label>
            <Field
              id="Name"
              name="Name"
              placeholder="Your name"
              className="h-7 w-8/12 rounded-md text-oswald font-light"
            />
            <label className="text-white font-SourceSansPro py-1">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="example@example.com"
              className="h-7 w-8/12 rounded-md text-oswald font-light"
            />
            <label className="text-white font-SourceSansPro py-1">
              Subject
            </label>
            <Field
              id="subject"
              name="subject"
              placeholder="Subject"
              className="h-7 w-8/12 rounded-md text-oswald font-light"
            />
            <label className="text-white font-SourceSansPro py-1">
              Message
            </label>
            <Field
              id="body"
              name="body"
              placeholder="Say Hello! Feel free to contact me"
              className="h-24 w-full rounded-md text-oswaldfont-light"
            />
          </Form>
        </div>
      </Formik>
      <button className="flex justify-center items-center bg-slate-300 font-oswald font-normal text-lg rounded-md w-32 mx-auto my-8">
        Send Message
      </button>
    </div>
  );
}
