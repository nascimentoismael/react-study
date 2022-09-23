import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Outlet, Link } from 'react-router-dom';

const ListaExercicios = () => {

  useEffect(()=>{atualizar()},[]);

  const [estado, setEstado] = useState(
    {
      carregado: false,
      dados: []
    }
  );

  const [exercicio, setExercicio] = useState(
    {
      id: 0,
      bodyGroup: "",
      description: ""
    }
  );

  const [show, setShow] = useState(false);

  const atualizar = () => {
    if(estado.carregado){
      return;
    }

    axios.get('http://localhost:3000/exercises')
    .then(resp => {
      setEstado({carregado: true, dados: resp.data})
    }).catch(erro => {
      console.log(erro)
    })
  }

  const salvar=()=>{
    if(exercicio.id!==0){
      axios.put(`http://localhost:3000/exercises/${exercicio.id}`,exercicio).catch((erro)=>console.log(erro))
    }else{
      axios.post('http://localhost:3000/exercises',exercicio).catch((erro)=>console.log(erro))
    }
  }

  const excluir=(e)=>{
    const id = parseInt(e.target.id);
    axios.delete(`http://localhost:3000/exercises/${id}`)
    .then(()=>atualizar())
    .catch((erro)=>console.log(erro))
  }

  const editar=(e)=>{
    const id = parseInt(e.target.id);
    axios.get(`http://localhost:3000/exercises/${id}`)
    .then((exercicio)=>{
      setExercicio(exercicio.data);
      setShow(true);
    })
    .catch((erro)=>console.log(erro))
  }

  return (
    <section>
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
      <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-xl font-semibold text-gray-900">Exercícios Cadastrados</h1>
          <p class="mt-2 text-sm text-gray-700">
            Esta é a listagem completa dos seus exercícios.
          </p>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button onClick={()=>setShow(!show)}
            type="button"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            Novo Exercício
          </button>
        </div>
      </div>
      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Área do Corpo
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Descrição
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                    {
                      estado.dados.map( x =>
                        (
                          <tr key={x.id}>
                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {x.id}
                            </td>
                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {x.bodyGroup}
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {x.description}
                            </td>
                            <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                <i  id={x.id} onClick={editar} class="fa-solid fa-user-pen"></i>
                              </a>
                              <button class="ml-2.5 text-indigo-600 hover:text-red-600">
                                <i  id={x.id} onClick={excluir}  class="fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        )
                      )
                    }
                </tbody>
              </table>
              {
                show && (<form style={{position: "relative", right: "60vh"}}>
                  <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Cadastro de exercício</h2>
                    <div class="relative mb-4">
                      <label for="bodyGroup" class="leading-7 text-sm text-gray-600">Área do Corpo</label>
                      <input onChange={(e)=> {setExercicio({...exercicio,bodyGroup:e.target.value})}} type="text" value={exercicio.bodyGroup} id="bodyGroup" name="bodyGroup" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                      <label for="description" class="leading-7 text-sm text-gray-600">Descrição</label>
                      <input onChange={(e)=> {setExercicio({...exercicio,description:e.target.value})}} type="text" value={exercicio.description} id="description" name="description" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <button onClick={salvar} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Salvar</button>
                  </div>
                </form>)
              }
            </div>
          </div>
        </div>
      </div>
        </div>
    </section>
  );
};

export default ListaExercicios;
