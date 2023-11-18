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
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-landing w-full font-roboto">
      <div>
        {/* Introdução */}
        <div className="h-screen flex flex-row justify-center align-middle items-center py-10 xs:px-2 sm:px-5 md:px-5 bg-bg-aulas bg-center bg-cover bg-fixed">
          <div className="text-center md:text-start w-5/6 md:w-4/6 max-w-4xl ">
            <h1 className="font-roboto font-medium text-blue-300 text-4xl md:text-5xl text-center md:text-start">
              Desenvolvimento Pessoal
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
              link={""}
            />
            <PartnerBox
              icon={AulasIMG}
              title={"Aulas"}
              text={
                "Aqui você pode acessar as aulas gravadas mais recentes, de qualquer assunto ou turma. Não precisa logar."
              }
              link={"./Aulas"}
            />
            <PartnerBox
              icon={MateriaisIMG}
              title={"Materiais"}
              text={
                "Aqui você pode consultar materiais extras, para agregar nos seus novos conhecimentos e praticar melhor."
              }
              link={""}
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
                Através deste vídeo envolvente, vamos guiá-lo pelos valores que
                nos impulsionam, mostrando como nossa abordagem única visa não
                apenas facilitar a adaptação prática, mas também cultivar uma
                base sólida para o seu desenvolvimento pessoal. Junte-se a nós
                enquanto compartilhamos histórias inspiradoras, visões poderosas
                e o compromisso de construir um futuro cheio de oportunidades.
                Seja parte da nossa jornada - sua jornada. Estamos aqui para
                apoiá-lo, capacitá-lo e celebrar cada passo do caminho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desenvolvimento;
