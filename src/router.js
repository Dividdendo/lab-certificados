import React from "react";
import {
  Route,
  Switch, 
} from 'react-router-dom';
//import shared
//importar componentes view 
import show from './components/Show';
import Create from './components/Create';
import FormCertificado from './components/certificacion/components/form-certificado';
function AppRouter() {
    return  (
            <div>
            <Switch>
            <Route exact path="/" component={FormCertificado} />
            <Route  path="/create" component={Create} />
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
