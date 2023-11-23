import React, { useState } from 'react';
import axios from 'axios';
import {format} from 'date-fns';

interface User {
  nome: string;
  sobrenome: string;
  telefone: string;
  data_nascimento: Date;
  
  email: string;
  password: string;
  nacionalidade: string;
  genero: string;
}

const FormularioCadastro: React.FC = () => {
  const [user, setUser] = useState<User>({
    nome: '',
    sobrenome: '',
    telefone: '',
    data_nascimento: new Date(),
    email: '',
    password: '',
    nacionalidade: '',
    genero: '',
  });

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = event.target;

      const newValue = name === 'data_nascimento' ? new Date(value) : value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/user', user);
      console.log('Dados enviados com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" name="nome" value={user.nome} onChange={handleChange} />
      </label>

      <label>
        Sobrenome:
        <input type="text" name="sobrenome" value={user.sobrenome} onChange={handleChange} />
      </label>

      <label>
        Telefone:
        <input type="text" name="telefone" value={user.telefone} onChange={handleChange} />
      </label>

      <label>
        Data de Nascimento:
        <input
          type="date"
          name="data_nascimento"
          value={format(user.data_nascimento, 'yyyy-MM-dd')}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input type="text" name="email" value={user.email} onChange={handleChange} />
      </label>

      <label>
        Password:
        <input type="password" name="password" value={user.password} onChange={handleChange} />
      </label>

      <label>
        Nacionalidade:
        <select name="nacionalidade" value={user.nacionalidade} onChange={handleChange}>
          <option value="Franca">Franca</option>
          <option value="Brasil">Brasil</option>
          <option value="EUA">Estados Unidos</option>
        </select>
      </label>

      <label>
        Gênero:
        <input type="text" name="genero" value={user.genero} onChange={handleChange} />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioCadastro;
