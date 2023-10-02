import { FunctionComponent } from 'react';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  buttonClassName?: string; // Classe CSS personalizada para o botão
  textClassName?: string;   // Classe CSS personalizada para o texto
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({ text, onClick, buttonClassName, textClassName }) => {
  return (
    <button
      className={`w-48 ${buttonClassName} py-2 px-6 rounded-md shadow-md focus:outline-none`}
      onClick={onClick}
    >
      <span className={textClassName}>{text || "Enviar"}</span>
    </button>
  );
}

export default CustomButton;
