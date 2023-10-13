import MediaQuery from "react-responsive";
import CustomButton from "../../components/CustomButton";
import PartnerBox from "../../components/PartnerBox";
import imagem from "../../img/ratao.jpg"

function Juridico() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="">
        <p>topo</p>
      </div>
      <div className="bg-white py-10">
        <p className="text-4xl font-semibold font-roboto text-center">Atendimento Presencial</p>
        <div className="flex">
          <div className="flex justify-center items-center w-1/2 my-16">
            <p className="text-justify ml-20 text-xl font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident excepturi sint, fugit adipisci ducimus ullam. Hic quisquam reprehenderit nulla excepturi doloremque repellat praesentium adipisci nesciunt, officiis fuga velit harum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam odio dolore nemo veritatis nulla est expedita delectus. Neque distinctio repellendus quaerat assumenda quos sapiente in, aperiam necessitatibus commodi labore.
            </p>
              </div>
          <div className="flex ml-20 w-1/2 my-16">
            <img className="" src={imagem} alt="" height="400px" width="450px"/>
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
      <div className="inferior">
        <p>aaaa</p>
      </div>
    </>
  );
}

export default Juridico;
