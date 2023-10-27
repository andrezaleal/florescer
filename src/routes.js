import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



// pages 
import Main from './pages/Main';
import Login from './pages/Main/Login';
import Cadastro from './pages/Main/Cadastro';
import PaginaInicial from './pages/Main/Pagina-Inicial';
import Quiz from './pages/Main/Quiz';
import Catalogo from './pages/Main/Catalogo';
import MinhasPlantas from './pages/Main/Minhas-Plantas';
import A_Z from './pages/Main/Catalogo/A_Z';
import Plantinhas from './pages/Main/Minhas-Plantas2';
import FacilCuidado from './pages/Main/Catalogo/FacilCuidado';
import Grandes from './pages/Main/Catalogo/Grandes';
import Planta from './pages/Main/Planta';
import Add_Planta from './pages/Main/Add-Planta';
import placeholder from './pages/Main/PlantaPlaceholder/';
import amorperfeito from './pages/Main/PlantaPlaceholder/AmorPerfeito';
import cactus from './pages/Main/PlantaPlaceholder/Cactus';
import carnivora from './pages/Main/PlantaPlaceholder/Carnivora';
import deserto from './pages/Main/PlantaPlaceholder/Deserto';
import espada from './pages/Main/PlantaPlaceholder/Espada';
import lavanda from './pages/Main/PlantaPlaceholder/Lavanda';
import manjericao from './pages/Main/PlantaPlaceholder/Manjericao';
import orquidea from './pages/Main/PlantaPlaceholder/Orquidea';
import pacova from './pages/Main/PlantaPlaceholder/Pacová';
import samambaia from './pages/Main/PlantaPlaceholder/Samambaia';


export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/cadastro" component={Cadastro}/>
        <Route path="/login" component={Login}/>   
        <Route path="/pagina inicial" component={PaginaInicial}/>
        <Route path='/quiz' component={Quiz}/>
        <Route path='/catalogo' component={Catalogo}/>
        <Route path='/minhas plantas' component={MinhasPlantas}/>
        <Route path='/AZ' component={A_Z}/>
        <Route path='/facilCuidado' component={FacilCuidado}/>
        <Route path='/Grandes' component={Grandes}/>
        <Route path='/planta' component={Planta}/>
        <Route path='/plantinhas' component={Plantinhas}/>
        <Route path='/adicionar planta' component={Add_Planta}/>
        <Route path='/placeholder' component={placeholder}/>
        <Route path='/amorperfeito' component={amorperfeito}/>
        <Route path='/cactus' component={cactus}/>
        <Route path='/carnivora' component={carnivora}/>
        <Route path='/deserto' component={deserto}/>
        <Route path='/espada' component={espada}/>
        <Route path='/lavanda' component={lavanda}/>
        <Route path='/manjericao' component={manjericao}/>
        <Route path='/orquidea' component={orquidea}/>
        <Route path='/pacova' component={pacova}/>
        <Route path='/samambaia' component={samambaia}/>

      </Switch>
    </Router>
  );
}
