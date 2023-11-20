import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Use useNavigate em vez de useHistory
import axios from "axios";
import CustomButton from "../../components/CustomButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    if (name === "Email") {
      setEmail(value);
    } else if (name === "Senha") {
      setPassword(value);
    }
  }

  async function handleLogin(): Promise<void> {
    try {
      const response = await axios.post(
        "sua-url-da-api/login",
        { email, password }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);

      if (response.data.accountExists) {
        navigate("/usuario");  // Use navigate para redirecionar
      } else {
        console.log("Conta não encontrada.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <div className="w-full bg-blue-900">
      <div className="h-screen flex flex-col md:flex-row">
        <div className="md:w-2/4 bg-login bg-opacity-25 bg-cover invisible md:visible h-0 md:h-screen">
          <div className="mt-20 ml-10">
            <h1 className="font-roboto font-medium text-white text-4xl w-fit text-start">
              Faça parte do nosso projeto!
            </h1>
            <p className="font-roboto md:pb-16 mt-5 align-bottom font-regular text-white text-lg w-fit text-start">
              Buscamos pessoas de todo o Brasil para ajudar e participar dessa iniciativa.
            </p>
          </div>
        </div>
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
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="Senha"
              placeholder="Senha"
              className={`m-2 rounded-lg bg-gray-200 border-2 border-gray-200 p-2 focus:border-blue-700 focus:ring-blue-600 w-80 md:w-auto}`}
              value={password}
              onChange={handleInputChange}
            />
            <a href="/recuperar" className="font-roboto text-sm text-gray-600 hover:underline">Esqueceu a senha?</a>
            <CustomButton
              text="Entrar"
              buttonClassName="bg-blue-700 text-white font-roboto font-medium hover:bg-blue-300 hover:text-white mt-10 mb-10"
              textClassName=""
              onClick={handleLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
