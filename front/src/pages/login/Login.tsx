import React from "react";

function Login() {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-5 h-screen">
        {/**Imagem com texto*/}
        <div className="col-span-3 w-full bg-black">
          Area 1
          <div className="me-10">
            <h1 className="font-roboto font-medium text-white text-4xl w-fit text-justify m-10">
              Faça parte do nosso projeto!
            </h1>
            <p className="font-roboto align-bottom font-regular ml-10 text-white text-lg w-fit text-justify">
              Buscamos pessoas de todo o Brasil para ajudar e participar dessa
              iniciativa.
            </p>
          </div>
        </div>
        {/*Área de Login */}
        <div className="col-span-2 bg-red-500 h-full">Area 2</div>
      </div>
    </div>
  );
}

export default Login;
