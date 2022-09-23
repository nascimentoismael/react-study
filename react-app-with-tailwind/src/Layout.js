import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (<React.Fragment>
    <nav>
        <ul>
            <li class="text-base font-medium text-white hover:text-indigo-50">
                <Link to="/">Home</Link>
            </li>
            <li class="text-base font-medium text-white hover:text-indigo-50">
                <Link to="/ListaAlunos">Alunos</Link>
            </li>
            <li class="text-base font-medium text-white hover:text-indigo-50">
                <Link to="/ListaExercicios">Exercícios</Link>
            </li>
            <li class="text-base font-medium text-white hover:text-indigo-50">
                <Link to="/FichasTreino">Fichas</Link>
            </li>
        </ul>
    </nav>
    <Outlet />
  </React.Fragment>)
};

export default Layout;