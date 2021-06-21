import React from 'react'
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
import { Route, Switch} from 'react-router';
import './App.css';

import { Mainpage } from '../mainpage/mainpage';
import { Events } from '../events/Events';
import { About } from '../about/About';
import { Dinner } from '../dinner/Dinner';
import { Cocktail } from '../cocktails/Cocktail';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
          <Switch>
            <Route exact path='/' component={Mainpage} />
            <Route exact path='/Events' component={Events} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Dinner' component={Dinner} />
            <Route exact path='/Cocktail' component={Cocktail} />
          </Switch> 
      <Footer/>
    </div>
  );
}



export default App;
