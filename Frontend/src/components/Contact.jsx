import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import axiosClient from "../utils/axiosClient";

function Contact() {
  const text = ['C', 'o', 'n', 't', 'a', 'c', 't'];

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await axiosClient.post("/email/me", {
        data
      });
      // console.log(res);

      if (res?.data?.success) {
        alert("Message sent successfully ✅");
        formRef.current.reset();
      } else {
        alert("Failed to send ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };



  return (
    <div className="bg-black w-full min-h-screen flex flex-col items-center overflow-hidden">
      {/* Header Section */}
      <div className="relative w-full h-[60vh] md:h-[50vh] flex flex-col items-center justify-center pt-16 md:pt-20">
        {/* Background Text */}
        <div
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] absolute text-white/20 font-bold z-10 select-none"
          style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}
        >
          CONTACT
        </div>
        {/* Animated Letters */}
        <div className="text-3xl sm:text-4xl md:text-5xl text-center tracking-widest font-bold z-20 pt-20">
          {text.map((char, index) => (
            <span
              key={index}
              className="inline-block  transition-transform duration-300 ease-out hover:scale-125 hover:text-pink-500 text-white"
            >
              {char}
            </span>
          ))}
        </div>
        {/* Subtitle */}
        <div className="text-lg z-20 sm:text-xl md:text-2xl text-center font-light text-white/50 mt-8 md:mt-20">
          GET IN TOUCH
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="w-full text-white flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 px-4 sm:px-8 lg:px-16 py-12 lg:py-20"
      >
        {/* Left Side - Text */}
        <div className="w-full lg:w-2/5 flex items-center justify-center">
          <div className="text-center lg:text-left max-w-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's work together</h2>
            <p className="text-gray-300 text-sm sm:text-base font-light mb-4">
              I'm available for full-time roles & freelance projects.
            </p>
            <p className="text-gray-300 text-sm sm:text-base font-light mb-4">
              My inbox is always open, whether you have a question or just want to say hi.
            </p>
            <p className="text-gray-300 text-sm sm:text-base font-light mb-6">
              I'll try my best to get back to you!
            </p>
            <a
              href="mailto:parmarnakul277@gmail.com?subject=Portfolio Contact&body=Hi Nakul,"
              className="inline-block border border-purple-800 bg-purple-800/20 px-6 py-3 rounded-xl text-purple-400 hover:bg-purple-800/50 transition-colors duration-300"
            >
              parmarnakul277@gmail.com
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-2/5 flex items-center justify-center">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-lg border border-purple-800/50 backdrop-blur-md py-6 px-6 sm:px-8 rounded-2xl"
          >
            {/* Name and Email Inputs */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
              <div className="flex flex-col w-full sm:w-1/2">
                <label htmlFor="name" className="text-gray-200 font-extralight mb-2 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-900/50 border border-purple-800/50 text-gray-300 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  placeholder="xyz"
                />
              </div>
              <div className="flex flex-col w-full sm:w-1/2">
                <label htmlFor="email" className="text-gray-200 font-extralight mb-2 ml-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-900/50 border border-purple-800/50 text-gray-300 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  placeholder="xyz@gmail.com"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col mb-6">
              <label htmlFor="subject" className="text-gray-200 font-extralight mb-2 ml-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-gray-900/50 border border-purple-800/50 text-gray-300 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col mb-6">
              <label htmlFor="message" className="text-gray-200 font-extralight mb-2 ml-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-32 bg-gray-900/50 border border-purple-800/50 text-gray-300 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                required
                placeholder="Hello, I'd like to discuss a project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border border-purple-800 bg-purple-800/20 px-6 py-3 rounded-xl text-purple-400 hover:bg-purple-800/50 transition-colors duration-300"
            >
              Direct Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Contact);