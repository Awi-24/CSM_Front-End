import React, { useState } from "react";
import ListBox from "../../components/admin/ListBox";
import AulaBox from "../../components/admin/AulaBox";
import EditForm from "../../components/admin/EditForm";
import AulaForm from "../../components/admin/AulaForm";

function Admin() {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isAulaFormVisible, setIsAulaFormVisible] = useState(false);
  const [editFormData, setEditFormData] = useState<any>(null);

  const handleAddEventoClick = () => {
    setIsEditFormVisible(true);
    setEditFormData(null);
  };

  const handleAddAulaClick = () => {
    setIsAulaFormVisible(true);
    setEditFormData(null);
  };

  const handleEditFormClose = () => {
    setIsEditFormVisible(false);
  };

  const handleAulaFormClose = () => {
    setIsAulaFormVisible(false);
  };

  const handleEditFormSave = (editedData: any) => {
    // Lógica para salvar os dados do evento aqui
    console.log("Dados editados do evento:", editedData);
    setIsEditFormVisible(false);
  };

  const handleAulaFormSave = (editedData: any) => {
    // Lógica para salvar os dados da aula aqui
    console.log("Dados editados da aula:", editedData);
    setIsAulaFormVisible(false);
  };

  function GerarPlanilhaExcel(
    event: MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-full bg-slate-200 h-screen flex flex-col justify-center align-middle items-center">
      {/* ... (seu código existente) */}
      <div className="flex flex-col justify-center items-center align-middle">
        <h1 className="text-5xl font-roboto font-medium mb-4 mt-10">
          Menu de Administração
        </h1>
        <p className="font-roboto text-md text-blue-500">
          Recomenda-se usar um navegador em um computador para realizar edições
          no site.
        </p>
      </div>
      {/* EVENTOS */}
      <div className="flex flex-col justify-center align-middle items-start h-96">
        <h1 className="text-2xl py-5 text-gray-900 font-normal">
          LISTA DE EVENTOS
        </h1>
        <div className="flex flex-col justify-between gap-2 overflow-y-auto">
          <ListBox eventName={""} eventDate={""} eventLocation={""} />
          <ListBox eventName={""} eventDate={""} eventLocation={""} />
          <ListBox eventName={""} eventDate={""} eventLocation={""} />
        </div>
        <div className="flex flex-row justify-center align-middle items-center">
          {/* Criar um add form */}
          <button
            className="bg-blue-800 p-2 rounded-md text-white hover:bg-blue-600 mt-10 w-52"
            onClick={handleAddEventoClick}
          >
            Adicionar Evento
          </button>
        </div>
      </div>

      {/* AULAS */}
      <div className="flex flex-col justify-center align-middle items-start text-center h-96">
        <h1 className="text-2xl py-5 text-gray-900 font-normal">
          LISTA DE AULAS
        </h1>
        <div className="flex flex-col justify-between gap-2 overflow-y-auto">
          <AulaBox
            nomeAula={"Português"}
            dataUpload={"15/02/2009"}
            linkThumbnail={""}
            linkPlaylist={""}
            linkMateriais={""}
            nomeProfessor={""}
            turma={"BA1"}
            materia={""}
            local={""}
          />
        </div>
        <div className="flex flex-row justify-center align-middle items-center">
          {/* Criar um add form */}
          <button
            className="bg-blue-800 p-2 rounded-md text-white hover:bg-blue-600 mt-10 w-52"
            onClick={handleAddAulaClick}
          >
            Adicionar Aula
          </button>
        </div>
      </div>

      {isEditFormVisible && (
        <EditForm
          onClose={handleEditFormClose}
          onSave={handleEditFormSave}
          initialData={
            editFormData || {
              eventName: "",
              eventDate: "",
              eventLocation: "",
              imageLink: "",
              registrationLink: "",
              eventOrganizer: "",
            }
          }
        />
      )}

      {isAulaFormVisible && (
        <AulaForm
          onClose={handleAulaFormClose}
          onSave={handleAulaFormSave}
          initialData={
            editFormData || {
              nomeAula: "",
              dataUpload: "",
              linkThumbnail: "",
              linkPlaylist: "",
              linkMateriais: "",
              nomeProfessor: "",
              turma: "",
              materia: "",
              local: "",
            }
          }
        />
      )}
      {/*EXPORTAR LISTA DE USUÁRIOS*/}
      <div className="flex flex-col justify-between align-middle items-center gap-4 my-10 font-roboto">
        <h1 className="text-2xl py-5 text-gray-900 font-normal">
          FUNÇÕES EXTRAS
        </h1>
        <div className="flex flex-row justify-between gap-4 align-middle">
          <div className="flex flex-col justify-center align-middle items-center">
            <p className="m-4"> Baixar relação de usuários.</p>
            <button
              className="bg-green-800 p-2 rounded-md text-white hover:bg-green-600 w-24"
              onClick={GerarPlanilhaExcel}
            >
              {" "}
              Baixar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
