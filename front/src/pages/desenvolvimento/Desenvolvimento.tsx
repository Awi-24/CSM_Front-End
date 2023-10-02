import React from "react";
import MediaQuery from "react-responsive";
import CustomButton from "../../components/CustomButton";
import PartnerBox from "../../components/PartnerBox";

function Aulas() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-landing w-full">
      <div>
        {/* Introdução */}
        <div className="h-screen flex flex-row justify-center align-middle items-center py-10 xs:px-2 sm:px-5 md:px-5 bg-bg-aulas bg-center bg-cover bg-fixed">
          <div className="text-center md:text-start w-5/6 md:w-4/6 max-w-4xl ">
            <h1 className="font-roboto font-medium text-blue-300 text-4xl md:text-5xl text-center md:text-start">
              Título
            </h1>
            <p className="font-roboto font-normal text-white text-lg my-4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend odio eget vestibulum. Vivamus condimentum ante in mi
              blandit, a lacinia ex dignissim. Fusce cursus quam eget sem
              laoreet, non feugiat dui vestibulum.
            </p>
            <CustomButton
              text="Participe"
              onClick={handleClick}
              buttonClassName="bg-white font-roboto font-medium hover:bg-blue-300 hover:text-white mt-10"
              textClassName=""
            />
          </div>
        </div>
        {/* Cards */}
        <div className="h-fit flex flex-row justify-center align-middle items-center py-10 xs:px-2 sm:px-5 md:px-5">
          <div className="flex flex-row flex-wrap justify-center align-middle items-center">
            <PartnerBox icon={""} title={"Turmas"} text={""} link={""} />
            <PartnerBox icon={""} title={"Aulas"} text={""} link={""} />
            <PartnerBox icon={""} title={"Materiais"} text={""} link={""} />
          </div>
        </div>
        {/* Sobre Nós */}
        <div className="w-full bg-white">
          <div className="flex flex-col-reverse justify-center align-middle items-center">
            <MediaQuery query="(min-width: 768px)">
              {(matches) => {
                if (matches) {
                  // Renderize o vídeo apenas em telas maiores que 768px
                  return (
                    <div className="overflow-clip w-fit h-fit rounded-xl m-auto md:m-10 border-blue-700 border-2">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                } else {
                  // Renderize o ícone de play com um link incorporado em telas menores
                  return (
                    <div className="bg-bg-aulas bg-center bg-black bg-opacity-50 my-16 border-blue-700 border-2 sm:w-80 md:w-96 h-52 rounded-md text-center w-5/6 flex justify-center items-center align-middle">
                      <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/youtube (1).svg"
                          alt="Play"
                          className="w-16 h-16"
                        />
                      </a>
                    </div>
                  );
                }
              }}
            </MediaQuery>
            <div className="text-center w-5/6 md:w-4/6 max-w-4xl">
              <h1 className="font-roboto font-medium text-gray-900 text-4xl md:text-5xl my-10">
                Sobre Nós
              </h1>
              <p className="font-roboto font-normal text-gray-700 break-normal text-justify">
                Lorem ipsum dolor sit amet consectetur. Erat consectetur tortor
                mauris parturient non rutrum nisl placerat. At consectetur nunc
                et risus ornare dictumst. Aenean id praesent lorem massa sit.
                Pellentesque et feugiat mauris a libero augue. Lorem ipsum dolor
                sit amet consectetur. Erat consectetur tortor mauris parturient
                non rutrum nisl placerat. At consectetur nunc et risus ornare
                dictumst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aulas;
