import React from "react";
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AppRouter from './router';
import MenuAppBar  from './components/shared/header';
function App() {
  return (
    <Router>
      <div>
      <MenuAppBar />
       <AppRouter />
      </div>
    </Router>
    
  );
}
export default App;