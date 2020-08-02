import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/App';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (
  <div>Pagina 404 - Error</div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" exact component={CadastroVideo} />
      <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
