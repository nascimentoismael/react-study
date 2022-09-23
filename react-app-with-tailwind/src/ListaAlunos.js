import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaAlunos = () => {

  useEffect(()=>{atualizar()},[]);

  const [estado, setEstado] = useState(
    {
      carregado: false,
      dados: []
    }
  );

  const [aluno, setAluno] = useState(
    {
      id: 0,
      name: "",
      email: "",
      phone: ""
    }
  );

  const [show, setShow] = useState(false);

  const atualizar = () => {
    // if(estado.carregado){
    //   return;
    // }

    axios.get('http://localhost:3004/aluno')
    .then(resp => {
      setEstado({carregado: true, dados: resp.data})
    }).catch(erro => {
      console.log(erro)
    })
  }

  const salvar=()=>{
    if(aluno.id!==0){
      axios.put(`http://localhost:3004/aluno/${aluno.id}`,aluno).catch((erro)=>console.log(erro))
    }else{
      axios.post('http://localhost:3004/aluno',aluno).catch((erro)=>console.log(erro))
    }
  }

  const excluir=(e)=>{
    const id = parseInt(e.target.id);
    axios.delete(`http://localhost:3004/aluno/${id}`)
    .then(()=>atualizar())
    .catch((erro)=>console.log(erro))
  }

  const editar=(e)=>{
    const id = parseInt(e.target.id);
    axios.get(`http://localhost:3004/aluno/${id}`)
    .then((aluno)=>{
      setAluno(aluno.data);
      setShow(true);
    })
    .catch((erro)=>console.log(erro))
  }

  return (
    <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Alunos Cadastrados</h1>
        <p class="mt-2 text-sm text-gray-700">
          Esta é a listagem completa dos seus alunos.
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button onClick={()=>setShow(!show)}
          type="button"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
          Novo Aluno
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
                    Nome
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Telefone
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
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
                            {x.name}
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {x.phone}
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {x.email}
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
                  <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Cadastro do aluno</h2>
                  <div class="relative mb-4">
                    <label for="full-name" class="leading-7 text-sm text-gray-600">Nome Completo</label>
                    <input onChange={(e)=> {setAluno({...aluno,name:e.target.value})}} type="text" value={aluno.name} id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input onChange={(e)=> {setAluno({...aluno,email:e.target.value})}} type="email" value={aluno.email} id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                  <div class="relative mb-4">
                    <label for="celular" class="leading-7 text-sm text-gray-600">Celular</label>
                    <input onChange={(e)=> {setAluno({...aluno,phone:e.target.value})}} type="text" value={aluno.phone} id="celular" name="celular" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
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
  );
};

export default ListaAlunos;
