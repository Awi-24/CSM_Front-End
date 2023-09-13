import BoxCard from "../../components/CardBox";
import video from "../../img/ratao.jpg"
import fundo_topo from "../../img/Aulas_topojpeg.jpeg"

function Aulas() {
  return (
    <>
    {/*Topo */}
      <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${fundo_topo})`, // Use a imagem importada como background
      }}
      >
        <div className="mx-52 flex flex-col justify-content align-center">

      <p className="text-3xl font-bold text-white mb-6">MEIOS</p>
      <p className="text-xl font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate. Dolores provident facere explicabo laborum corporis error totam fuga autem laboriosam itaque tenetur sunt ducimus, voluptas beatae ipsa, minus dignissimos!</p>
        </div>
      </div>


      {/* Meio */}
      <div className="bg-center bg-cover h-96 opacity-50 flex flex-row justify-center">
        <BoxCard icon={""} title={"Turmas"} text={""} link={""} />
        <BoxCard icon={""} title={"Materiais"} text={""} link={""} />
        <BoxCard icon={""} title={"Gravações"} text={""} link={""} />
      </div>

    {/* Bottom */}

    <div className="grid grid-cols-2">
      {/* Coluna 1 */}
      <div className="bg-gray-200 p-4">
        <img className="w-full object-center" src={video} alt="Video???"></img>
      </div>

      {/* Coluna 2 */}
      <div className="bg-gray-200 p-4 flex flex-col justify-center">
        <p className="text-2xl font-semibold text-gray-900 mb-4">SOBRE</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a ex asperiores reprehenderit dignissimos libero culpa quod, omnis impedit, esse obcaecati expedita quos dolore laudantium aspernatur aliquam, magnam voluptas aut!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem cumque mollitia. Laborum earum ipsum ut natus ex asperiores consequuntur sapiente, nulla iusto rerum dolores, molestias commodi non atque tenetur?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit omnis corporis ipsum recusandae eius. Deleniti obcaecati ab odit quis? Repudiandae, eveniet nobis nisi nihil beatae magni ipsum ex illum laboriosam.
        <div className="flex mt-6">
      {/* Campo de entrada (input) */}
      <input
        type="text"
        className="p-2 border rounded-l-md outline-none w-96"
        placeholder="Insira seu e-mail para receber informações"
      />

      {/* Botão */}
      <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
        Cadastre-se
      </button>
    </div>
      </div>
    </div>
    </>
  );
}

export default Aulas;
