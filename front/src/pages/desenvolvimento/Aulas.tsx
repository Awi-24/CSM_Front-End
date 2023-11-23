import React, { useState, useEffect } from "react";
import axios from "axios";
import AulasBox from "../../components/AulasBox";
import AulaBox from '../../components/admin/AulaBox';

function Aulas() {
  const [filtro, setFiltro] = useState("");
  const [aulasData, setAulasData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5555/api/get-aulas-data");
        setAulasData(response.data);
      } catch (error) {
        console.error("Erro ao obter dados do backend:", error);
      }
    };

    fetchData();
  }, []);

  const aulasFiltradas = aulasData.filter(
    (aula) =>
      aula.title.toLowerCase().includes(filtro.toLowerCase()) ||
      aula.materia.toLowerCase().includes(filtro.toLowerCase()) ||
      aula.turma.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col items-center font-roboto">
      {/* Aulas Recentes */}
      <div className="w-4/6 my-8">
        <h1 className="text-5xl text-white font-roboto font-medium mb-6 mt-12 text-center">
          Aulas Recentes
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-4">
{/*           {aulasData.map((aula) => (
            <AulasBox
              key={aula.id}
              title={aula.title}
              turma={aula.turma}
              materia={aula.materia}
            />
          ))} */}
          <AulasBox title="Pronomes" turma="PTG231" materia="Gramática" data="32/13/2023" professor="Fulano" />
          <AulasBox title="Vocabulário I" turma="PTG233" materia="Língua Portuguesa" data="23/12/2023" professor="Beltrano" />
          <AulasBox title="Vocabulário II" turma="PTG233" materia="Língua Portuguesa" data="23/12/2023" professor="Beltrano" />
          <AulasBox title="Ortografia" turma="PTG234" materia="Gramática" data="23/12/2023" professor="Doutor Silva" />



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
              className="p-2 mt-2 rounded-md border border-gray-300 w-96"
            />
          </div>

          {aulasFiltradas.length === 0 ? (
            <p className="text-gray-500 text-center h-screen">
              Nenhuma aula encontrada com os critérios de filtragem.
            </p>
          ) : (
            <div className="w-4/6 flex flex-wrap justify-center gap-4">
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
