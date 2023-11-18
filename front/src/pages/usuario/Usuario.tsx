import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import paisesData from "../json/Countries.json";

interface Pais {
  gentilico: string;
  nome_pais: string;
  nome_pais_int: string;
  sigla: string;
}

interface Genero {
  id: number;
  nome: string;
}

function Usuario() {
  const [selectedPais, setSelectedPais] = useState<string>("");
  const [selectedGenero, setSelectedGenero] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [usuarioData, setUsuarioData] = useState({
    nome: "Nome do Usuário",
    sobrenome: "Sobrenome do Usuário",
    genero: "Masculino",
    email: "usuario@example.com",
    ddd: "11",
    telefone: "123456789",
    nascimento: "1990-01-01",
    senha: "senha123",
    pais: "Brasil",
    rne: "123456789",
    cpf: "123.456.789-09",
    rg: "1234567",
    logradouro: "Rua Exemplo, 123",
  });

  const paises: Pais[] = paisesData;

  const generos: Genero[] = [
    { id: 1, nome: "Masculino" },
    { id: 2, nome: "Feminino" },
    { id: 3, nome: 'Não binário' },
    { id: 4, nome: 'Agênero' },
    { id: 5, nome: 'Bigênero' },
    { id: 6, nome: 'Gênero fluido' },
    { id: 7, nome: 'Outro' },
  ];

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Implemente a lógica para salvar as alterações no banco de dados
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuarioData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUsuarioData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full bg-blue-900">
      <div className="h-full flex flex-row ">
        <div className="bg-white w-full flex flex-col justify-center items-center align-middle md:p-0">
          <div></div>
          <div className="font-roboto text-center text-gray-800 m-10">
            <h1 className="font-medium text-4xl m-2">
              {usuarioData.nome} {usuarioData.sobrenome}
            </h1>
            <p className="text-gray-600">Edite as suas informações abaixo:</p>
          </div>

          <div className="flex flex-wrap justify-center align-middle items-center">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={usuarioData.nome}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <input
              type="text"
              name="sobrenome"
              placeholder="Sobrenome"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={usuarioData.sobrenome}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <select
              name="genero"
              value={usuarioData.genero}
              onChange={(e) => handleSelectChange(e)}
              className="m-2 rounded-lg bg-gray-200 hover:text-black border-2 text-gray-800 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80"
              disabled={!isEditing}
            >
              <option value="">Selecione um gênero</option>
              {generos.map((genero: Genero) => (
                <option key={genero.id} value={genero.nome}>
                  {genero.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap justify-center align-middle items-center">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-60 md:w-80`}
              value={usuarioData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <input
              type="phone"
              name="ddd"
              placeholder="DDD"
              className={`m-2 rounded-lg w-16 bg-gray-200 border-2 text-sm border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600`}
              value={usuarioData.ddd}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <input
              type="phone"
              name="telefone"
              placeholder="Telefone (00000-0000)"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={usuarioData.telefone}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>

          <div className="flex flex-wrap justify-center align-middle items-center">
            <input
              type="date"
              name="nascimento"
              placeholder="Data de Nascimento (MM/DD/AAAA)"
              className={`m-2 rounded-lg bg-gray-200 border-2 text-gray-800 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={usuarioData.nascimento}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={usuarioData.senha}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <select
              name="pais"
              value={usuarioData.pais}
              onChange={(e) => handleSelectChange(e)}
              className="m-2 rounded-lg bg-gray-200 hover:text-black border-2 text-gray-800 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80"
              disabled={!isEditing}
            >
              <option value="">Selecione um país</option>
              {paises.map((pais: Pais) => (
                <option key={pais.nome_pais} value={pais.nome_pais}>
                  {pais.nome_pais}
                </option>
              ))}
            </select>
          </div>

          {/* Novos Campos Adicionados */}
          <div className="flex flex-wrap justify-center align-middle items-center">
            <input
              type="text"
              name="rne"
              placeholder="RNE"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={usuarioData.rne}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={usuarioData.cpf}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <input
              type="text"
              name="rg"
              placeholder="RG"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={usuarioData.rg}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <input
              type="text"
              name="logradouro"
              placeholder="Logradouro"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={usuarioData.logradouro}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>

          {isEditing ? (
            <CustomButton
              text="Salvar"
              buttonClassName="bg-green-500 text-white font-roboto font-medium hover:bg-green-300 hover:text-white mt-10 mb-4"
              textClassName=""
              onClick={handleSaveClick}
            />
          ) : (
            <CustomButton
              text="Editar"
              buttonClassName="bg-blue-700 text-white font-roboto font-medium hover:bg-blue-300 hover:text-white mt-10 mb-4"
              textClassName=""
              onClick={handleEditClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Usuario;
