import BoxCard from "../../components/CardBox";
import PhotoCircle from "../../components/PhotoCircle";
import CustomButton from "../../components/CustomButton";

function Engajamento() {
  return (
    <div className=" bg-landing w-full ">
      <div className="h-full w-full">
        <div className="flex flex-row w-screen h-screen justify-center align-middle items-center py-10 md:py-10 xs:px-1 md:px-5 bg-bg-aulas bg-center bg-cover bg-fixed">
          <div className="text-center w-5/6 md:w-4/6 max-w-4xl ">
            <h1 className="pb-14 font-roboto font-medium text-blue-300 text-4xl md:text-5xl md:text-center">
              Nossa Comunidade
            </h1>

            <p className="font-roboto text-md max-w-4xl font-normal text-justify pb-28  text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              odit ullam voluptates omnis. Quia ullam necessitatibus quisquam
              molestiae at facere, reiciendis eum recusandae, vel quasi nulla
              libero asperiores laboriosam aliquam.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Delectus odit ullam voluptates
              omnis. Quia ullam necesitatibus quisquam molestiae at facere,
              reiciendis eum recusandae, vel quasi nulla libero asperiores
              laboriosam aliquam.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center align-middle items-center py-10 md:py-10 xs:px-1 md:px-5">
          <div className="text-center w-5/6 md:4/6 max-w-4xl">
            <div className="flex flex-row overflow-scroll -mt-32 md:overflow-auto items-center align-middle justify-between gap-5">
              <PhotoCircle backgroundImage={"./teste.jpg"} text={"Dance"} />
              <PhotoCircle backgroundImage={""} text={"Dance"} />
              <PhotoCircle backgroundImage={""} text={"Dance"} />
              <PhotoCircle backgroundImage={""} text={"Dance"} />
            </div>
            <div className="flex flex-row justify-center align-middle items-center">
              <p className="font-roboto pt-20 text-md font-normal text-justify pb-20  text-white md:mx-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus odit ullam voluptates omnis. Quia ullam necessitatibus
                quisquam molestiae at facere, reiciendis eum recusandae, vel
                quasi nulla libero asperiores laboriosam aliquam.Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Delectus odit
                ullam voluptates omnis. Quia ullam necessitatibus quisquam
                molestiae at facere, reiciendis eum recusandae, vel quasi nulla
                libero asperiores laboriosam aliquam.
              </p>
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

            <div className="font-robot font-normal text-md my-10 text-justify">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              odit ullam voluptates omnis. Quia ullam necessitatibus quisquam
              molestiae at facere, reiciendis eum recusandae, vel quasi nulla
              libero asperiores laboriosam aliquam.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Delectus odit ullam voluptates
              omnis. Quia ullam necessitatibus quisquam molestiae at facere,
              reiciendis eum recusandae, vel quasi nulla libero asperiores
              laboriosam aliquam.
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
