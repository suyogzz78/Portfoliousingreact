import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-[7vw] md:px-[12vw] lg:px-[16vw] bg-gradient-rainbow"
    >
      {/* intro section */}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-blue-700 mt-4 mx-auto"></div>
        <p className="text-gray-300 mt-2 font-semibold">Get in touch with me</p>
      </div>

      {/* form */}
      <div className="mt-8 w-full max-w-lg bg-slate-600 p-6 rounded-md shadow-lg border-2 border-white">
        <h2 className="text-2xl font-semibold text-white text-center">
          Contact Me
        </h2>
        <form className="p-7 mt-4 flex flex-col gap-5">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-4 text-white bg-gray-900 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="user_name"
            placeholder="name"
            className="w-full p-4 text-white bg-gray-900 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="user_subject"
            placeholder="Subject"
            className="w-full p-4 text-white bg-gray-900 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="message"
            rows="5"
            className="w-full p-4 text-white bg-gray-900 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-700 text-white p-5 font-semibold rounded-md hover:opacity-65 hover:shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
