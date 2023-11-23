import CustomButton from "../../components/CustomButton";
import Mapa from "../../img/Mapa.png";


function psicossocial() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  const openLink = (url: string): void => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-row w-screen h-screen justify-center align-middle items-center py-10 md:py-10 xs:px-1 md:px-5  bg-psicossocial bg-center bg-cover bg-fixed">
        <div className="text-center w-5/6 md:w-4/6 max-w-4xl">
          <h1 className="my-10 font-roboto font-medium text-blue-300 text-4xl md:text-5xl md:text-center">
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

      <div className="flex flex-col justify-center align-middle items-center">
        <div className="text-center w-5/6 md:w-4/6 max-w-4xl">
          <h1 className="my-10 font-roboto font-medium text-blue-300 text-4xl md:text-5xl md:text-center">
            Trabalhos
          </h1>
          <p className="tfont-roboto text-lg max-w-4xl font-normal text-justify md:pb-28 pb-44  text-white">
            O Centro de Serviço ao Migrante é um projeto de extensão da
            Universidade Salvador (UNIFACS), criado em 2017. O projeto tem como
            objetivo auxiliar e promover ações para refugiados e migrantes no
            Estado da Bahia. O projeto possui vários núcleos, sendo o núcleo
            proteção responsável por auxiliar refugiados e migrantes em sua
            regularização migratória no país. Em parceria com o NPJ (núcleo de
            práticas jurídicas) UNIFACS, o núcleo proteção começou a fazer
            atendimento presencial com agendamento em 2023. Os voluntários do
            projeto que fazem parte do núcleo proteção são, em sua maioria, do
            curso de Direito, mas também há voluntários de outros cursos, como
            Relações Internacionais, Serviço Social, Psicologia, etc., bem como
            voluntários externos de outras instituições.
          </p>

          <div className="flex flex-wrap justify-center items-center align-middle pb-6">
            <div className="bg-blue-50 h-80 w-64 rounded-lg md: m-6"></div>
            <div className="bg-blue-50 h-80 w-64 rounded-lg md: m-6"></div>
            <div className="bg-blue-50 h-80 w-64 rounded-lg md: m-6"></div>
          </div>
        </div>
      </div>
      <div className="bg-white py-10 flex flex-col justify-center align-middle items-center">
        <h1 className="text-4xl md:text-5xl font-medium font-roboto mb-10 text-justify">
          Atendimento Presencial
        </h1>
        <div className="flex flex-wrap md:justify-around justify-center items-center align-middle m-0 md:m-10">
          <p className="font-roboto text-lg max-w-4xl md:w-3/6 m-8 md:m-0 font-normal text-justify  text-black">
            Entendemos que a obtenção de documentação durante o processo
            migratório pode levantar diversas dúvidas e demandar assistência
            personalizada. É por isso que, no Centro de Serviço ao Migrante
            (CSM), priorizamos a sua jornada e oferecemos a conveniência do
            agendamento de consultas presenciais. Ao agendar uma consulta
            conosco, você terá a oportunidade de discutir suas necessidades
            específicas, esclarecer dúvidas sobre documentação e receber
            orientações personalizadas. Nossa equipe jurídica especializada está
            pronta para fornecer suporte prático, desde a compreensão dos
            requisitos documentais até o auxílio nos procedimentos de
            regularização. O processo de agendamento é simples e projetado para
            se adequar à sua agenda. Basta entrar em contato conosco para marcar
            uma consulta presencial, e teremos o prazer de guiá-lo em cada passo
            do caminho. No CSM, estamos comprometidos em tornar sua experiência
            de obtenção de documentação mais acessível, personalizada e
            bem-sucedida.
          </p>
          <div className="mb-10">
            <img
              className="w-96 h-96 rounded-md m-4 md:m-0"
              src={Mapa}
              alt="Imagem de um mapa"
            />
          </div>
        </div>
        <CustomButton
          text={"Agendar Suporte"}
          buttonClassName="bg-blue-700 text-white hover:bg-blue-500 font-roboto font-medium"
          textClassName=""
          onClick={() => openLink("")}
        />
      </div>
    </div>
  );
}

export default psicossocial;
