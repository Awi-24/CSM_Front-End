import CustomButton from "../../components/CustomButton";
import imagem from "../../img/gps.png"

import SwiperCard from "../../components/SwiperCard";
import Carousel from "react-material-ui-carousel";


const eventsData = [
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1696446702218-3c68e12da5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Explicação de Lorem Ipsum",
    paragraph:
      "qro saber d prr nhuma",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Teste 2",
    paragraph: "Dança gatinho dança.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    backgroundImage:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Teste 3",
    paragraph: "Descrição do Evento 3",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

function Juridico() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="">
        <p>aaa</p>
      </div>
      <div className="bg-white py-10">
        <p className="text-4xl font-semibold font-roboto text-center">Atendimento Presencial</p>
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
      <div className="inferior">
        <div>
            <p className="flex flex-col text-white text-center font-roboto text-2xl font-medium md:pt-20 sm:pt-14 xs:pt-8">Guia de Documentações</p>
            <p className="text-justify text-white py-8 xs:px-8 sm:px-12 md:px-36">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat necessitatibus nulla dolorum, libero ullam eum cumque odio facilis illo exercitationem fugit repellendus incidunt, laboriosam, adipisci ex magni est. Deleniti, ullam?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem autem delectus voluptatem libero asperiores dolor veritatis, ratione nulla maxime sapiente! Eaque praesentium optio sint quae ipsam? Reprehenderit assumenda ipsam distinctio!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro tempora molestiae ad, fuga nam repellat velit minus inventore repudiandae harum ipsum ea! Excepturi praesentium sed laudantium eligendi doloremque! Cumque, quo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime nobis eos nostrum inventore quos eaque sit, voluptatibus debitis quidem culpa suscipit quo consectetur animi doloremque voluptates, laudantium autem cupiditate.
            </p>
        </div>
        <div className="flex flex-col">
          <div className="px-32">
        <Carousel>
          {eventsData.map((event, index) => (
            <SwiperCard
            key={index}
            backgroundImage={event.backgroundImage}
            title={event.title}
            paragraph={event.paragraph}
            link={event.link}
            />
            ))}
        </Carousel>
            </div>
        </div>
        <div>

        </div>
        <p className="flex flex-col text-white text-center font-roboto text-2xl font-medium pt-6">Regulamentação</p>
            <p className="text-justify text-white pt-8 md:pb-28 sm:pb-10 xs:pb-8 xs:px-8 sm:px-12 md:px-36">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat necessitatibus nulla dolorum, libero ullam eum cumque odio facilis illo exercitationem fugit repellendus incidunt, laboriosam, adipisci ex magni est. Deleniti, ullam?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem autem delectus voluptatem libero asperiores dolor veritatis, ratione nulla maxime sapiente! Eaque praesentium optio sint quae ipsam? Reprehenderit assumenda ipsam distinctio!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro tempora molestiae ad, fuga nam repellat velit minus inventore repudiandae harum ipsum ea! Excepturi praesentium sed laudantium eligendi doloremque! Cumque, quo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime nobis eos nostrum inventore quos eaque sit, voluptatibus debitis quidem culpa suscipit quo consectetur animi doloremque voluptates, laudantium autem cupiditate.
            </p>
      </div>
    </>
  );
}

export default Juridico;
