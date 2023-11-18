import React, { useState } from "react";
import AulasBox from "../../components/AulasBox";

function Aulas() {
  const [filtro, setFiltro] = useState("");
  const aulasData = [
    { id: 1, title: "Aula 1", turma: "Turma A", materia: "Matéria X" },
    { id: 2, title: "Aula 2", turma: "Turma B", materia: "Matéria Y" },
    { id: 3, title: "Aula 3", turma: "Turma A", materia: "Matéria Z" },
    { id: 4, title: "Aula 3", turma: "Turma A", materia: "Matéria Z" },
    { id: 5, title: "Aula 3", turma: "Turma A", materia: "Matéria Z" },
    { id: 6, title: "Aula 3", turma: "Turma A", materia: "Matéria Z" },
    // Adicione mais dados conforme necessário
  ];

  const aulasFiltradas = aulasData.filter(
    (aula) =>
      aula.title.toLowerCase().includes(filtro.toLowerCase()) ||
      aula.materia.toLowerCase().includes(filtro.toLowerCase()) ||
      aula.turma.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col items-center font-roboto ">
      {/* Aulas Recentes */}
      <div className="w-4/6 my-8">
        <h1 className="text-5xl text-white font-roboto font-medium mb-6 mt-12 text-center">
          Aulas Recentes
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-4">
          {/* Renderize as AulasBox com dados de exemplo */}
          {aulasData.map((aula) => (
            <AulasBox
              key={aula.id}
              title={aula.title}
              turma={aula.turma}
              materia={aula.materia}
            />
          ))}
        </div>
      </div>

      {/* Todas as Aulas com Filtro */}
      <div className="w-full mt-8 bg-gray-50 my-15">
        <h1 className="text-5xl font-roboto font-medium mb-6 text-center my-10">
          Todas as Aulas
        </h1>
        <div className="w-full flex flex-col items-center max-h-screen overflow-y-scroll">
          <div className="w-4/6 flex flex-col mb-4 items-center">
            <input
              type="text"
              placeholder="Filtrar por título, matéria ou turma"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="p-2 rounded-md border border-gray-300 w-96"
            />
          </div>

          {aulasFiltradas.length === 0 ? (
            <p className="text-gray-500 text-center h-screen">
              Nenhuma aula encontrada com os critérios de filtragem.
            </p>
          ) : (
            <div className="w-4/6 flex flex-wrap justify-center gap-4">
              {/* Renderize as AulasBox filtradas */}
              {aulasFiltradas.map((aula) => (
                <AulasBox
                  key={aula.id}
                  title={aula.title}
                  turma={aula.turma}
                  materia={aula.materia}
                />
              ))}
            </div>
          )}
        </div>
        <div className="h-24"></div>
      </div>
    </div>
  );
}

export default Aulas;
