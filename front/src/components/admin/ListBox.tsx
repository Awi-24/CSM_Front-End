import React, { useState } from 'react';
import EditForm from './EditForm';

interface ListBoxProps {
  eventName: string;
  eventDate: string;
  eventLocation: string;
}

interface EventData {
  eventName: string;
  eventDate: string;
  eventLocation: string;
}

function ListBox({ eventName, eventDate, eventLocation }: ListBoxProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditFormClose = () => {
    setIsEditing(false);
  };

  const handleEditFormSave = (editedData: EventData) => {
    // Implementar a lógica para salvar as alterações no banco de dados.
    console.log('Dados editados:', editedData);
    // Aqui você deve enviar os dados para a API ou realizar a lógica necessária para salvar as alterações no banco de dados.
  };

  return (
    <div className='w-[1000px] bg-blue-200 rounded-md'>
      <div className='w-full font-normal flex flex-row justify-between align-middle items-center gap-10 p-2 font-roboto'>
        <h1>{eventName || 'Nome do Evento'}</h1>
        <h1>{eventDate || 'xx/xx/xxxx'}</h1>
        <h1>{eventLocation || 'Local'}</h1>
        <div className='flex flex-row justify-around gap-4'>
          <button className='bg-blue-800 p-2 rounded-md text-white mx-2 hover:bg-blue-600' onClick={handleEdit}>
            Editar
          </button>
          {/* Adicione a lógica para excluir o evento aqui */}
          <button className='bg-red-800 p-2 rounded-md text-white mx-2 hover:bg-red-600'>Excluir</button>
        </div>
      </div>

      {isEditing && (
        <EditForm
          onClose={handleEditFormClose}
          onSave={handleEditFormSave}
          initialData={{
            eventName: eventName || '',
            eventDate: eventDate || '',
            eventLocation: eventLocation || '',
            imageLink: '', // Adicione valores padrão ou lógica apropriada para esses campos.
            registrationLink: '',
            eventOrganizer: '',
          }}
        />
      )}


    </div>
  );
}

export default ListBox;
