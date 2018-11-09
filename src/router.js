import React from "react";
import {
  Route,
  Switch, 
} from 'react-router-dom';
//import shared
//importar componentes view 
//import show from './components/Show';
import CreateUser from './components/certificacion/components/createuser';
import ContainerCertificado from './components/certificacion/components/Containercertificado';
function AppRouter() {
    return  (
            <div>
            <Switch>
            <Route exact path="/" component={ContainerCertificado} />
            <Route  path="/create" component={CreateUser} />
            <Route component={NoMatch} />
            </Switch>
            </div> 
    );
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        Error pagina no encontrada  <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
export default AppRouter;
