import React, { useState } from 'react';

interface EditFormProps<T> {
  onClose: () => void;
  onSave: (editedData: T) => void;
  initialData: T;
}

interface AulaBoxData {
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

function EditForm({ onClose, onSave, initialData }: EditFormProps<AulaBoxData>) {
  const [editedData, setEditedData] = useState(initialData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  return (
    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center font-roboto bg-gray-800 bg-opacity-50'>
      <div className='bg-white p-8 rounded-md w-[1010px]'>
        <h2 className='text-2xl mb-4 font-medium'>Editar Aula</h2>
        <label htmlFor='nomeAula'>Nome da Aula:</label>
        <input
          type='text'
          id='nomeAula'
          name='nomeAula'
          value={editedData.nomeAula}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='dataUpload'>Data da Aula:</label>
        <input
          type='date'
          id='dataUpload'
          name='dataUpload'
          value={editedData.dataUpload}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='turma'>Turma:</label>
        <input
          type='text'
          id='turma'
          name='turma'
          value={editedData.turma}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        {/* Adicione outros campos específicos de AulaBox aqui */}
        <label htmlFor='linkThumbnail'>Link da Imagem:</label>
        <input
          type='text'
          id='linkThumbnail'
          name='linkThumbnail'
          value={editedData.linkThumbnail}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='linkPlaylist'>Link da Playlist:</label>
        <input
          type='text'
          id='linkPlaylist'
          name='linkPlaylist'
          value={editedData.linkPlaylist}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='linkMateriais'>Link para Materiais:</label>
        <input
          type='text'
          id='linkMateriais'
          name='linkMateriais'
          value={editedData.linkMateriais}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='nomeProfessor'>Nome do Professor:</label>
        <input
          type='text'
          id='nomeProfessor'
          name='nomeProfessor'
          value={editedData.nomeProfessor}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='materia'>Matéria:</label>
        <input
          type='text'
          id='materia'
          name='materia'
          value={editedData.materia}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='local'>Local:</label>
        <input
          type='text'
          id='local'
          name='local'
          value={editedData.local}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <div className='flex justify-end'>
          <button className='bg-blue-800 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-500' onClick={handleSave}>
            Salvar
          </button>
          <button className='bg-gray-300 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white' onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
