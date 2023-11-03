import React, { FC, CSSProperties } from "react";

interface SwiperCardProps2 {
  title: string;
  paragraph: string;
  link: string;
}

const SwiperCard2: FC<SwiperCardProps2> = ({ title, paragraph, link }) => {
  const cardStyle: CSSProperties = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div style={cardStyle}>
      <div className="bg-blue-200 rounded-lg flex ">
        <div className="flex w-1/2 justify-center m-6">
            <div className="bg-gray-500 w-full">

            </div>
        </div>
        <div className="flex w-1/2 flex-col xs:p-3 sm:p-4 md:p-8">

          <p className="font-roboto font-medium text-xl md:text-2xl">
            {title || "Sem Evento"}
          </p>
          <p className="font-roboto font-thin text-base my-5 max-w-xl">
            {paragraph || "Um evento ainda não foi adicionado."}
          </p>

          <div className="flex flex-row justify-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 shadow-lg hover:shadow-blue-500 text-center w-fit rounded-md font-roboto font-normal p-2 px-12 hover:bg-blue-200 hover:text-blue-900 mt-10"
            >
              Solicitar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard2;
