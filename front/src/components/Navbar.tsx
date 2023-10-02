import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosMenu, IoIosClose } from 'react-icons/io';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`flex items-center justify-between font-roboto bg-gray-900  text-white py-4 px-6 transition-all duration-300 ease-in-out ${menuOpen ? 'flex-col items-center' : ''}`}>
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-white">CSM</Link>
      </div>
      <div className={`flex flex-col items-center space-y-2 ${menuOpen ? 'mt-4' : 'mt-0'}`}>
        <button className="text-white hover:text-gray-900 hover:bg-blue-300 px-4 rounded-xl md:hidden" onClick={toggleMenu}>
          {menuOpen ? <IoIosClose className="text-xl" /> : <IoIosMenu className="text-xl" />}
        </button>
        <ul className={`flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
          <li>
            <Link to="/" className="text-white hover:text-gray-900 hover:bg-blue-300 px-5 rounded-xl hvr-grow">Inicio</Link>
          </li>
          <li>
            <Link to="/aulas" className="text-white hvr-grow hover:text-gray-900 hover:bg-blue-300 px-5 rounded-xl hvr-grow">Desenvolvimento</Link>
          </li>
          <li>
            <Link to="/voluntariado" className="text-white hover:text-gray-900 hover:bg-blue-300 px-5 rounded-xl hvr-grow">Engajamento Comunitário</Link>
          </li>
          <li className={`relative hvr-grow ${dropdownOpen ? 'mb-16' : ''}`}>
            <button className="text-white hover:text-gray-900 hover:bg-blue-300 px-4 rounded-xl" onClick={toggleDropdown}>
              Proteção
              <IoIosArrowDown className={`inline-block ml-1 ${dropdownOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <ul className="absolute top-12 left-0 w-auto bg-white text-gray-900 py-0 px-0 rounded-xl shadow-lg text-center transition-all duration-300 ease-in-out">
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
            <Link to="/conta" className="text-white md:text-center">Conta</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
