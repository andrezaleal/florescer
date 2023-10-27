import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useAuthentication } from './hooks/useAuthentication';


// pages 
import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import PaginaInicial from './pages/Pagina-Inicial';
import Quiz from './pages/Quiz';
import Catalogo from './pages/Catalogo';
import MinhasPlantas from './pages/Minhas-Plantas';

// context
import { AuthProvider } from "./context/AuthContext";


export default function Routes() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <AuthProvider value={{ user }}>
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/cadastro" component={user ? PaginaInicial : Cadastro}/>
        <Route path="/login" component={user ? PaginaInicial : Login}/>   
        <Route path="/pagina inicial" component={user ? PaginaInicial : Login}/>
        <Route path='/quiz' component={user ? Quiz : Cadastro}/>
        <Route path='/catalogo' component={Catalogo}/>
        <Route path='/minhas plantas' component={MinhasPlantas}/>
      </Switch>
    </Router>
    </AuthProvider>
  );
}
