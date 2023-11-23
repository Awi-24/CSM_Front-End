import React, { ChangeEvent, useState } from "react";
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

const Registro: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [data_nascimento, setDataNascimento] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setSenha] = useState<string>('');
  const [nacionalidade, setNacionalidade] = useState<string>('');
  const [genero, setGenero] = useState<string>('');
  const [erroGeral, setErroGeral] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [telefoneError, setTelefoneError] = useState<string | null>(null);
  const [senhaError, setSenhaError] = useState<string | null>(null);
  const [paisError, setPaisError] = useState<string | null>(null);

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
    setGenero(event.target.value);
  };

  const handleChangePais = (event: ChangeEvent<HTMLSelectElement>) => {
    setNacionalidade(event.target.value);
  };

  const isValidEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidTelefone = (telefone: string): boolean => {
    return /^\d{5}-\d{4}$/.test(telefone);
  };

  const isSenhaValida = (senha: string): boolean => {
    return senha.length >= 8;
  };

  const handleRegistro = async () => {
    try {
      // Verificar se os campos estão preenchidos
      if (!nome || !sobrenome || !genero || !email || !telefone || !data_nascimento || !password || !nacionalidade) {
        setErroGeral("Preencha todos os campos.");
        return;
      }

      // Verificar o formato do e-mail
      if (!isValidEmail(email)) {
        setEmailError("E-mail inválido.");
        return;
      }

      // Verificar o formato do telefone e DDD
      if (!isValidTelefone(telefone)) {
        setTelefoneError("Telefone ou DDD inválidos.");
        return;
      }

      // Verificar a senha
      if (!isSenhaValida(password)) {
        setSenhaError("A senha deve ter pelo menos 8 caracteres.");
        return;
      }

      console.log({nome, sobrenome, telefone, email, password, data_nascimento, genero, nacionalidade});
      
      // Enviar os dados para a API
      const response = await axios.post(
        "http://localhost:3000/user",
        {
          nome,
          sobrenome,
          genero,
          email,
          telefone,
          data_nascimento,
          password,
          nacionalidade,
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
            <div className="text-red-500"></div>
            <input
              type="text"
              name="Sobrenome"
              placeholder="Sobrenome"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
            <div className="text-red-500"></div>
            <select
              value={genero}
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
              type="ddd"
              name="DDD"
              placeholder="DDD (11)"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              /* value={ddd} */
              /* onChange={(e) => setDDD(e.target.value)} */
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
              value={data_nascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
            <input
              type="password"
              name="Senha"
              placeholder="Senha"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto`}
              value={password}
              onChange={(e) => setSenha(e.target.value)}
            />
            <div className="text-red-500">{senhaError}</div>
            <select
              value={nacionalidade}
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
