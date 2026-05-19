import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {

  return (
    <a
      href="https://wa.me/917083412780"
      target="_blank"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        hover:bg-green-400
        text-white
        p-4
        rounded-full
        shadow-[0_0_30px_rgba(34,197,94,0.5)]
        text-3xl
        transition
      "
    >
      <FaWhatsapp />
    </a>
  );
}