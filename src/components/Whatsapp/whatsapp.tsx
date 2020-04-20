import React from "react"
import whatsapp from "../../assets/icons/whatsapp.svg"

type WhatsappProps = {
  telephone: string
}

export const Whatsapp = ({ telephone }: WhatsappProps) => {
  return (
    <a
      className="bg-green-500 flex align-center flex-shrink-0 justify-center rounded-full overflow-hidden h-10 w-10 mr-3 md:ml-0 md:mr-8 lg:ml-8 lg:mr-0"
      target="_blank"
      rel="noopener noreferrer"
      href={`https://wa.me/${telephone}`}
    >
      <img src={whatsapp} alt="Whatsapp Logo" className="logo" />
    </a>
  )
}
