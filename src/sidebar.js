import react from 'react';

export default function SideBar(props) {
  return (
    <div className="flex min-h-screen">
      <aside className="bg-red-400 w-64 min-h-screen flex flex-col">
        <span className="px-3 py-5 ">
          <img className="bg-red-400" src='./logoHi.png' alt='Logo da Helpie' />
        </span>

        <div className="flex-grow">
          <nav className="px-3 text-white">
            <a href="#" className="flex items-center space-1 py-5">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span className="block py-2 px-3 font-bold rounded hover:bg-purple-500">+Cadastro</span>
            </a>

            <a href="#" className="flex items-center space-1">
              <svg  className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="block py-2 px-3 font-bold rounded hover:bg-purple-500">Cliente</p>
            </a>
          </nav>
        </div>
      </aside>
      <div className="p-10 min-h-screen">
        <h2 className="text-4xl font-bold">{props.children}</h2>
      </div>
    </div>
  )
}