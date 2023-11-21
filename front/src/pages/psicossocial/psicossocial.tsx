import CustomButton from "../../components/CustomButton";
import imagem from "../../img/gps.png";

function psicossocial() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="flex flex-row w-screen h-screen justify-center align-middle items-center py-10 md:py-10 xs:px-1 md:px-5  bg-psicossocial bg-center bg-cover bg-fixed">
        <div className="text-center w-5/6 md:w-4/6 max-w-4xl ">
          <h1 className="pb-14 font-roboto font-medium text-blue-300 text-4xl md:text-5xl md:text-center">
            Assistência psicossocial
          </h1>

          <p className="font-roboto text-lg max-w-4xl font-normal text-justify md:pb-28 pb-44  text-white">
            Na busca contínua pela saúde mental e emocional, nossa equipe de
            assistência psicossocial se dedica a oferecer um apoio abrangente e
            compassivo. Compreendemos que cada indivíduo é único, enfrentando
            desafios específicos em sua jornada pessoal. Aqui, na interseção
            entre a ciência da psicologia e a arte do cuidado humano,
            construímos um ambiente acolhedor onde a cura é uma prioridade.
          </p>
        </div>
      </div>

      <div className="inferior">
        <div>
          <p className="flex flex-col text-white text-center font-roboto text-5xl font-medium md:pt-20 sm:pt-14 xs:pt-8">
            Trabalhos
          </p>
          <p className="text-justify text-white py-10 xs:px-8 sm:px-12 md:px-36">
          O centro de serviço ao migrante, é um projeto de extensão da Universidade Salvador (UNIFACS), que foi criado em 2017 e que tem por objetivo auxiliar, promover ações para refugiados e migrantes no Estado da Bahia. O mesmo, integra a Cátedra Sergio Vieira de Melo, que faz parte da ACNUR (Ato Comissariado das Nações Unidas para Refugiados), a agência da ONU para refugiados. O projeto possui vários núcleos, dentre eles estão o núcleo proteção, engajamento comunitário, meio de vida e desenvolvimento humano e gestão de opinião pública.
O núcleo proteção, é responsável por auxiliar refugiados e migrantes em sua regularização migratória no país. Em parceria com o NPJ (núcleo de práticas jurídicas) UNIFACS, a partir desse ano 2023, começou a fazer atendimento presencial com agendamento. Os voluntários do projeto que fazem parte desse conjunto, em suma são do curso de Direito por mexer com assuntos relacionados a leis e documentações. Mas, também há a presença de voluntários de outros cursos como, Relações internacionais, Serviço Social, Psicologia, etc. Bem como voluntários externos de outras instituições. Esses voluntários fazem atendimento quando há agendamento, e faz atendimento onde e quando o projeto organiza eventos externos e internos, e organizam palestras tanto para o nosso público quanto para o externo.
          </p>

          <div className="flex justify-center xs:flex-col xs:items-center gap-[35px] lg:flex-row">
            <div className="relative w-[312px] h-[430px] bg-bg-aulas rounded-[25px] xs:px-2 sm:px-5 md:px-5" />
            <div className="relative w-[312px] h-[430px] bg-bg-aulas rounded-[25px] xs:px-2 sm:px-5 md:px-5" />
            <div className="relative w-[312px] h-[430px] bg-bg-aulas rounded-[25px] xs:px-2 sm:px-5 md:px-5" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-32"></div>
        </div>
        <div></div>
      </div>

      <div className="bg-white py-10">
        <p className="text-4xl font-medium font-roboto text-center pt-10">
          Agendar atendimento
        </p>
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="flex justify-center items-center w-full md:w-1/2 my-16">
            <p className="text-justify text-xl px-4 md:px-12 lg:px-36 font-roboto">
            Estamos aqui para apoiar você em cada passo da sua jornada. Seja você um recém-chegado em busca de orientação jurídica, alguém buscando integração cultural ou simplesmente precisando de apoio psicossocial, nosso Centro de Serviços ao Migrante está pronto para oferecer assistência personalizada.

Agendar seu atendimento conosco é o primeiro passo para acessar uma gama de serviços que visam facilitar sua transição e promover uma experiência positiva em sua nova comunidade. 
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 my-16">
            <img
              className="shadow-2xl mr-6 sm:mr-10 md:mr-20 rounded-3xl w-full md:w-96 h-auto"
              src={imagem}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <CustomButton
            text="Agendar"
            onClick={handleClick}
            buttonClassName="bg-blue-700 text-white hover:bg-blue-500 font-roboto font-medium py-4"
            textClassName=""
          />
        </div>
      </div>
    </>
  );
}

export default psicossocial;
