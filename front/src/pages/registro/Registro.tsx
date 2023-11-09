import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import paisesData from "../json/Countries.json";

interface Pais {
  gentilico: string;
  nome_pais: string;
  nome_pais_int: string;
  sigla: string;
}

function Registro() {
  const [selectedPais, setSelectedPais] = useState<string>("");

  const paises: Pais[] = paisesData; // Use o JSON diretamente como um array de objetos do tipo Pais.

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPais(event.target.value);
  };

  return (
    <div className="w-full bg-blue-900">
      <div className="h-screen flex flex-row ">
        {/* Área de Registro */}
        <div className="bg-white w-full flex flex-col justify-center items-center align-middle md:p-0">
          <div></div>
          <div className="font-roboto text-center text-gray-800 m-10">
            <h1 className="font-medium text-4xl m-2">Crie a sua conta</h1>
            <p className="text-gray-600">
              Preencha os campos com atenção e com informações verdadeiras.
            </p>
          </div>
          <div className="flex flex-wrap justify-center align-middle items-center">
            <input
              type="text"
              name="Nome"
              placeholder="Nome"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
            />
            <input
              type="text"
              name="Sobrenome"
              placeholder="Sobrenome"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
            />
          </div>
          <div className="flex flex-wrap justify-center items-center align-middle">
            <input
              type="email"
              name="E-mail"
              placeholder="E-mail"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-60 md:w-80`}
            />
            <input
              type="phone"
              name="DDD"
              placeholder="DDD"
              className={`m-2 rounded-lg w-16 bg-gray-200 border-2 text-sm border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600`}
            />
            <input
              type="phone"
              name="Telefone"
              placeholder="Telefone (00000-0000)"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
            />
          </div>
          <div className="flex flex-wrap justify-center align-middle items-center">
            <input
              type="date"
              name="Nascimento"
              placeholder="Data de Nascimento (DD/MM/YYYY)"
              className={`m-2 rounded-lg bg-gray-200 border-2 text-gray-400 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
            />
            <input
              type="password"
              name="Senha"
              placeholder="Senha"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
            />
            <select
              value={selectedPais}
              onChange={handleChange}
              className="m-2 rounded-lg bg-gray-200 hover:text-black border-2 text-gray-400 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80"
            >
              <option value="" className="">Selecione um país</option>
              {paises.map((pais: Pais) => (
                <option key={pais.nome_pais} value={pais.nome_pais} >
                  {pais.nome_pais}
                </option>
              ))}
            </select>
          </div>

          <CustomButton
            text="Criar"
            buttonClassName="bg-blue-700 text-white font-roboto font-medium hover:bg-blue-300 hover:text-white mt-10 mb-10"
            textClassName=""
            onClick={() => {
              // Implemente a lógica para criar a conta
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Registro;
