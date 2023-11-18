import React, { useState } from 'react';
import AulaForm from './AulaForm';

interface AulaBoxProps {
  nomeAula: string;
  dataUpload: string;
  linkThumbnail: string;
  linkPlaylist: string;
  linkMateriais: string;
  nomeProfessor: string;
  turma: string;
  materia: string;
  local: string;
}

function AulaBox({
  nomeAula,
  dataUpload,
  linkThumbnail,
  linkPlaylist,
  linkMateriais,
  nomeProfessor,
  turma,
  materia,
  local,
}: AulaBoxProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditFormClose = () => {
    setIsEditing(false);
  };

  const handleEditFormSave = (editedData: AulaBoxProps) => {
    // Implementar a lógica para salvar as alterações no banco de dados.
    console.log('Dados editados da aula:', editedData);
    // Aqui você deve enviar os dados para a API ou realizar a lógica necessária para salvar as alterações no banco de dados.
  };

  return (
    <div className='w-[1000px] bg-blue-200 rounded-md'>
      <div className='w-full font-normal flex flex-row justify-between align-middle items-center gap-10 p-2 font-roboto'>
        <h1>{nomeAula || 'Nome da Aula'}</h1>
        <h1>{dataUpload || 'Data de Upload'}</h1>
        <h1>{turma || 'Turma'}</h1>
        {/* Adicione os links e outras informações relacionadas à aula */}
        <div className='flex flex-row justify-around gap-4'>
          <button className='bg-blue-800 p-2 rounded-md text-white mx-2 hover:bg-blue-600' onClick={handleEdit}>
            Editar
          </button>
          {/* Adicione a lógica para excluir a aula aqui */}
          <button className='bg-red-800 p-2 rounded-md text-white mx-2 hover:bg-red-600'>Excluir</button>
        </div>
      </div>

      {isEditing && (
        <AulaForm
          onClose={handleEditFormClose}
          onSave={handleEditFormSave}
          initialData={{
            nomeAula: nomeAula || '',
            dataUpload: dataUpload || '',
            linkThumbnail: linkThumbnail || '',
            linkPlaylist: linkPlaylist || '',
            linkMateriais: linkMateriais || '',
            nomeProfessor: nomeProfessor || '',
            turma: turma || '',
            materia: materia || '',
            local: local || '',
          }}
        />
      )}
    </div>
  );
}

export default AulaBox;
