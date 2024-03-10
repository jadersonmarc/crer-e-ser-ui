import Link from 'next/link';

const Navbar: React.FC = () => {
  const linksMapping: { [key: string]: string } = {
    home: 'Início',
    videos: 'Vídeos',
    news: 'Notícias',
    about: 'Sobre',
    contact: 'Contato',
    institute: 'Instituto'
  };

  const links = Object.keys(linksMapping);

  return (
    <nav className="mt-8" role="navigation">
  
      <div className="mb-8">
          <h1 style={{ fontFamily: "Libre Baskerville" }} className="font-serif text-5xl  text-center text-yellow-600">
              Crer + Ser em Cristo
          </h1>
      </div>
      
        <ul className="flex mt-8 justify-center space-x-10">
        {
            links.map((link, index) => (
            <li key={index}>
                <Link href={linksMapping[link].toLowerCase() === 'início' ? '/' : `/${link.toLowerCase()}`}>
                    <label className="text-cyan-900 pt-2 first:font-mono hover:border-t-2  border-cyan-900 cursor-pointer text-lg font-bold">{linksMapping[link]}</label>
                </Link>
            </li>
            ))
        }
        </ul>
    </nav>
  );
};

export default Navbar;