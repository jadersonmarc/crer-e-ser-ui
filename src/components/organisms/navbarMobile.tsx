import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones para abrir/fechar o menu
import Link from 'next/link';

const MobileMenu = ({ links, linksMapping }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Controla o estado do menu

  // Alterna entre aberto e fechado
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=" "> {/* Estilos do container do menu */}
      
      <button
        className="block md:hidden text-white p-4  w-10 h-10" // Visível apenas em dispositivos móveis
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Alterna entre ícones de abrir/fechar */}
      </button>

      {/* Menu de navegação */}
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } block md:hidden flex absolute z-20 flex-col md:flex-r text-center items-center bg-sky-900 px-3`} // Controla visibilidade com base no estado do menu
      >
        {links.map((link, index) => (
          <li key={index} className="my-4 md:my-0"> {/* Espaçamento para links em dispositivos móveis */}
            <Link
              href={
                linksMapping[link].toLowerCase() === 'início' ? '/' : `/${link.toLowerCase()}`
              }
            >
              <span
                className="text-slate-300 hover:border-t-2 border-cyan-900 cursor-pointer text-lg font-bold"
              >
                {linksMapping[link]} {/* Texto do link */}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
