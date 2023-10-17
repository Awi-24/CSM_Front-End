import BoxCard from "../../components/CardBox";

function Engajamento() {
  return (
    <div className="  bg-landing w-full ">
      <div className=" p-28 h-full w-full bg-abrupt-gradient2">
        <h1 className="pb-14 font-roboto font-medium text-blue-300 text-4xl md:text-5xl md:text-center">
          Voluntariado
        </h1>

        <div className=" font-robot font-medium text-justify pb-28  text-white">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          odit ullam voluptates omnis. Quia ullam necessitatibus quisquam
          molestiae at facere, reiciendis eum recusandae, vel quasi nulla libero
          asperiores laboriosam aliquam.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Delectus odit ullam voluptates omnis. Quia ullam
          necesitatibus quisquam molestiae at facere, reiciendis eum recusandae,
          vel quasi nulla libero asperiores laboriosam aliquam.
        </div>

        <div className="  flex flex-row justify-evenly ">
          <div className=" w-[200px] h-[200px] top-[-6px] left-[-6px] bg-[#d9d9d9] rounded-[200px] border-[6px] border-solid border-blue-900" />
          <div className=" w-[200px] h-[200px] top-[-6px] left-[-6px] bg-[#d9d9d9] rounded-[200px] border-[6px] border-solid border-blue-900" />
          <div className=" w-[200px] h-[200px] top-[-6px] left-[-6px] bg-[#d9d9d9] rounded-[200px] border-[6px] border-solid border-blue-900" />
          <div className=" w-[200px] h-[200px] top-[-6px] left-[-6px] bg-[#d9d9d9] rounded-[200px] border-[6px] border-solid border-blue-900" />
        </div>
      </div>

      <div className=" font-robot font-medium text-justify pb-10 mx-28 text-white">
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus odit
        ullam voluptates omnis. Quia ullam necessitatibus quisquam molestiae at
        facere, reiciendis eum recusandae, vel quasi nulla libero asperiores
        laboriosam aliquam.Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Delectus odit ullam voluptates omnis. Quia ullam necessitatibus
        quisquam molestiae at facere, reiciendis eum recusandae, vel quasi nulla
        libero asperiores laboriosam aliquam.
      </div>

      <div className="bg-slate-50 text-center">
        <p className="font-roboto text-center text-4xl  font-medium text-gray-900 pt-16">
          Voluntarie-se!
        </p>

        <div className=" font-robot font-medium text-justify pt-8 mx-28">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          odit ullam voluptates omnis. Quia ullam necessitatibus quisquam
          molestiae at facere, reiciendis eum recusandae, vel quasi nulla libero
          asperiores laboriosam aliquam.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Delectus odit ullam voluptates omnis. Quia ullam
          necessitatibus quisquam molestiae at facere, reiciendis eum
          recusandae, vel quasi nulla libero asperiores laboriosam aliquam.
        </div>

        <button className="w-48 bg-blue-700 text-white my-16 hover:bg-blue-500 font-roboto font-medium py-2 px-6 rounded-md shadow-md focus:outline-none">
          <span className="">Formulário</span>
        </button>
      </div>
    </div>
  );
}

export default Engajamento;
