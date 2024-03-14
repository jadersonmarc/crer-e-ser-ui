import Link from 'next/link';

const AuthLink: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  const isLoggedIn = localStorage.getItem('token');
  return (
        <div className='col-start-5 col-span-2 flex items-center'>
          {isLoggedIn ? (
                <Link  href="/" passHref className='cursor-pointer justify-between flex items-center space-x-6'>
                <svg onClick={handleLogout} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-slate-300 w-10 h-10 mb-">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                <label 
                onClick={handleLogout}
                className="
                    text-center
                text-slate-300
                    font-mono
                    hover:border-t-2
                    border-cyan-900
                    cursor-pointer
                    text-lg 
                    font-bold"
                    >Sair
                </label>
                </Link>
            ) : (
                <Link href="/auth" className='cursor-pointer justify-between flex items-center space-x-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-slate-300 w-10 h-10 mb-">
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
             )}
        </div>
  )
};

export default AuthLink;