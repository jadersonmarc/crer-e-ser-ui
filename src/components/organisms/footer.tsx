import Link from 'next/link';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {

  return (
    <footer className="bg-sky-900  text-yellow-600 text-center py-4 mt-auto">    
      
      <p style={{ fontFamily: "Libre Baskerville" }} className=' font-serif text-center text-3xl'> Crer + Ser em Cristo</p>
      <ul className='flex justify-center  space-x-8 my-4'>
          <li>            
              <Link href={'/'}>
                  <FaFacebook className="text-blue-500 text-2xl hover:text-blue-600" />
              </Link>
          </li>
          <li>
              <Link href={'/'}>
                  <FaInstagram className="text-pink-500 text-2xl hover:text-pink-600" />
              </Link>
          </li>
          <li>
              <Link href={'/'}>
                  <FaYoutube className="text-red-500 text-2xl hover:text-red-600" />
              </Link>
          </li>
      </ul>
      <p className= 'font-mono text-center my-4'> Estrada das Mirindibas 12, Jardim Primavera, Duque de Caxias, Riode Janeiro</p>
  </footer>
  );
};

export default Footer;