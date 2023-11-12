import React from "react";
import { Link } from "react-router-dom";

interface PartnerBoxProps {
  icon: string;
  title: string;
  text: string;
  link: string;
}

const TeamsCard: React.FC<PartnerBoxProps> = ({ icon, title, text, link }) => {
  return (
    <Link
      to={link}
      className="md:w-fit w-72 bg-blue-200 flex flex-col sm:flex-row justify-center items-center rounded-lg m-4 text-center font-roboto shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
    >
      <div className="">
        <img
          src={icon || "https://via.placeholder.com/300"}
          alt="Ícone"
          className="overflow-clip rounded-lg sm:rounded-l-lg "
        />
      </div>
      <div className="flex flex-col text-start p-4">
        <h2 className="font-semibold mb-2 text-2xl text-black">{title || "Titulo"}</h2>
        <p className="text-gray-700 text-md text-justify">
            {text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed enim nisl. Textozinho finalzinho. "}
        </p>
      </div>

    </Link>
  );
};

export default TeamsCard;
