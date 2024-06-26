import Link from 'next/link';
import AuthLink from '../atoms/AuthLink';
import Navigation from './navbarMobile';


const Navbar: React.FC = () => {
  const linksMapping: { [key: string]: string } = {
    home: 'Início',
    videos: 'Vídeos',
    news: 'Notícias',
    about: 'Sobre',
    // contact: 'Contato',
    
  };

  const links = Object.keys(linksMapping);
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  // const isLoggedIn = localStorage.getItem('token');
  return (
    <nav className="relative" role="navigation">
  
        <h1 style={{ fontFamily: "Libre Baskerville" }} className=" pt-8 font-serif text-5xl mb-8 text-center pr-4 text-yellow-600">
            Crer + Ser em Cristo
        </h1> 
        <div className='bg-cyan-900 h-16 lg:px-10 max-sm:p-2 max-sm:flex justify-between lg:grid grid-cols-5 gap-4'>
          <ul className="flex max-sm:hidden col-start-2 col-end-3 items-center space-x-10">
            {
              links.map((link, index) => (
              <li key={index}>
                  <Link href={linksMapping[link].toLowerCase() === 'início' ? '/' : `/${link.toLowerCase()}`}>
                      <label className="text-slate-300 pt-2 first:font-mono hover:border-t-2  border-cyan-900 cursor-pointer text-lg font-bold">{linksMapping[link]}</label>
                  </Link>
              </li>
              ))
            }
          </ul>

          <Navigation  links={links} linksMapping={linksMapping} />
          <AuthLink />
        </div>
    </nav>
  );
};

export default Navbar;