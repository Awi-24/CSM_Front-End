import React, { FC } from "react";

interface PresentationProps {
  title: string; // Título da apresentação
  text: string; // Texto da apresentação
}

const Presentation: FC<PresentationProps> = ({ title, text }) => {
  return (
    <div className="text-center md:w-4/6  max-w-4xl">
      <h1 className="font-roboto font-medium text-white text-4xl md:text-5xl text-center">{title || "Titulo"}</h1>
      <p className="font-roboto font-normal text-white text-lg m-4 text-justify">
        {text ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio eget vestibulum. Vivamus condimentum ante in mi blandit, a lacinia ex dignissim. Fusce cursus quam eget sem laoreet, non feugiat dui vestibulum."}
      </p>
    </div>
  );
};

export default Presentation;
