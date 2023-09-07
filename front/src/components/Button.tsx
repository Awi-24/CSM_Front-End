import { FunctionComponent } from 'react';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-800 font-roboto font-medium hover:bg-blue-700 text-white  py-2 px-6 rounded-md shadow-md focus:outline-none"
      onClick={onClick}
    >
      {text || "Enviar"}
    </button>
  );
}

export default CustomButton;
