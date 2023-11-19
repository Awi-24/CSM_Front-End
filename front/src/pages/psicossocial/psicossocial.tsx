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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            odit ullam voluptates omnis. Quia ullam necessitatibus quisquam
            molestiae at facere, reiciendis eum recusandae, vel quasi nulla
            libero asperiores laboriosam aliquam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Delectus odit ullam voluptates omnis.
            Quia ullam necesitatibus quisquam molestiae at facere, reiciendis
            eum recusandae, vel quasi nulla libero asperiores laboriosam
            aliquam.
          </p>
        </div>
      </div>

      <div className="inferior">
        <div>
          <p className="flex flex-col text-white text-center font-roboto text-5xl font-medium md:pt-20 sm:pt-14 xs:pt-8">
            Trabalhos
          </p>
          <p className="text-justify text-white py-10 xs:px-8 sm:px-12 md:px-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            necessitatibus nulla dolorum, libero ullam eum cumque odio facilis
            illo exercitationem fugit repellendus incidunt, laboriosam, adipisci
            ex magni est. Deleniti, ullam? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dolorem autem delectus voluptatem
            libero asperiores dolor veritatis, ratione nulla maxime sapiente!
            Eaque praesentium optio sint quae ipsam? Reprehenderit assumenda
            ipsam distinctio! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Porro tempora molestiae ad, fuga nam repellat
            velit minus inventore repudiandae harum ipsum ea! Excepturi
            praesentium sed laudantium eligendi doloremque! Cumque, quo. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ad maxime nobis
            eos nostrum inventore quos eaque sit, voluptatibus debitis quidem
            culpa suscipit quo consectetur animi doloremque voluptates,
            laudantium autem cupiditate.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet sodales libero. Cras at enim a diam facilisis tristique.
              Cras dignissim aliquam tempor. Praesent bibendum quam nibh,
              aliquam finibus elit sagittis eget. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent sit amet sodales libero.
              Cras at enim a diam facilisis tristique. Cras dignissim aliquam
              tempor
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
