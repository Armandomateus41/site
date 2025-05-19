'use client';
import React, { useState } from "react";
import './home.css';
const Home = () => {
  // Declara uma nova variável "data" com state e atribui um valor inicial vazio
  const [data, setData] = useState({
    nameUser: '',
    emailUser: '',
    phoneUser: ''
  });

  // Receber os dados dos campos do formulário
  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Executar a função quando o usuário clicar no botão do formulário
  const addUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Bloquear o recarregamento da página
    console.log('Processando o formulário... 10 segundos... Aguarde! :)');
    console.log(data); // Exibir os dados no console (simulação) 

    // Manipular  os dados recebidos , por exemplo, enviar os dados para API
    // concatenar e imprimir utilizando  template strings:
    console .log(`Nome: ${data.nameUser}, Email: ${data.emailUser}, Telefone: ${data.phoneUser}`);
  };

  return (
    <main className="main-container">
      <form onSubmit={addUser} className="form-container">
        <h1>Formulário de cadastro</h1>
        <div className="form-group ">
                 
        <label htmlFor="nameUser">Nome:</label>
        <input
          type="text"
          name="nameUser"
          id="nameUser"
          placeholder="Nome do cliente"
          value={data.nameUser}
          onChange={valueInput}
        />
        </div>
  <div className="form-group ">
        <label htmlFor="emailUser">Email:</label>
        <input
          type="email"
          name="emailUser"
          id="emailUser"
          placeholder="Email do cliente"
          value={data.emailUser}
          onChange={valueInput}
        />
        </div>
 <div className="form-group ">
        <label htmlFor="phoneUser">Telefone:</label>
        <input
          type="tel"
          name="phoneUser"
          id="phoneUser"
          placeholder="Telefone do cliente"
          value={data.phoneUser}
          onChange={valueInput}
        />
        <br /></div>

        <button type="submit" className="btn-submit">Cadastrar</button>
      </form>
    </main>
  );
};

export default Home;
