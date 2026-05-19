"use client";

import { useState } from "react";

export default function ContactForm() {

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(e: any) {

    e.preventDefault();

    setLoading(true);

    setSuccess(false);

    setError("");

    const form = e.target;

    const formData = new FormData();

    formData.append("name", form.name.value);
    formData.append("email", form.email.value);
    formData.append("phone", form.phone.value);
    formData.append("product", form.product.value);
    formData.append("message", form.message.value);

    try {

      await fetch(
        "https://script.google.com/macros/s/AKfycbzURb-V5X1NlaOhBn08MrRP_98MqC_wjHrPdWEv78ZBDEaMrnh7Ztiz38r4Bf3YseJRgA/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      setSuccess(true);

      form.reset();

    } catch (err) {

      setError(
        "Network error. Please check your internet connection."
      );

    }

    setLoading(false);
  }

  return (

    <section
      id="contact"
      className="relative bg-[#050505] py-24 overflow-hidden"
    >

      {/* Glow */}
      <div
        className="
          absolute
          left-0
          top-0
          w-[300px]
          h-[300px]
          bg-yellow-500/10
          blur-[120px]
          rounded-full
        "
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-yellow-400 uppercase tracking-[4px] text-sm mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Send Your Enquiry
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            We would love to hear from you.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
              w-full
              bg-black/60
              border
              border-yellow-500/20
              rounded-xl
              p-4
              text-white
              outline-none
              focus:border-yellow-400
            "
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="
              w-full
              bg-black/60
              border
              border-yellow-500/20
              rounded-xl
              p-4
              text-white
              outline-none
              focus:border-yellow-400
            "
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="
              w-full
              bg-black/60
              border
              border-yellow-500/20
              rounded-xl
              p-4
              text-white
              outline-none
              focus:border-yellow-400
            "
          />

          {/* Product */}
          <input
            type="text"
            name="product"
            placeholder="Product Name"
            className="
              w-full
              bg-black/60
              border
              border-yellow-500/20
              rounded-xl
              p-4
              text-white
              outline-none
              focus:border-yellow-400
            "
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="
              w-full
              h-40
              bg-black/60
              border
              border-yellow-500/20
              rounded-xl
              p-4
              text-white
              outline-none
              focus:border-yellow-400
            "
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-yellow-500
              hover:bg-yellow-400
              disabled:opacity-70
              text-black
              py-4
              rounded-xl
              text-lg
              font-bold
              transition
              shadow-[0_0_30px_rgba(255,196,0,0.25)]
            "
          >

            {loading ? "Sending..." : "Send Enquiry"}

          </button>

        </form>

        {/* Success Message */}
        {success && (

          <div
            className="
              mt-6
              bg-green-500/20
              border
              border-green-500
              text-green-400
              p-4
              rounded-xl
              text-center
            "
          >
            Enquiry Sent Successfully ✅
          </div>

        )}

        {/* Error Message */}
        {error && (

          <div
            className="
              mt-6
              bg-red-500/20
              border
              border-red-500
              text-red-400
              p-4
              rounded-xl
              text-center
            "
          >
            {error}
          </div>

        )}

      </div>

    </section>

  );
}