import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Component/pages/Home';
import Services from './Component/pages/Services';
import Products from './Component/pages/Products';
import SignUp from './Component/pages/SignUp';
 






function App(){
  
  return(
    <div>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={SignUp}/>
       
      </Switch>
    </Router>
    </div>

    
      
  );
}



        


export default App;
