import React, { FC, CSSProperties, useState } from "react";

interface SwiperCardProps2 {
  title: string;
  paragraph: string;
  link: string;
  image: string; // Nova propriedade para a imagem
}

const Documentos: FC = () => {
  const [currentDocument, setCurrentDocument] = useState(0);

  const documents: SwiperCardProps2[] = [
    {
      title: "Registro Nacional de Estrangeiros (RNE)",
      paragraph:
        "O RNE é específico para estrangeiros que residem no Brasil. Ele é um documento oficial que comprova sua condição migratória e é necessário para diversas transações legais. No guia, você encontrará explicações detalhadas sobre como adquirir e renovar seu RNE, assegurando que você esteja em conformidade com as regulamentações migratórias do país.",
      link: "https://www.gov.br/pt-br/servicos/registrar-se-como-estrangeiro-no-brasil",
      image: "https://www.s2vistos.com.br/wp-content/uploads/2020/04/rne-registo-acional-de-estrangeiro-modelo-de-carteira.jpg", // Substitua pelo caminho real da imagem
    },
    {
      title: "Cadastro de Pessoa Física (CPF)",
      paragraph:
        "O CPF é um documento fundamental para qualquer pessoa que pretenda residir no Brasil. Ele é utilizado para identificar contribuintes perante a Receita Federal. No Guia de Documentos, fornecemos instruções claras sobre como obter e regularizar seu CPF, garantindo que você esteja devidamente documentado para participar plenamente da vida no país.",
      link: "https://www.gov.br/pt-br/servicos/obter-cartao-de-cpf",
      image: "https://www.serasa.com.br/ensina/wp-content/uploads/2017/10/18105213/o-que-e-cpf-1.jpg", // Substitua pelo caminho real da imagem
    },
    {
      title: "Registro Geral (RG) Brasileiro",
      paragraph:
        "O Registro Geral é a identidade nacional brasileira. Para os migrantes, ter um RG válido é essencial para acessar uma variedade de serviços e garantir sua identificação em solo brasileiro. O Guia de Documentos oferece insights sobre como solicitar e manter seu RG, proporcionando segurança e comodidade em suas interações cotidianas.",
      link: "http://servicos.ba.gov.br/detalhe/servico/1209",
      image: "https://anotabahia.com/wp-content/uploads/2023/03/anotabahia-governo-prorroga-prazo-para-estados-emitirem-novo-rg-novo-rg-showmetech-5.webp", // Substitua pelo caminho real da imagem
    },
    {
      title: "Carteira de Trabalho",
      paragraph:
        "A Carteira de Trabalho e Previdência Social (CTPS) é um documento essencial para os trabalhadores no Brasil. Emitida pelo Ministério da Economia, por meio da Secretaria Especial de Previdência e Trabalho, a CTPS tem como objetivo registrar a vida profissional do trabalhador, garantindo seus direitos e benefícios.",
      link: "http://servicos.ba.gov.br/detalhe/servico/1209",
      image: "https://assets-blog.pagseguro.uol.com.br/wp-content/2022/07/carteira-de-trabalho-digital-min.jpg", // Substitua pelo caminho real da imagem
    },
  ];

  const handleNextDocument = () => {
    setCurrentDocument((prevDocument) => (prevDocument + 1) % documents.length);
  };

  const handlePrevDocument = () => {
    setCurrentDocument((prevDocument) =>
      prevDocument === 0 ? documents.length - 1 : prevDocument - 1
    );
  };

  const cardStyle: CSSProperties = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const currentDoc = documents[currentDocument];

  return (
    <div style={cardStyle}>
      <div className="max-w-4xl flex flex-col md:flex-row justify-start align-middle items-center bg-blue-200 rounded-none md:rounded-md h-fit overflow-clip">
        <img
          className="rounded-none md:rounded-md h-96 w-96 object-cover m-4"
          src={currentDoc.image}
          alt="Imagem do documento"
        />
        <div className="flex flex-col xs:p-3 sm:p-4 md:p-8">
          <p className="font-roboto font-medium text-xl md:text-2xl">
            {currentDoc.title || "Documento não inserido."}
          </p>
          <p className="font-roboto font-thin text-base my-5">
            {currentDoc.paragraph || "Erro de inserção."}
          </p>

          <div className="flex flex-row justify-center">
            {/* Adicione aqui qualquer conteúdo adicional */}
          </div>

          <div className="flex flex-row justify-between mt-16">
            <button
              onClick={handlePrevDocument}
              className="bg-blue-500 text-white font-roboto font-normal p-2 rounded-md hover:bg-blue-200 hover:text-blue-900"
            >
              Anterior
            </button>
            <a
              href={currentDoc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg text-center rounded-md font-roboto font-normal p-2 px-12 hover:bg-blue-500 hover:text-white"
            >
              Solicitar
            </a>
            <button
              onClick={handleNextDocument}
              className="bg-blue-500 text-white font-roboto font-normal p-2 rounded-md hover:bg-blue-400"
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentos;
