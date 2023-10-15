import React, { FC, CSSProperties } from "react";

interface SwiperCardProps {
  backgroundImage: string;
  title: string;
  paragraph: string;
  link: string;
}

const SwiperCard: FC<SwiperCardProps> = ({
  backgroundImage,
  title,
  paragraph,
  link,
}) => {
  const fetchedImgSrc =
    "https://images.unsplash.com/photo-1696446702218-3c68e12da5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

  const cardStyle: CSSProperties = {
    backgroundImage: `url(${backgroundImage || fetchedImgSrc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

  };

  return (
    <div
      className="h-screen w-full z-0"
      style={cardStyle}
    >
      <div className="w-full h-full bg-gradient-to-t from-black to-transparent">
        <div className="py-72"></div>
        <div className="m-10 text-white">
          <h1 className="font-roboto font-medium text-justify text-4xl md:text-5xl">
            {title || "Sem Evento"}
          </h1>
          <p className="font-roboto font-thin text-base my-10 text-justify">
            {paragraph || "Um evento ainda não foi adicionado."}
          </p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 rounded-md font-roboto font-normal p-3 px-12 hover:bg-blue-300 hover-text-white mt-10">
            Inscreva-se
          </a>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
