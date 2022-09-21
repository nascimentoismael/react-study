import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
      <React.Fragment>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/ListaAlunos">Alunos</Link>
                  </li>
                  <li>
                      <Link to="/ListaExercicios">Exercícios</Link>
                  </li>
                  <li>
                      <Link to="/FichasTreino">Fichas</Link>
                  </li>
              </ul>
          </nav>
          <Outlet />
      </React.Fragment>
  );
};

export default Layout;