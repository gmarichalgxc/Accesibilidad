import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="navbar nav-shadow navbar-light bg-light">
          <img src={require('./img/logo.png')} className="App-logo" href="#"></img>
        
        <p>Esta web no es accesible</p>

        <form className="form-inline">
          <input className="form-control mr-sm-2"/>
          <a className="btn btn-outline-success my-2 my-sm-0">Buscar</a>
        </form>
      </div>
      <div className="container mt-3 content">

      <div className="banner">
        <img tabIndex="3" className="" src="https://www.genexus.com/media/images/logo_builders.png?timestamp=20190731032353">
        </img>
        </div>


        <form className="form">

          <div className="form-group">
            <p>Nombre</p>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <p>Email</p>
            
            <input className="form-control" />
          </div>
          <div className="form-group">
            <p>Selecciona una opción</p>
            <select className="form-control" id="selectCategoria">
              <option value="Opcion_uno">Opción uno</option>
              <option value="Opcion_dos">Opción dos</option>
              <option value="Opcion_tres">Opción tres</option>
            </select>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input"/>
            <p>Mantener sesión activa</p>

          </div>
          <div className="actions banner">
            <a className="btn btn-red">Cancelar</a>
            <button type="submit" className="btn btn-primary">Confirmar</button>
          </div>


        </form>

      </div>


    </div>

  );
}

export default App;
