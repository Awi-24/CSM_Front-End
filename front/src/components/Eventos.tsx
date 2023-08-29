import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface EventoProps {
  image: string;
  title: string;
  text: string;
}

const Eventos: React.FC<EventoProps> = ({ image, title, text }) => {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow relative overflow-hidden border">
      <div className="absolute bottom-0 left-0 w-full rounded-none bg-gradient-to-t from-black to-transparent p-4">
        <h1 className="text-white font-medium font-roboto text-2xl sm:text-4xl md:text-5xl -mt-6 sm:-mt-8 md:-mt-10">
          {title || "Nome Evento"}
        </h1>
        <p className="text-white font-roboto font-extralight text-xs sm:text-sm md:text-base bg-opacity-60 p-2 break-words">
          {text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        </p>
      </div>
      <div
        className="h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image || 'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?w=2000'})` }}
      >
      </div>
    </div>
  );
};

function Landing() {
  const eventosData: EventoProps[] = [
    {
      image: "URL_DA_IMAGEM_1",
      title: "Título do Evento 1",
      text: "Descrição do Evento 1",
    },
    {
      image: "URL_DA_IMAGEM_2",
      title: "Título do Evento 2",
      text: "Descrição do Evento 2",
    },
    {
      image: "URL_DA_IMAGEM_3",
      title: "Título do Evento 3",
      text: "Descrição do Evento 3",
    },
  ];

  return (
    <div className="bg-landing w-full bg-cover">
      <div className="flex flex-col justify-center items-center h-screen -mt-10">
        {/* Carrossel de eventos */}
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          emulateTouch={true}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          {eventosData.map((evento, index) => (
            <div key={index}>
              <Eventos
                image={evento.image}
                title={evento.title}
                text={evento.text}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {/* ... (resto do seu código) ... */}
    </div>
  );
}

export default Landing;
