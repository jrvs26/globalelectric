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
        { user_name: name, user_email: email, message },
        "GMOoI1-MjyxowK7y9",
      )
      .then(
        () => {
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            background: "#fff",
            iconColor: "#FBBF24",
            customClass: { popup: "shadow-lg rounded-lg" },
          });
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);
        },
        (error) => {
          console.error(error);
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Message Failed!",
            text: "Your message could not be sent. Please try again.",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            background: "#fff",
            iconColor: "#EF4444", // red for error
            customClass: { popup: "shadow-lg rounded-lg" },
          });
          setLoading(false);
        },
      );
  };

  return (
    <section className="bg-gray-50 py-40 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Company Info + Image */}
        <div className="space-y-6">
          {/* Company Info on Top */}
          <h2 className="text-3xl font-bold text-gray-900">
            Global Electric Power Development Corporation
          </h2>

          <div className="text-gray-700 space-y-2 mt-4">
            <p>
              <strong>Location:</strong> 243 Germar St. Magasawang Sapa, Santa
              Maria Bulacan 3022, Philippines
            </p>
            <p>
              <strong>Email:</strong> jojotobias@globalelectricpdc.com
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Partners & Investors
            </h3>
            <p className="text-gray-700 mt-2">
              We welcome partnerships with renewable energy developers, project
              investors, engineering consultants, equipment suppliers, and
              construction partners.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Licenses & Certifications
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>PCAB Licensed Contractor</li>
              <li>PhilGEPS Registered Supplier</li>
              <li>
                Compliance with national engineering standards and
                safety/environmental regulations
              </li>
            </ul>
          </div>

          {/* Image below info */}
          <div className="rounded-xl w-full max-w-[500px] h-[200px] sm:h-[250px] overflow-hidden mt-4 mx-auto">
            <img
              src={globalLogo}
              alt="Illustration of our team collaborating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form
          className="bg-white p-12 rounded-xl shadow-md space-y-8"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Send Us a Message
          </h3>

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
                const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]*$/;
                if (regex.test(e.target.value)) setName(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
