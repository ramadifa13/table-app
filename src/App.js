import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import { Pengguna } from './penggunas/pengguna.component';
import { history } from './_helpers';
import { AddPengguna } from './penggunas/addPengguna.component';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>            
              <Switch>
                <Route exact path='/' component={Pengguna} />
                <Route exact path='/add-pengguna' component={AddPengguna} />
                <Route exact path='/edit-pengguna/:id' component={AddPengguna} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
