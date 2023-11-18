import React, { useState } from 'react';

interface EditFormProps {
  onClose: () => void;
  onSave: (editedData: {
    eventName: string;
    eventDate: string;
    eventLocation: string;
    imageLink: string;
    registrationLink: string;
    eventOrganizer: string;
  }) => void;
  initialData: {
    eventName: string;
    eventDate: string;
    eventLocation: string;
    imageLink: string;
    registrationLink: string;
    eventOrganizer: string;
  };
}

function EditForm({ onClose, onSave, initialData }: EditFormProps) {
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
        <h2 className='text-2xl mb-4 font-medium'>Editar Evento</h2>
        <label htmlFor='eventName'>Nome do Evento:</label>
        <input
          type='text'
          id='eventName'
          name='eventName'
          value={editedData.eventName}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='eventDate'>Data:</label>
        <input
          type='date'
          id='eventDate'
          name='eventDate'
          value={editedData.eventDate}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='eventLocation'>Local:</label>
        <input
          type='text'
          id='eventLocation'
          name='eventLocation'
          value={editedData.eventLocation}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='imageLink'>Link da Imagem:</label>
        <input
          type='text'
          id='imageLink'
          name='imageLink'
          value={editedData.imageLink}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='registrationLink'>Link de Inscrição:</label>
        <input
          type='text'
          id='registrationLink'
          name='registrationLink'
          value={editedData.registrationLink}
          onChange={handleInputChange}
          className='w-full mb-4 rounded-md bg-gray-200 h-8 text-lg'
        />
        <label htmlFor='eventOrganizer'>Responsável pelo Evento:</label>
        <input
          type='text'
          id='eventOrganizer'
          name='eventOrganizer'
          value={editedData.eventOrganizer}
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
