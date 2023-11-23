import React from "react";
import { Link } from "react-router-dom";

interface PartnerBoxProps {
  icon: string;
  title: string;
  text: string;
  link: string;
}

const PartnerBox: React.FC<PartnerBoxProps> = ({ icon, title, text, link }) => {
  return (
    <Link
      to={link}
      className="w-72 bg-white flex flex-col justify-center items-center rounded-lg m-4 text-center font-roboto shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
    >
      <div className="mb-4">
        <img
          src={icon || "https://via.placeholder.com/300"}
          alt="Ícone"
          className="overflow-clip rounded-t-lg h-72 w-full"
        />
      </div>
      <h2 className="font-semibold mb-2 text-xl">{title || "Titulo"}</h2>
      <p className="text-gray-700 p-4 text-sm text-justify">
        {text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed enim nisl. Textozinho finalzinho. "}
      </p>
    </Link>
  );
};

export default PartnerBox;
