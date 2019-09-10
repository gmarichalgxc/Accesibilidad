import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <nav className="navbar nav-shadow navbar-light bg-light">
        <img tabIndex="1" src={require('./img/logo.png')} className="App-logo" alt="Logotipo, volver a homepage"></img>

        <p>Esta web es accesible</p>
        <form className="form-inline">
          <input tabIndex="2" className="form-control mr-sm-2" type="search"/>
          <button tabIndex="3" className="btn btn-green my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </nav>

      <div className="container mt-3 content">
        <div className="banner">
        <img tabIndex="3" alt="" className="" src="https://www.genexus.com/media/images/logo_builders.png?timestamp=20190731032353">
        </img>
        </div>
        

        <form className="form">

          <div className="form-group">
            <label for="inputName">Nombre</label>
            <input tabIndex="4" type="text" className="form-control" id="inputName" aria-label="Nombre completo" />
          </div>
          <div className="form-group">
            <label for="inputEmail">Email</label>
            <input tabIndex="5" type="email" className="form-control" id="inputEmail" aria-label="Correo electrónico" />
          </div>
          <div className="form-group">
            <label for="selectCategoria">Selecciona una opción</label>
            <select tabIndex="6" className="form-control" id="selectCategoria">
              <option aria-selected="true" value="Opcion_uno">Opción uno</option>
              <option value="Opcion_dos">Opción dos</option>
              <option value="Opcion_tres">Opción tres</option>

            </select>

          </div>
          <div className="form-group form-check">
            <input tabIndex="7" type="checkbox" className="form-check-input" id="inputCheck" />
            <label className="form-check-label" for="inputCheck">Mantener sesión activa</label>
          </div>
          <div className="actions banner">
            <button tabIndex="9" className="btn btn-danger btn-red">Cancelar</button>
            <button tabIndex="8" type="submit" className="btn btn-blue">Confirmar</button>
          </div>



        </form>

      </div>


    </div>

  );
}

export default App;
