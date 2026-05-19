"use client";

export default function ContactForm() {

  return (

    <section
      id="contact"
      className="bg-[#0a0a0a] py-24 px-6"
    >

      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-bold text-yellow-400 text-center mb-6">
          Contact Us
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Send your enquiry and connect with RoyalSun Aromatics.
        </p>

        <form
          action="https://formsubmit.co/abhikhutal2409@gmail.com"
          method="POST"
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
              w-full
              bg-black
              border border-yellow-500/20
              rounded-xl
              px-5
              py-4
              text-white
              outline-none
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="
              w-full
              bg-black
              border border-yellow-500/20
              rounded-xl
              px-5
              py-4
              text-white
              outline-none
            "
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="
              w-full
              bg-black
              border border-yellow-500/20
              rounded-xl
              px-5
              py-4
              text-white
              outline-none
            "
          ></textarea>

          <button
            type="submit"
            className="
              w-full
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              py-4
              rounded-xl
              font-bold
              text-lg
              transition
            "
          >
            Send Enquiry
          </button>

        </form>

      </div>

    </section>

  );
}