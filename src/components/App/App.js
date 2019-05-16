import React from 'react'

import '../../fonts/roboto.css'
import '../../scss/screen.scss'
import './App.scss'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import Background from '../Background'
import ErrorBoundry from '../ErrorBoundry'

import SwapiService from '../../services/SwapiService'
import { SwapiServiceProvider } from '../SwapiServiceContext'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage
} from '../pages'



const App = () => {
  const swapiService = new SwapiService();
  
  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService}>
        <Router>
          <div id="app">
            <Header />
            <RandomPlanet />
            
            <Switch>
              <Route path="/" exact render={() => <h2>Welcome to Star Wars DB</h2>} />
              <Route path="/people/:id?" exact component={PeoplePage} />
              <Route path="/planets/:id?" exact component={PlanetsPage} />
              <Route path="/starships/:id?" exact component={StarshipsPage} />
              <Route render={() => <h2>Page is not found</h2>} />
            </Switch>
            
            <Background />
          </div>
        </Router>
      </SwapiServiceProvider>
    </ErrorBoundry>
  )
}

export default App