import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
  return (
    <section>
      <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}
          <img src="./public/logo-removebg.png" alt='logo'/>
          <span class="ml-3 text-xl">Sua Academia</span>
        {/* </a> */}
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
        <div>
        <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="../public/pesos-unsplash.jpg" />
              <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">Sua Academia</span>
                <span class="block text-indigo-200">Fique forte ou morra frango</span>
              </h1>
              <p class="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">Aqui você consegue, senão, desista.</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    </section>
    );
};

export default Home;