import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

function Registro() {
  function handleInputChange(_event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-full bg-blue-900">
      <div className="h-screen flex flex-row">
        {/*Área de Login */}
        <div className="bg-white w-full flex flex-col justify-center items-center align-middle md:p-0">
          <div className="font-roboto text-center text-gray-800 m-10">
            <h1 className="font-medium text-4xl m-2">Crie a sua conta</h1>
            <p className="text-gray-600 ">
              Preencha os campos com atenção e com informações verdadeiras.
            </p>
          </div>
          <div className="flex flex-wrap justify-center align-middle items-center">
            <input
              type="text"
              name="Nome"
              placeholder="Nome"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto}`}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="Sobrenome"
              placeholder="Sobrenome"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto}`}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-wrap w-full justify-center items-center align-middle">
            <input
              type="email"
              name="E-mail"
              placeholder="E-mail"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-full}`}
              onChange={handleInputChange}
            />
            <input
              type="phone"
              name="DDD"
              placeholder="DDD"
              className={`m-2 rounded-lg bg-gray-200 border-2 text-sm border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-12 md:w-full}`}
              onChange={handleInputChange}
            />
            <input
              type="phone"
              name="Telefone"
              placeholder="Telefone (00000-0000)"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-64 md:w-full}`}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-wrap justify-center align-middle items-center">
            <input
              type="date"
              name="Nascimento"
              placeholder="Data de Nascimento (DD/MM/YYYY)"
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
          </div>
          <CustomButton
              text="Criar"
              buttonClassName="bg-blue-700 text-white font-roboto font-medium hover:bg-blue-300 hover:text-white mt-10 mb-10"
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

export default Registro;
