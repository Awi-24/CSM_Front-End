import BoxCard from "../../components/BoxCard";
import PartnerBox from "../../components/PartnerBox";

function Landing() {
  return (
    <div className="bg-landing w-full bg-cover">
      {/*Carrossel de eventos*/}
      <div></div>
      {/*APRESENTAÇÃO*/}
      <div className="flex-col flex align-middle items-center">
        <div className="text-white align-middle w-7/12 p-16">
          <h1 className="text-5xl font-medium text-center font-roboto">
            Centro de Serviços ao Migrante
          </h1>
          <h3 className="font-roboto text-lg font-regular mt-16 mb-28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </div>
        {/*BLOCO*/}
        <div className="flex flex-col items-center bg-white w-full p-20 mt-20">
          {/*CAIXAS MAIOR*/}
          <div className="flex flex-col relative -m-64 items-center justify-center  mb-10 bg-blue-200  rounded-xl shadow-md shadow-black-50">
            <div className=" grid grid-cols-2 gap-6 p-4">
              <BoxCard icon={""} title={""} text={""} link={""} />
              <BoxCard icon={""} title={""} text={""} link={""} />
              <BoxCard icon={""} title={""} text={""} link={""} />
              <BoxCard icon={""} title={""} text={""} link={""} />
            </div>
          </div>
        </div>
      </div>
      {/*Mapeamento*/}
      <div className="flex flex-col items-center bg-white -mt-16">
        <h1 className="font-roboto text-gray-900 text-4xl font-medium text-center mb-10">
          Mapeamento
        </h1>
        <div className="flex flex-row justify-between w-9/12 mb-16">
          <div className="bg-black w-[32rem] h-72 rounded-lg m-auto">.</div>
          <h2 className="font-roboto text-gray-900 w-2/6 m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed enim nisl. In hac habitasse platea dictumst. Maecenas accumsan a
            odio et maximus. Mauris feugiat eros quis metus aliquam finibus.
            Vivamus neque neque, imperdiet sit amet condimentum nec, consectetur
            sagittis diam. Ut facilisis dignissim justo, non iaculis felis
            malesuada in. Donec placerat purus ut lacus eleifend laoreet. Donec
            at lorem erat.
          </h2>
        </div>
        <h2 className="flex flex-row justify-center font-roboto mb-10 -mt-10 text-gray-900 w-full m-auto">
          *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
          enim nisl.
        </h2>
      </div>

      {/*PARCERIAS */}
      <div className="h-screen w-full text-center flex flex-col justify-center items-center">
        <h1 className="font-roboto font-medium text-5xl text-center m-10 text-white">
          Parcerias
        </h1>
        <h5 className="font-roboto text-lg font-regular w-7/12 text-white p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
          enim nisl. In hac habitasse platea dictumst. Maecenas accumsan a odio
          et maximus. Mauris feugiat eros quis metus aliquam finibus. Vivamus
          neque neque, imperdiet sit amet condimentum nec, consectetur sagittis
          diam. Ut facilisis dignissim justo, non iaculis felis malesuada in.
          Donec placerat purus ut lacus eleifend laoreet.
        </h5>
        <div className="flex flex-row justify-center mt-6">
          <PartnerBox icon={""} title={"CATED"} text={""} link={""} />
          <PartnerBox icon={""} title={"UNIFACS"} text={""} link={""} />
          <PartnerBox icon={""} title={"ACNUR"} text={""} link={""} />
        </div>
      </div>
      <div className="w-full flex-col">
        <form action="">
          <div className="flex flex-row md:flex-col">
            <div>col 1</div>
            <div>col 2</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Landing;
