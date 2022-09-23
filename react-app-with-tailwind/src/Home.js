import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
  return (
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="./public/logo-removebg.png"/>
        <span class="ml-3 text-xl">Sua Academia</span>
      </a>
      <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <React.Fragment>
            <nav>
              <button class="mr-5 hover:text-gray-900">
                <Link to="/">Home</Link>
              </button>
              <button class="mr-5 hover:text-gray-900">
                <Link to="/ListaAlunos">Alunos</Link>
              </button>
              <button class="mr-5 hover:text-gray-900">
                <Link to="/ListaExercicios">Exercícios</Link>
              </button>
              <button class="mr-5 hover:text-gray-900">
                <Link to="/FichasTreino">Fichas</Link>
              </button>
            </nav>
            <Outlet />
          </React.Fragment>
      </div>
    </div>
  </header>
    );
};

export default Home;