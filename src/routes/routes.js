import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from '../services/auth';
// pages 
import Main from '../pages/Main';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import PaginaInicial from '../pages/Pagina-Inicial';
import Quiz from '../pages/Quiz';
import Catalogo from '../pages/Catalogo';
import MinhasPlantas from '../pages/Minhas-Plantas';
import A_Z from '../pages/Catalogo/A_Z';
import FacilCuidado from '../pages/Catalogo/FacilCuidado';
import Pequenas from '../pages/Catalogo/Pequenas';
import Planta from '../pages/Planta';
import AddPlanta from '../pages/Add-Planta';
import PlantaId from '../pages/Planta-Id';
import IntroSession from '../pages/Quiz/sessions/introSession';
import ResultSession from '../pages/Quiz/sessions/resultSession';
import Favoritos from '../pages/Catalogo/Favoritos';
import PrivateRoute from './private';


export default function Routes() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/pagina inicial">
            <PaginaInicial />
          </PrivateRoute>
          <PrivateRoute path='/quiz' >
            <Quiz />
          </PrivateRoute>
          <PrivateRoute path='/catalogo'>
            <Catalogo />
          </PrivateRoute>
          <PrivateRoute path='/minhas plantas'>
            <MinhasPlantas />
          </PrivateRoute>
          <PrivateRoute path='/AZ'>
            <A_Z />
          </PrivateRoute>
          <PrivateRoute path='/facilCuidado'>
            <FacilCuidado />
          </PrivateRoute>
          <PrivateRoute path='/pequenas'>
            <Pequenas />
          </PrivateRoute>
          <PrivateRoute path='/adicionar planta'>
            <AddPlanta />
          </PrivateRoute>
          <PrivateRoute path='/intro-quiz'>
            <IntroSession />
          </PrivateRoute>
          <PrivateRoute path='/resultado-quiz'>
            <ResultSession />
          </PrivateRoute>
          <PrivateRoute path='/favoritos'>
            <Favoritos />
          </PrivateRoute>
          <PrivateRoute>
            <PrivateRoute >
              <Route path='/planta/:id'>
                <Planta />
              </Route>
            </PrivateRoute >
            <Route path='/planta-id/:id'>
              <PlantaId />
            </Route>
          </PrivateRoute>
        </Switch>
      </AuthProvider>
    </Router>
  );
}
