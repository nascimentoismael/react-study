import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaAlunos from './ListaAlunos';
import Layout from './Layout';
import Home from './Home';
import NotFound from './NotFound';
import EditarAluno from './EditarAluno';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='*' element={<NotFound />} />
        <Route index element={<Home />}></Route>
        <Route path='ListaAlunos' element={<ListaAlunos />}></Route>
        <Route path='ListaAlunos/edit/:id' exact element={<EditarAluno />}></Route>
      </Routes>
    </BrowserRouter>
  );
};


const root = createRoot(document.querySelector("#root"));
root.render(<App/>);