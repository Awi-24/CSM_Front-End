import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

function Login() {
  function handleInputChange(_event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-full bg-blue-900">
      <div className="h-screen flex flex-col md:flex-row">
        {/**Imagem com texto*/}
        <div className="md:w-2/4 bg-login bg-opacity-25 bg-cover invisible md:visible h-0 md:h-screen">
          <div className="mt-20 ml-10">
            <h1 className="font-roboto font-medium text-white text-4xl w-fit text-start">
              Faça parte do nosso projeto!
            </h1>
            <p className="font-roboto md:pb-16 mt-5 align-bottom font-regular text-white text-lg w-fit text-start">
              Buscamos pessoas de todo o Brasil para ajudar e participar dessa
              iniciativa.
            </p>
          </div>
        </div>
        {/*Área de Login */}
        <div className="bg-white md:w-2/4 flex flex-col justify-center items-center align-middle md:p-0 py-72">
          <div className="font-roboto text-center text-gray-800 m-10">
            <h1 className="font-medium text-4xl m-2">Entre na sua conta</h1>
            <Link to="/conta/registro" className="text-gray-600 ">
              ou crie uma <span className="text-blue-500 hover:underline">aqui</span>
            </Link>
          </div>
          <div className="flex flex-col justify-center align-middle items-center">
            <input
              type="email"
              name="Email"
              placeholder="E-mail"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto}`}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="Senha"
              placeholder="Senha"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto}`}
              onChange={handleInputChange}
            />
            <a href="/recuperar" className="font-roboto text-sm text-gray-600 hover:underline">Esqueceu a senha?</a>
            <CustomButton
              text="Entrar"
              buttonClassName="bg-blue-700 text-white font-roboto font-medium hover:bg-blue-300 hover:text-white mt-10 mb-10"
              textClassName=""
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
