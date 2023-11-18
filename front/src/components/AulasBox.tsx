import React from 'react';

interface AulasBoxProps {
  icon?: string;
  title?: string;
  turma?: string;
  materia?: string;
  professor?: string;
  data?: string;
  aulaLink?: string;
  materiaisLink?: string;
}

const AulasBox: React.FC<AulasBoxProps> = ({
  icon,
  title,
  turma,
  materia ,
  professor,
  data,
  aulaLink,
  materiaisLink,
}) => {
  return (
    <div className='bg-white w-72 h-auto rounded-md font-roboto shadow-md overflow-clip'>
      <img
        src={icon || "https://via.placeholder.com/300"}
        alt="Ícone"
        className="overflow-clip rounded-t-md"
      />
      <div className='flex flex-col ml-2 my-2'>
        <h1 className='text-2xl font-medium'>{title || "Titulo"}</h1>
        <h3 className='text-sm text-gray-400'>{`Turma: ${turma || "Turma"}`}</h3>
        <h3 className='text-sm text-gray-400'>{`Matéria: ${materia || "Matéria"}`}</h3>
        <h3 className='text-sm text-gray-400'>{`Responsável: ${professor || "Nome"}`}</h3>
        <h3 className='text-sm text-gray-400'>{`Data: ${data || "Data"}`}</h3>
        <div className='flex flex-row justify-evenly mt-2'>
          <a href={aulaLink || ''} className='bg-blue-800 text-center p-2 rounded-md text-white hover:bg-blue-600 mt-6 w-24 m-2'>
            Aula
          </a>
          <a href={materiaisLink || ''} className='bg-blue-800 text-center p-2 rounded-md text-white hover:bg-blue-600 mt-6 w-24 m-2'>
            Materiais
          </a>
        </div>
      </div>
    </div>
  );
}

export default AulasBox;
