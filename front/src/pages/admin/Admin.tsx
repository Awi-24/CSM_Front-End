import React from "react";
import ListBox from "../../components/admin/ListBox";

function Admin() {
  return (
    <div className="w-full bg-slate-200 h-full flex flex-col justify-center align-middle items-center">
      <div className="flex flex-col text-center font-roboto text-gray-900 p-5">
        <h1 className="text-4xl font-semibold mt-4">ADMINISTRAÇÃO</h1>
        <p className="text-md text-blue-500">
          É recomendado que você utilize um navegador no computador para fazer
          alterações no site.
        </p>
      </div>
      {/* EVENTOS */}
      <div className="flex flex-col justify-center align-middle items-start h-96">
        <h1 className="text-2xl py-5 text-gray-900 font-normal">LISTA DE EVENTOS</h1>
        <div className="flex flex-col justify-between gap-2  overflow-y-auto">
          <ListBox eventName={""} eventDate={""} eventLocation={""} />
          <ListBox eventName={""} eventDate={""} eventLocation={""} />
          <ListBox eventName={""} eventDate={""} eventLocation={""} />
        </div>
      </div>

      {/* AULAS */}
      <div className="flex flex-col justify-center align-middle items-start text-center h-96">
        <h1 className="text-2xl py-5 text-gray-900 font-normal">LISTA DE AULAS (PLAYLISTS)</h1>
        <div className="flex flex-col justify-between gap-2  overflow-y-auto">
          <ListBox eventName={"Gramática"} eventDate={""} eventLocation={" "} />
          <ListBox eventName={""} eventDate={""} eventLocation={""} />
          <ListBox eventName={""} eventDate={""} eventLocation={""} />
        </div>
      </div>

      {/* CONTAS */}
      <div></div>
    </div>
  );
}

export default Admin;
