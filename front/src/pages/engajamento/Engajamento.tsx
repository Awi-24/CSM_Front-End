import BoxCard from "../../components/CardBox";
import PhotoCircle from "../../components/PhotoCircle";
import CustomButton from "../../components/CustomButton";
import TeamsCard from "../../components/TeamsCard";

function Engajamento() {
  return (
    <div className=" bg-landing w-full ">
      <div className="h-full w-full">
        <div className="flex flex-row w-screen h-screen justify-center align-middle items-center py-10 md:py-10 xs:px-1 md:px-5 bg-bg-aulas bg-center bg-cover bg-fixed">
          <div className="text-center w-5/6 md:w-4/6 max-w-4xl ">
            <h1 className="pb-14 font-roboto font-medium text-blue-300 text-4xl md:text-5xl md:text-center">
              Engajamento Comunitário
            </h1>
            <p className="font-roboto text-lg max-w-4xl font-normal text-justify md:pb-28 pb-44  text-white">
              O Centro de Serviço ao Migrante está comprometido em promover um
              ambiente inclusivo e solidário por meio do engajamento
              comunitário. Nosso site serve como uma plataforma vital para
              recrutar novos voluntários que desejam fazer a diferença na vida
              dos migrantes. Estamos constantemente buscando indivíduos
              dedicados e apaixonados para se juntarem a nós na organização de
              eventos, atividades enriquecedoras e confraternizações
              significativas. Os voluntários desempenham um papel fundamental no
              suporte aos migrantes, oferecendo orientação, assistência prática
              e apoio emocional. Através do nosso site, facilitamos a conexão
              entre membros da comunidade e aqueles que buscam integrar-se à
              nova sociedade. Além disso, promovemos ativamente esses eventos,
              compartilhando histórias inspiradoras e destacando o impacto
              positivo que a comunidade pode ter na vida dos migrantes.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center align-middle items-center py-10 md:py-10 xs:px-1 md:px-5">
          <div className="text-center w-5/6 md:4/6 max-w-4xl">
            <div className="flex flex-row overflow-scroll -mt-32 md:overflow-auto items-center align-middle justify-between gap-5">
              <PhotoCircle
                backgroundImage={"./teste.jpg"}
                text={"Coordenadora"}
              />
              <PhotoCircle
                backgroundImage={"./teste.jpg"}
                text={"Vice-Coordenadora"}
              />
              <PhotoCircle backgroundImage={"./teste.jpg"} text={"Membro"} />
              <PhotoCircle backgroundImage={"./teste.jpg"} text={"Membro"} />
            </div>
            <div className="flex flex-row justify-center align-middle items-center">
              <p className="font-roboto pt-20 text-lg font-normal text-justify pb-20  text-white md:mx-10">
              É com grande entusiasmo que apresentamos a equipe por trás dos bastidores, os arquitetos visionários que dão vida ao nosso projeto com paixão e comprometimento. Cada membro desta equipe traz consigo uma mistura única de talentos, habilidades e experiências, formando um coletivo resiliente focado em alcançar a excelência.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center align-middle items-center py-10 md:py-10 xs:px-1 md:px-5">
          <div className="text-center flex flex-col text-white w-5/6 md:4/6 max-w-4xl">
            <div className="flex flex-col justify-center items-center align-middle">
              <TeamsCard
                icon={""}
                title={"ASSISTÊNCIA PSICOSSOCIAL"}
                text={"Oferecemos apoio empático e confidencial. Juntos, construímos caminhos para o equilíbrio emocional e bem-estar duradouro."}
                link={""}
              />
              <TeamsCard
                icon={""}
                title={"ÁREA EDUCACIONAL"}
                text={"Educação transformadora, inspirada pela inovação. Mentes curiosas para crescimento e desenvolvimento pessoal excepcionais."}
                link={""}
              />
              <TeamsCard
                icon={""}
                title={"ÁREA JURÍDICA"}
                text={"Onde a justiça é mais do que uma aspiração, é a base sobre a qual construímos solidez, equidade e proteção para os direitos."}
                link={""}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 w-screen flex flex-row justify-center align-middle items-center py-10 md:py-10 xs:px-1 md:px-5">
        <div className="text-center w-5/6 max-w-4xl">
          <div className="md:mx-10">
            <p className="font-roboto text-center text-4xl font-medium text-gray-900 pt-10">
              Voluntarie-se!
            </p>

            <div className="font-robot font-normal text-lg my-10 text-justify">
              {" "}
              Una-se à nossa causa! Juntos podemos embarcar nessa jornada de impacto social,
              fazemos a diferença, influenciando vidas
               e construindo um mundo mais solidário e inclusivo.
               Seja parte da mudança, dedicando seu tempo e habilidades para causas significativas.
            </div>
          </div>
          <CustomButton
            text={"Formulário"}
            buttonClassName="bg-blue-700 text-white hover:bg-blue-500 font-roboto font-medium"
            textClassName=""
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Engajamento;
