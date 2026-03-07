import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import globalLogo from "../assets/aboutImg.jpg";
import Swal from "sweetalert2";

function ContactHero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_766kcyb",
        "template_eebmeon",
        {
          user_name: name,
          user_email: email,
          message: message,
        },
        "e_5XlqBed6SydF93e"
      )
      .then(
        (result) => {
          Swal.fire({
            toast: true,                  // makes it a small popup like notification
            position: 'top-end',           // top-right corner
            icon: 'success',               // success, error, info, etc.
            title: 'Message Sent!',
            text: 'Your message has been sent successfully.',
            showConfirmButton: false,      // removes the OK button
            timer: 5000,                   // auto-close after 3 seconds
            timerProgressBar: true,        // shows progress bar countdown
            background: '#fff',            // optional styling
            iconColor: '#FBBF24',          // matches your Tailwind yellow
            customClass: {
              popup: 'shadow-lg rounded-lg' // optional custom styling
            }
          });
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again.",
            confirmButtonColor: "#FBBF24",
          });
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-gray-50 py-40 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-gray-900 text-center">
            Contact Our <span className="text-yellow-500 font-bold">Team</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700 text-center">
            Have questions, project ideas, or inquiries? Our team is here to
            help. Fill out the form and we’ll get back to you as soon as possible.
          </p>

          <img
            src={globalLogo}
            alt="Team Illustration"
            className="rounded-xl w-full object-cover transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Contact Form */}
        <form
          className="bg-white p-8 rounded-xl shadow-md space-y-6 mt-6 md:mt-0"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                const regex = /^[A-Za-z\s]*$/;
                if (regex.test(e.target.value)) setName(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message..."
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-md hover:bg-yellow-700 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactHero;