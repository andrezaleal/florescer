import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



// pages 
import Main from './pages/Main';
import Login from './pages/Main/Login';
import Cadastro from './pages/Main/Cadastro';
import PaginaInicial from './pages/Main/Pagina-Inicial';
import Quiz from './pages/Main/Quiz';
import Catalogo from './pages/Main/Catalogo';
import MinhasPlantas from './pages/Main/Minhas-Plantas';
import Planta from './pages/Main/Planta';
import Add_Planta from './pages/Main/Add-Planta';




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
        <Route path='/planta' component={Planta}/>
        <Route path='/adicionar planta' component={Add_Planta}/>
      </Switch>
    </Router>
  );
}
