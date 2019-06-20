import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Memento from './Portfolio/Memento';
import Forensic from './Portfolio/Forensic';
import Traffic from './Portfolio/Traffic'
import SkillConnect from './Portfolio/SkillConnect'
import Registration from './Portfolio/Registration'
import Nao from './Portfolio/Nao';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import './App.css';


class App extends Component {
  state = {
      value: 0
  };
  render() {
      return (
          <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="main">
              <Switch>
                  <Route exact path ='/' component={Home}/>
                  <Route exact path = '/portfolio' component={Portfolio}/>
                  <Route exact path = '/portfolio/memento' component={Memento}/>
                  <Route exact path = '/portfolio/forensic' component={Forensic}/>
                  <Route exact path = '/portfolio/traffic' component={Traffic}/>
                  <Route exact path = '/portfolio/skillconnect' component={SkillConnect}/>
                  <Route exact path = '/portfolio/registration' component={Registration}/>
                  <Route exact path = '/portfolio/nao' component={Nao}/>
                  <Route exact path = '/resume' component={Resume} />
                  <Route exact path = '/contact' component={Contact} />
              </Switch>
          </div>
          </BrowserRouter>

      )
  }
}

export default App;
