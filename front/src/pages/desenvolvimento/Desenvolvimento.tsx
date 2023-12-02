import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import PartnerBox from "../../components/PartnerBox";
import TurmasIMG from "../../img/Turmas.png";
import AulasIMG from "../../img/Aulas.png";
import MateriaisIMG from "../../img/Materiais.png";

function Desenvolvimento() {
  function handleClick(): void {
    window.location.href = "https://forms.gle/XY8f7Tn1xBiP7EiW6";
  }
  

  return (
    <div className="bg-landing w-full font-roboto">
      <div>
        {/* Introdução */}
        <div className="h-full md:h-screen flex flex-row justify-center align-middle items-center py-10 xs:px-2 sm:px-5 md:px-5 bg-desenvolvimento bg-center bg-cover bg-fixed">
          <div className="flex flex-col justify-center items-center text-center md:text-start w-5/6 md:w-4/6 max-w-4xl ">
            <h1 className="font-roboto my-10 font-medium text-blue-300 text-4xl md:text-5xl text-center md:text-start">
              Desenvolvimento 
            </h1>
            <p className="font-roboto font-normal text-white text-lg my-4 text-justify">
              Bem-vindo à nossa área dedicada ao desenvolvimento pessoal e
              educacional! Reconhecemos a importância de apoiar o crescimento
              contínuo dos migrantes, não apenas nas dimensões práticas da
              mudança, mas também no aprimoramento de suas habilidades e
              conhecimentos. Nosso objetivo é proporcionar uma experiência
              educacional abrangente e personalizada, que visa capacitar os
              migrantes a se adaptarem e prosperarem em seu novo ambiente. Nossa
              área de desenvolvimento pessoal oferece uma variedade de recursos
              para atender às necessidades individuais de aprendizado. As aulas
              abrangem uma gama de tópicos relevantes, desde habilidades
              linguísticas até técnicas de adaptação cultural. Os materiais
              disponíveis são cuidadosamente selecionados para oferecer suporte
              tanto aos aspectos práticos da mudança quanto ao enriquecimento
              intelectual.
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
            <PartnerBox
              icon={TurmasIMG}
              title={"Turmas"}
              text={
                "Nosso formulário de Incrição, para receber nossos avisos sobre novas turmas/grupos de aprendizagem."
              }
              link={"https://forms.gle/rc52Y3CZ8GS5Pntr7"}
            />
            <PartnerBox
              icon={AulasIMG}
              title={"Aulas"}
              text={
                "Aqui você pode acessar as aulas gravadas mais recentes, de qualquer assunto ou turma. Não precisa logar."
              }
              link={"desenvolvimento/Aulas"}
            />
            <PartnerBox
              icon={MateriaisIMG}
              title={"Materiais"}
              text={
                "Aqui você pode consultar materiais extras, para agregar nos seus novos conhecimentos e praticar melhor."
              }
              link={"/desenvolvimento/Aulas"}
            />
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
                        src="https://www.youtube.com/embed/fJ9rUzIMcZQ?si=kb86JvR_Q1Y04GnI"
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
                        href="https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
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
                O Centro de Serviço ao Migrante é uma organização importante que
                desempenha um papel fundamental na promoção da migração segura,
                ordenada e digna no Brasil. O Centro oferece uma ampla gama de
                serviços e atividades que ajudam migrantes e refugiados a se
                integrar na sociedade brasileira e a exercer seus direitos. O
                vídeo abaixo mostra algumas das atividades realizadas pelo
                Centro de Serviço ao Migrante. No vídeo, vemos migrantes e
                refugiados participando de cursos de português, oficinas de
                qualificação profissional, atividades culturais e esportivas e
                oportunidades de voluntariado. Também vemos migrantes e
                refugiados recebendo apoio jurídico e orientação sobre seus
                direitos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desenvolvimento;
