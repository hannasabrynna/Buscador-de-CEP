import { useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';
import React from 'react';
import api from './services/api';

function App() {
  //'input' eh um estado, quando ultilizado retorna o valor do estado.
  // O 'setInput' eh uma função, ultilizada para passar um novo valor para o 'input'
  //o mesmo com o cep e setCep
  const [input, setInput]= useState('');
  const [cep, setCep] = useState({})

  async function handleSearch(){
    if(input === ""){
      alert ('Preecha o campo doi CEP')
      return;
    }

    try{
      const response= await api.get(`${input}/json`);
      //console.log(response.data);
      setCep(response.data);
      setInput("");

    } catch{
      alert ("Ops ocorreu um erro");
      setInput("");

    }
  }

  return (
    
  <div className="container">

      <h1 className="title">Buscador de CEP</h1>

    <div className="containerInput">
        <input 
        type= "text"
        placeholder= "Digite aqui seu CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#ffff"/>
        </button>
    </div>

   
  
    {Object.keys(cep).length > 0 && ( 

      <main className='main'>
        <h2>CEP: {cep.cep} </h2>
        <span> {cep.logradouro} </span>
        <span>complemento: {cep.complemento} </span>
        <span> {cep.bairro} </span>
        <span> {cep.localidade} - {cep.uf} </span>
      </main>

    )};
    
      

  </div>
  );
}

export default App;
