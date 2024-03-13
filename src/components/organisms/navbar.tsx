import Link from 'next/link';

const Navbar: React.FC = () => {
  const linksMapping: { [key: string]: string } = {
    home: 'Início',
    videos: 'Vídeos',
    news: 'Notícias',
    about: 'Sobre',
    contact: 'Contato',
    
  };

  const links = Object.keys(linksMapping);

  return (
    <nav className="mt-8" role="navigation">
  
        <h1 style={{ fontFamily: "Libre Baskerville" }} className="font-serif text-5xl mb-8 text-center pr-4 text-yellow-600">
            Crer + Ser em Cristo
        </h1> 
        <div className='bg-cyan-900 h-16 px-10 grid grid-cols-5 gap-4'>
          <ul className="flex  col-start-2 col-end-3 items-center space-x-10">
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
          <div className='col-start-5 col-span-2 flex items-center'>
            <Link href="/auth" className='cursor-pointer justify-between flex items-center space-x-6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-slate-300 w-10 h-10 mb-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

              <label className="
                text-center
              text-slate-300
                font-mono
                hover:border-t-2
                border-cyan-900
                cursor-pointer
                text-lg 
                font-bold"
                >Entrar
               </label>
            </Link>
          </div>

        </div>

        
    </nav>
  );
};

export default Navbar;