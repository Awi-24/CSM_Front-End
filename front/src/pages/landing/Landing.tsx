import React, { ChangeEvent, useState } from "react";
import Carousel from "react-material-ui-carousel";

import CardBox from "../../components/CardBox";
import PartnerBox from "../../components/PartnerBox";
import Presentation from "../../components/Presentation";
import CustomButton from "../../components/CustomButton";
import SwiperCard from "../../components/SwiperCard";

const eventsData = [
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1696446702218-3c68e12da5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Explicação de Lorem Ipsum",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Teste 2",
    paragraph: "Dança gatinho dança.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Teste 3",
    paragraph: "Descrição do Evento 3",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

function Landing() {
  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-landing w-full">
      {/* Max/Min Width*/}
      <div className="w-full h-full">
        {/*Carrossel*/}
        <Carousel>
          {eventsData.map((event, index) => (
            <SwiperCard
              key={index}
              backgroundImage={event.backgroundImage}
              title={event.title}
              paragraph={event.paragraph}
              link={event.link}
            />
          ))}
        </Carousel>
        {/*About Us*/}
        <div className="flex flex-row justify-center align-middle items-center mt-10 py-16 xs:px-2 sm:px-5 md:px-5">
          <Presentation title={"Centro de Serviços ao Migrante"} text={""} />
        </div>
        {/*Box with cards*/}
        <div className="flex flex-row justify-center align-middle items-center p-10 w-full bg-abrupt-gradient">
          <div className="bg-blue-200 w-4/6 rounded-md xs:w-full sm:w-full md:w-fit">
            <div className="flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center">
              <CardBox
                icon={"./svg/umbrella-solid.svg"}
                title={"Proteção"}
                text={
                  "A sua unidade de atentidmento especializado, para a proteção dos seus direitos."
                }
                link={""}
              />
              <CardBox
                icon={"./svg/people-group-solid.svg"}
                title={"Comunidade"}
                text={
                  "Área dedicada a incentivar a participação em nossos eventos, aulas e workshops."
                }
                link={""}
              />
            </div>
            <div className="flex flex-col justify-around sm:flex-row sm:justify-start sm:items-center">
              <CardBox
                icon={"./svg/heart-solid.svg"}
                title={"Desenvolvimento"}
                text={
                  "Sua rede de desenvolvimento pessoal e profissional dentro da nossa organização."
                }
                link={""}
              />
              <CardBox
                icon={"./svg/bullhorn-solid.svg"}
                title={"Marketing"}
                text={
                  "Área dedicada a divulgação e promocção de nossos eventos, aulas, ações, campanhas, etc. "
                }
                link={""}
              />
            </div>
          </div>
        </div>
        {/*Mapping*/}
        <div className="flex flex-row justify-center bg-white py-10 md:py-10 xs:px-1 md:px-5">
          <div className="text-center w-5/6 md:w-4/6 max-w-4xl">
            <h1 className="font-roboto font-medium text-gray-900 text-4xl md:text-5xl mb-10 text-center">
              Mapeamento
            </h1>
            <p className="font-roboto font-normal text-gray-900 text-lg w-fit text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend odio eget vestibulum. Vivamus condimentum ante in mi
              blandit, a lacinia ex dignissim. Fusce cursus quam eget sem
              laoreet, non feugiat dui vestibulum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eleifend odio eget vestibulum.
              Vivamus condimentum ante in mi blandit, a lacinia ex dignissim.
              Fusce cursus quam eget sem laoreet, non feugiat dui vestibulum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend odio eget vestibulum. Vivamus condimentum ante in mi
              blandit, a lacinia ex dignissim.
            </p>
          </div>
        </div>
        {/*Parcerias*/}
        <div className="flex flex-row justify-center align-middle items-center py-10 xs:px-2 sm:px-5 md:px-5">
          <div className="flex flex-col w-5/6 justify-center">
            <h1 className="font-roboto font-medium text-white text-4xl md:text-5xl mb-10 text-center">
              Parcerias
            </h1>
            <div className="flex flex-col items-center md:flex-row justify-center xs:w-full sm:w-full">
              <PartnerBox icon={""} title={"ACNUR"} text={""} link={""} />
              <PartnerBox icon={""} title={"UNIFACS"} text={""} link={""} />
              <PartnerBox icon={""} title={"CATED"} text={""} link={""} />
            </div>
          </div>
        </div>
        {/* Fale Conosco */}
        <div className="flex flex-row justify-center align-middle items-center py-10 xs:px-2 sm:px-5 md:px-5 bg-white">
          <div className="flex flex-col xs:w-5/6 md:w-4/6 items-center justify-center">
            <h1 className="font-roboto font-medium text-gray-900 text-4xl md:text-5xl mb-10 text-center">
              Fale Conosco
            </h1>
            <div className="flex flex-col p-4 md:flex-row justify-center items-center">
              <div className="flex flex-col">
                <div className="flex flex-col xl:flex-row justify-between items-center align-middle max-w-lg">
                  <input
                    type="text"
                    name="Nome"
                    placeholder="Nome"
                    className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-96}`}
                    onChange={handleInputChange}
                  />

                  <input
                    type="text"
                    name="Sobrenome"
                    placeholder="Sobrenome"
                    className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto}`}
                    onChange={handleInputChange}
                  />
                </div>

                <input
                  type="email"
                  name="Email"
                  placeholder="E-mail"
                  maxLength={350}
                  className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-auto md:w-auto}`}
                  onChange={handleInputChange}
                />

                <input
                  type="tel"
                  name="Telefone"
                  placeholder="Telefone (Opcional)"
                  className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flow flow-col">
                <textarea
                  name="Mensagem"
                  placeholder="Mensagem"
                  rows={4} // Número de linhas visíveis
                  cols={50}
                  className={`m-2 h-44 w-80 md:w-96 text rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600}`}
                />
              </div>
            </div>
            <CustomButton
              text={"Enviar"}
              buttonClassName="bg-blue-700 text-white hover:bg-blue-500 font-roboto font-medium"
              textClassName=""
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
