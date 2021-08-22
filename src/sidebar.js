import react from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Cadastro</h2>
  },

  {
    path: "/client",
    main: () => <h2>Cliente</h2>
  }
]
export default function SideBar(props) {
  return (
    <Router>

      <div className="flex min-h-screen">
        <div className="bg-red-400 w-64 min-h-screen flex flex-col">
          <span className="px-10 py-3 ">
            <img className="bg-red-400" src='./logoHi.png' alt='Logo da Helpie' />
          </span>

          <div className="flex-grow px-10">
            <nav className="px-3 text-white">
              <Link to="/" className="flex items-center space-1 py-5">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span className="block py-2 px-3 font-bold rounded hover:bg-purple-500">+Cadastro</span>
              </Link>

              <Link to="./cliente" className="flex items-center space-1">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="block py-2 px-3 font-bold rounded hover:bg-purple-500">Cliente</p>
              </Link>
            </nav>

          </div>
        </div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
        <div className="p-5">
          <h2 className="text-4xl font-bold">{props.children}</h2>
        </div>
      </div>
    </Router>
  )
}