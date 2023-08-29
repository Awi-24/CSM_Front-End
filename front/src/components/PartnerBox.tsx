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
      className="w-64 bg-white rounded-lg p-4 m-4 text-center font-roboto shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
    >
      <div className="mb-4">
        <img
          src={icon || "https://via.placeholder.com/300"}
          alt="Ícone"
          className=""
        />
      </div>
      <h2 className="font-semibold mb-2 text-xl">{title || "Titulo"}</h2>
      <p className="text-gray-700 text-sm">
        {text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed enim nisl. Textozinho finalzinho. "}
      </p>
    </Link>
  );
};

export default PartnerBox;
