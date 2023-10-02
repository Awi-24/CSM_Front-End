import CustomButton from "../../components/CustomButton";
import PartnerBox from "../../components/PartnerBox";
import YoutubePlayer from "../../components/YoutubePlayer";

function Aulas() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-landing w-full">
      <div>
        {/** Introdução */}
        <div className="h-screen flex flex-row justify-center align-middle items-center py-10 xs:px-2 sm:px-5 md:px-5 bg-bg-aulas bg-center bg-cover bg-fixed">
          <div className="text-start md:w-4/6">
            <h1 className="font-roboto font-medium text-blue-300 text-4xl md:text-5xl text-start">
              Titulo
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
              buttonClassName="bg-white font-roboto font-medium hover:bg-blue-300 hover:text-white"
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
          <div className="">
            <div className="overflow-clip w-fit h-fit rounded-xl m-auto md:m-10 border-blue-700 border-2">
              <YoutubePlayer videoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
            </div>
            <div className="">
              <h1 className="font-roboto font-medium text-gray-900 text-4xl md:text-5xl mb-10 text-center  md:text-start">
                Sobre
              </h1>
              <p className="font-roboto font-normal text-gray-800 break-normal">
                Lorem ipsum dolor sit amet consectetur. Erat consectetur tortor
                mauris parturient non rutrum nisl placerat. At consectetur nunc
                et risus ornare dictumst. Aenean id praesent lorem massa sit.
                Pellentesque et feugiat mauris a libero augue. Lorem ipsum dolor
                sit amet consectetur. Erat consectetur tortor mauris parturient
                non rutrum nisl placerat. At consectetur nunc et risus ornare
                dictumst.
              </p>
              <div>placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aulas;
