import peixe from "../img/card-top.jpg";

function Card() {
  return (
    <div className="flex justify-center my-16">
      <div className=" w-52 h-80 overflow-hidden mx-5">
        <div className="flex flex-col bg-gray-200 border-black rounded-lg shadow-lg shadow-gray-700">
          <img className="w-full h-40 object-center" src={peixe} alt="card"></img>

          <div className=" bg-gray-100 rounded-b-lg">
            <div className="pr-3 pl-3 py-4">
              <p className="font-semibold text-xl text-gray-800">
                
                Turmas
              </p>
              <p className="break-words text-md text-gray-800">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <p className="mt-2 text-sm text-blue-600">SAIBA MAIS</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-52 overflow-hidden mx-5">
        <div className="h-80 flex flex-col bg-gray-100 border-black rounded-lg shadow-lg shadow-gray-700">
          <img className="w-full h-40 object-center" src={peixe} alt="card"></img>

          <div className=" bg-gray-100 rounded-b-lg">
            <div className="pr-3 pl-3 py-4">
              <p className="font-semibold text-xl text-gray-800">
                
                Materiais
              </p>
              <p className="break-words text-md text-gray-800">aaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <p className="mt-2 text-sm text-blue-600">SAIBA MAIS</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-52 h-80 overflow-hidden mx-5">
        <div className="flex flex-col bg-gray-200 border-black rounded-lg shadow-lg shadow-gray-700">
          <img className="w-full h-40 object-center" src={peixe} alt="card"></img>

          <div className=" bg-gray-100 rounded-b-lg">
            <div className="pr-3 pl-3 py-4">
              <p className="font-semibold text-xl text-gray-800">
                
                Gravações
              </p>
              <p className="break-words text-md text-gray-800">aaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbb</p>
              <p className="mt-2 text-sm text-blue-600">SAIBA MAIS</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Card;
