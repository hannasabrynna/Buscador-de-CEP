import {FiSearch} from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    
  <div className="container">

      <h1 className="title">Buscador de CEP</h1>

    <div className="containerInput">
        <input 
        type= "text"
        placeholder= "Digite aqui seu CEP..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#ffff"/>
        </button>
    </div>

      <main className='main'>
        <h2>cep: 0000</h2>
        <span>Rua teste</span>
        <span>complemento: casa</span>
        <span>bairro blabla</span>
        <span>cidade - estado</span>
      </main>

  </div>
  );
}

export default App;
