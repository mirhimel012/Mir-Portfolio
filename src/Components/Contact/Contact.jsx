import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import SectionTitle from "../SectionTitle/SectionTitle";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Message sent successfully! (Just kidding – it's a mock 😒 শেখ হাসিনা পালায় না 😎 এটাই বাস্তব)");

    // Reset form
    setForm({ name: "", email: "", message: "" });

    // To actually send it:
    // - use EmailJS (client-side)
    // - or call your backend API (server-side)
  };

  return (
    <div className="my-32 bg-white px-4 sm:px-6 lg:px-16" id="contact">
      <SectionTitle heading={"Contact Me"} />
      <div className="flex flex-col lg:flex-row gap-10 mt-12">
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <div className="px-6 py-8 border-blue-500 border-2 rounded-xl space-y-2">
            <FaWhatsapp className="text-2xl text-green-500" />
            <p className="font-bold text-blue-600">WhatsApp</p>
            <p>+8801764630254</p>
          </div>
          <div className="px-6 py-8 border-blue-500 border-2 rounded-xl space-y-2">
            <MdEmail className="text-2xl text-[#ff6961]" />
            <p className="font-bold text-blue-600">Email</p>
            <p>mirhimel012@gmail.com</p>
          </div>
          <div className="px-6 py-8 border-blue-500 border-2 rounded-xl space-y-2">
            <GrLocation className="text-2xl text-blue-500" />
            <p className="font-bold text-blue-600">Address</p>
            <p>Mirpur, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <p className="text-lg font-bold mb-2">Your Name</p>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border border-blue-500 rounded-xl h-10 w-full px-4"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-6">
              <p className="text-lg font-bold mb-2">Your Email</p>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border border-blue-500 rounded-xl h-10 w-full px-4"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <p className="text-lg font-bold mb-2">Your Message</p>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                className="border border-blue-500 rounded-xl w-full px-4 py-2"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="bg-blue-500 px-6 py-3 rounded-xl w-full text-white font-bold hover:bg-blue-700 transition-all duration-200 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
