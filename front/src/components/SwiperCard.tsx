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
      className="h-screen w-full flex flex-row items-center align-middle justify-center z-0"
      style={cardStyle}
    >
      <div className="w-full h-full flex flex-col justify-center align-middle items-center bg-gradient-to-t from-blue-800 to-black/60">
        <div className="py-50"></div>
        <div className="m-10 text-white flex flex-col justify-center">
          <h1 className="font-roboto font-medium text-center text-4xl md:text-5xl">
            {title || "Sem Evento"}
          </h1>
          <p className="font-roboto font-thin text-base my-5 text-center max-w-4xl">
            {paragraph || "Um evento ainda não foi adicionado."}
          </p>
          <div className="flex flex-row justify-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 shadow-lg hover:shadow-blue-500 text-center w-fit rounded-md font-roboto font-normal p-2 px-12 hover:bg-blue-200 hover:text-blue-900 mt-10"
            >
              Inscreva-se
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
