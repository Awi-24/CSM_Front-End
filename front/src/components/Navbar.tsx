import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between font-roboto bg-gray-900 text-white py-4 px-6">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-white">CSM</Link>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-white hover:text-gray-900 hover:bg-blue-300 px-5 rounded-xl hvr-grow">Inicio</Link>
          </li>
          <li>
            <Link to="/aulas" className="text-white hover:text-gray-900 hover:bg-blue-300 px-5 rounded-xl hvr-grow">Desenvolvimento</Link>
          </li>
          <li>
            <Link to="/voluntariado" className="text-white hover:text-gray-900 hover:bg-blue-300 px-5 rounded-xl hvr-grow">Engajamento Comunitário</Link>
          </li>
          <li className="relative">
            <button className=" text-white hover:text-gray-900 hover:bg-blue-300 px-4 rounded-xl hvr-grow" onClick={toggleDropdown}>
              Proteção
              <IoIosArrowDown className="inline-block ml-1" />
            </button>
            {dropdownOpen && (
              <ul className="absolute top-12 left-0 w-auto bg-white text-gray-900 py-0 px-0 rounded-xl shadow-lg text-center">
                <li>
                  <Link to="/juridico" className="block px-6 py-2 hover:bg-blue-300 rounded-t-xl rounded-b-none">Juridica</Link>
                </li>
                <li>
                  <Link to="/psico-social" className="block px-6 py-2 hover:bg-blue-300 rounded-b-xl">Psicosocial</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/conta" className="text-white">Conta</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
