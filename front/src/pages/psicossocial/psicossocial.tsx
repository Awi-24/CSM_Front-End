import CustomButton from "../../components/CustomButton";
import imagem from "../../img/gps.png"
import SwiperCard2 from "../../components/Swiper2";



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
              consectetur, adipisicing elit. Delectus odit ullam voluptates
              omnis. Quia ullam necesitatibus quisquam molestiae at facere,
              reiciendis eum recusandae, vel quasi nulla libero asperiores
              laboriosam aliquam.
            </p>
          </div>
        </div>
        
        <div className="inferior">
          <div>
              <p className="flex flex-col text-white text-center font-roboto text-2xl font-medium md:pt-20 sm:pt-14 xs:pt-8">Trabalhos</p>
              <p className="text-justify text-white py-8 xs:px-8 sm:px-12 md:px-36">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat necessitatibus nulla dolorum, libero ullam eum cumque odio facilis illo exercitationem fugit repellendus incidunt, laboriosam, adipisci ex magni est. Deleniti, ullam?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem autem delectus voluptatem libero asperiores dolor veritatis, ratione nulla maxime sapiente! Eaque praesentium optio sint quae ipsam? Reprehenderit assumenda ipsam distinctio!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro tempora molestiae ad, fuga nam repellat velit minus inventore repudiandae harum ipsum ea! Excepturi praesentium sed laudantium eligendi doloremque! Cumque, quo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime nobis eos nostrum inventore quos eaque sit, voluptatibus debitis quidem culpa suscipit quo consectetur animi doloremque voluptates, laudantium autem cupiditate.
              </p>
          </div>
          <div className="flex flex-col">
            <div className="px-32">
        
              </div>
          </div>
          <div>
  
          </div>
          
        </div>

        <div className="bg-white py-10">
          <p className="text-4xl font-medium font-roboto text-center pt-10">Agendar atendimento</p>
          <div className="flex">
            <div className="flex justify-center items-center w-1/2 my-16">
              <p className="text-justify md:ml-20 sm:ml-10 xs:ml-6 text-xl font-roboto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident excepturi sint, fugit adipisci ducimus ullam. Hic quisquam reprehenderit nulla excepturi doloremque repellat praesentium adipisci nesciunt, officiis fuga velit harum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam odio dolore nemo veritatis nulla est expedita delectus. Neque distinctio repellendus quaerat assumenda quos sapiente in, aperiam necessitatibus commodi labore.
              </p>0
                </div>
            <div className="flex ml-20 w-1/2 my-16">
              <img className="shadow-2xl md:mr-20 sm:mr-10 xs:mr-6 rounded-3xl sm:w-64 sm:h-64 xs:w-44 xs:h-44 md:w-96 md:h-96" src={imagem} alt="" height="400px" width="450px"/>
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
  