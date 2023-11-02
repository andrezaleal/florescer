import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from '../services/auth';
// pages 
import Main from '../pages/Main';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import PaginaInicial from '../pages/Pagina-Inicial';
import Quiz from '../pages/Quiz';
import Catalogo from '../pages/Main/Catalogo';
import MinhasPlantas from '../pages/Minhas-Plantas';
import A_Z from '../pages/Main/Catalogo/A_Z';
import FacilCuidado from '../pages/Main/Catalogo/FacilCuidado';
import Grandes from '../pages/Main/Catalogo/Grandes';
import Planta from '../pages/Planta';
import Add_Planta from '../pages/Add-Planta';
import PlantaId from '../pages/Planta-Id';
import placeholder from '../pages/Main/PlantaPlaceholder';
import amorperfeito from '../pages/Main/PlantaPlaceholder/AmorPerfeito';
import cactus from '../pages/Main/PlantaPlaceholder/Cactus';
import carnivora from '../pages/Main/PlantaPlaceholder/Carnivora';
import deserto from '../pages/Main/PlantaPlaceholder/Deserto';
import espada from '../pages/Main/PlantaPlaceholder/Espada';
import lavanda from '../pages/Main/PlantaPlaceholder/Lavanda';
import manjericao from '../pages/Main/PlantaPlaceholder/Manjericao';
import orquidea from '../pages/Main/PlantaPlaceholder/Orquidea';
import pacova from '../pages/Main/PlantaPlaceholder/Pacová';
import samambaia from '../pages/Main/PlantaPlaceholder/Samambaia';
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
          <PrivateRoute path='/Grandes'>
            <Grandes />
          </PrivateRoute>
          <PrivateRoute path='/planta'>
            <Planta />
          </PrivateRoute >
          <PrivateRoute path='/adicionar planta'>
            <Add_Planta />
          </PrivateRoute>
          <PrivateRoute>
            <Route path='/planta-id/:id'>
              <PlantaId />
            </Route>
          </PrivateRoute>
          <Route path='/placeholder' component={placeholder} />
          <Route path='/amorperfeito' component={amorperfeito} />
          <Route path='/cactus' component={cactus} />
          <Route path='/carnivora' component={carnivora} />
          <Route path='/deserto' component={deserto} />
          <Route path='/espada' component={espada} />
          <Route path='/lavanda' component={lavanda} />
          <Route path='/manjericao' component={manjericao} />
          <Route path='/orquidea' component={orquidea} />
          <Route path='/pacova' component={pacova} />
          <Route path='/samambaia' component={samambaia} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
