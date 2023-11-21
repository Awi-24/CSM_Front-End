import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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

function Registro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [selectedGenero, setSelectedGenero] = useState<string>("");
  const [email, setEmail] = useState("");
  const [ddd, setDDD] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [selectedPais, setSelectedPais] = useState<string>("");
  const [emailError, setEmailError] = useState("");
  const [telefoneError, setTelefoneError] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const [paisError, setPaisError] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [sobrenomeError, setSobrenomeError] = useState("");
  const [erroGeral, setErroGeral] = useState("");

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

  const handleChangeGenero = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenero(event.target.value);
  };

  const handleChangePais = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPais(event.target.value);
  };

  const isValidEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidTelefone = (telefone: string): boolean => {
    return /^\d{5}-\d{4}$/.test(telefone);
  };

  const isValidDDD = (ddd: string): boolean => {
    return /^\d{2}$/.test(ddd);
  };

  const isSenhaValida = (senha: string): boolean => {
    return senha.length >= 8;
  };

  const handleRegistro = async () => {
    // Resetar erros antes de cada validação
    setEmailError("");
    setTelefoneError("");
    setSenhaError("");
    setPaisError("");
    setNomeError("");
    setSobrenomeError("");
    setErroGeral("");

    try {
      // Verificar se os campos estão preenchidos
      if (!nome || !sobrenome || !selectedGenero || !email || !ddd || !telefone || !dataNascimento || !senha || !selectedPais) {
        setErroGeral("Preencha todos os campos.");
        return;
      }

      // Verificar o formato do e-mail
      if (!isValidEmail(email)) {
        setEmailError("E-mail inválido.");
        return;
      }

      // Verificar o formato do telefone e DDD
      if (!isValidTelefone(telefone) || !isValidDDD(ddd)) {
        setTelefoneError("Telefone ou DDD inválidos.");
        return;
      }

      // Verificar a senha
      if (!isSenhaValida(senha)) {
        setSenhaError("A senha deve ter pelo menos 8 caracteres.");
        return;
      }

      // Enviar os dados para a API
      const response = await axios.post(
        "http://localhost:3000/user",
        {
          nome,
          sobrenome,
          genero: selectedGenero,
          email,
          ddd,
          telefone,
          dataNascimento,
          senha,
          pais: selectedPais,
        }
      );

      console.log("Registro realizado com sucesso:", response.data);

      // Implemente a lógica de redirecionamento ou feedback ao usuário, se necessário
    } catch (error) {
      console.error("Erro ao realizar o registro:", error);
      setErroGeral("Erro ao realizar o registro. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="w-full bg-blue-900">
      <div className="h-screen flex flex-row">
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
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <div className="text-red-500">{nomeError}</div>
            <input
              type="text"
              name="Sobrenome"
              placeholder="Sobrenome"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
            <div className="text-red-500">{sobrenomeError}</div>
            <select
              value={selectedGenero}
              onChange={handleChangeGenero}
              className="m-2 rounded-lg bg-gray-200 hover:text-black border-2 text-gray-800 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80"
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
              name="E-mail"
              placeholder="E-mail"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-60 md:w-80`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="text-red-500">{emailError}</div>
            <input
              type="phone"
              name="DDD"
              placeholder="DDD"
              className={`m-2 rounded-lg w-16 bg-gray-200 border-2 text-sm border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600`}
              value={ddd}
              onChange={(e) => setDDD(e.target.value)}
            />
            <input
              type="phone"
              name="Telefone"
              placeholder="Telefone (00000-0000)"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <div className="text-red-500">{telefoneError}</div>
          </div>
          <div className="flex flex-wrap justify-center align-middle items-center">
            <input
              type="date"
              name="Nascimento"
              placeholder="Data de Nascimento (MM/DD/AAAA)"
              className={`m-2 rounded-lg bg-gray-200 border-2 text-gray-800 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
            <input
              type="password"
              name="Senha"
              placeholder="Senha"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <div className="text-red-500">{senhaError}</div>
            <select
              value={selectedPais}
              onChange={handleChangePais}
              className="m-2 rounded-lg bg-gray-200 hover:text-black border-2 text-gray-800 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80"
            >
              <option value="">Selecione um país</option>
              {paises.map((pais: Pais) => (
                <option key={pais.nome_pais} value={pais.nome_pais}>
                  {pais.nome_pais}
                </option>
              ))}
            </select>
            <div className="text-red-500">{paisError}</div>
          </div>

          {erroGeral && <div className="text-red-500">{erroGeral}</div>}

          <CustomButton
            text="Criar"
            buttonClassName="bg-blue-700 text-white font-roboto font-medium hover:bg-blue-300 hover:text-white mt-10 mb-10"
            textClassName=""
            onClick={handleRegistro}
          />
        </div>
      </div>
    </div>
  );
}

export default Registro;
