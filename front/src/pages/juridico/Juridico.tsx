import CustomButton from "../../components/CustomButton";
import Mapa from "../../img/Mapa.png";

import SwiperCard2 from "../../components/Documentos";

const eventsData = [
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1696446702218-3c68e12da5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Documento 1",
    paragraph: "qro saber d prr nhuma",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Documento 2",
    paragraph: "Descrição do documento",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Documento 3",
    paragraph: "Descrição do Evento 3",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const openLink = (url: string): void => {
  window.open(url, "_blank");
};

function Juridico() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center align-middle items-center h-screen bg-Juridico">
        <div className="text-center w-5/6 md:w-4/6 max-w-4xl ">
          <h1 className="pb-14 font-roboto font-medium text-blue-300 text-4xl md:text-5xl md:text-center">
            Jurídico
          </h1>

          <p className="font-roboto text-lg max-w-4xl font-normal text-justify md:pb-28 pb-44  text-white">
            Compreendemos a importância da regularização para os migrantes. Além
            de garantir a conformidade legal, a regularização abre portas para
            uma série de direitos e benefícios fundamentais. Em nossa seção
            exclusiva sobre regularização, exploramos a legislação brasileira,
            destacando a relevância de estar em conformidade com as normativas
            migratórias. Oferecemos insights sobre os procedimentos necessários,
            tornando o processo de regularização compreensível e acessível.
          </p>
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
      <div className="flex flex-row w-full h-fit justify-center align-middle items-center my-10 py-10 md:py-5 xs:px-1 md:px-5 text-white">
        <div className="text-center w-5/6 md:w-4/6 max-w-4xl">
          <h1 className="pb-14 font-roboto font-medium text-blue-300 text-4xl md:text-5xl md:text-center">
            Guia de Documentações
          </h1>
          <p className="font-roboto text-lg max-w-4xl font-normal text-justify">
            Este guia informativo visa oferecer orientações essenciais sobre
            documentos cruciais durante o processo de migração. Aqui, você
            encontrará informações importantes sobre o Cadastro de Pessoa Física
            (CPF), Registro Geral (RG) e Registro Nacional de Estrangeiros
            (RNE).
          </p>
        </div>
      </div>
      <div className="h-full flex flex-col justify-center items-center align-middle">
        <SwiperCard2 />
      </div>
      <div className="flex flex-row w-full h-fit justify-center align-middle items-center my-10 py-10 md:py-5 xs:px-1 md:px-5 text-white">
        <div className="text-center w-5/6 md:w-4/6 max-w-4xl">
          <h1 className="pb-14 font-roboto font-medium text-blue-300 text-4xl md:text-5xl md:text-center">
            Regulamentação
          </h1>
          <p className="font-roboto text-lg max-w-4xl font-normal text-justify mb-10">
            A regularização no Brasil é de extrema importância para os
            migrantes, representando não apenas a conformidade legal, mas também
            o acesso a uma série de direitos e benefícios fundamentais. Ao
            regularizar sua situação migratória, os indivíduos se integram de
            maneira mais efetiva à sociedade brasileira, garantindo o pleno
            exercício de suas atividades, seja no âmbito profissional,
            educacional ou social. A regulamentação brasileira proporciona aos
            migrantes a segurança jurídica necessária para desfrutar de serviços
            públicos, participar do mercado de trabalho de forma legal e
            usufruir de programas sociais. Além disso, estar regularizado
            facilita o acesso a documentos essenciais, como o Registro Nacional
            de Estrangeiros (RNE) e o Cadastro de Pessoa Física (CPF),
            simplificando processos cotidianos e contribuindo para uma
            integração mais suave. A legislação migratória brasileira reflete o
            compromisso do país com a acolhida e a inclusão, buscando garantir
            que os migrantes desfrutem de condições dignas e equitativas. A
            regularização não apenas atende às normativas legais, mas também
            fortalece os laços de solidariedade e respeito entre as diferentes
            comunidades, promovendo a diversidade e a construção de uma
            sociedade mais justa e inclusiva.
          </p>
          <CustomButton
            text={"Saiba Mais"}
            buttonClassName="bg-blue-700 text-white hover:bg-blue-500 font-roboto font-medium"
            textClassName=""
            onClick={() =>
              openLink("http://www.guiadoimigrante.sp.gov.br/#gsc.tab=0")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Juridico;
