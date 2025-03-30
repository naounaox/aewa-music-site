import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black flex items-center justify-center p-8 relative">
      <div className="container mx-auto max-w-xl px-4 md:px-0">
        <h2 className="text-5xl font-bold mb-4 text-center text-white">CONTACT</h2>
        <p className="text-xl text-gray-400 text-center mb-12 font-kalam">
          If something caught your interest, don&apos;t hesitate to reach out!
        </p>
        <form className="space-y-6" action="mailto:aewasongs@gmail.com" method="post">
          <div>
            <label className="block mb-2 text-white">NAME</label>
            <input type="text" required className="w-full p-2 bg-gray-800 rounded font-bricolage text-white" />
          </div>
          <div>
            <label className="block mb-2 text-white">E-MAIL</label>
            <input type="email" required className="w-full p-2 bg-gray-800 rounded font-bricolage text-white" />
          </div>
          <div>
            <label className="block mb-2 text-white">SUBJECT</label>
            <input type="text" required className="w-full p-2 bg-gray-800 rounded font-bricolage text-white" />
          </div>
          <div>
            <label className="block mb-2 text-white">MESSAGE</label>
            <textarea required className="w-full p-2 bg-gray-800 rounded h-32 font-bricolage text-white"></textarea>
          </div>
          <button type="submit" className="w-full bg-white text-black py-2 rounded hover:bg-gray-200">
            SEND
          </button>
        </form>
      </div>
      <div className="absolute bottom-8 right-8 text-sm text-gray-400 italic">
        Don&apos;t worry, I&apos;m still pop(:
      </div>
    </section>
  );
};

export default Contact;
