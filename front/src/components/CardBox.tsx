import React from "react";
import { Link } from "react-router-dom";

interface BoxCardProps {
  icon: string;
  title: string;
  text: string;
  link: string;
}

const BoxCard: React.FC<BoxCardProps> = ({ icon, title, text, link }) => {
  return (
    <Link
      to={link}
      className=" bg-white xs:w-fit sm:w-fit md:w-64 rounded-lg p-4 m-4 text-center font-roboto shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
    >
      <div className="mb-4">
        <img
          src={icon || "https://via.placeholder.com/150"}
          alt="Ícone"
          className="w-24 h-24 mx-auto"
        />
      </div>
      <h2 className="font-semibold mb-2 text-xl">{title || "Titulo"}</h2>
      <p className="text-gray-700 text-sm">
        {text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed enim nisl. Textozinho finalzinho. "}
      </p>
    </Link>
  );
};

export default BoxCard;
