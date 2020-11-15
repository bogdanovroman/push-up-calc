import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Auth from './components/Auth/Auth'
import Participant from './components/Participant/Participant'
import NewTraining from './components/NewTraining/NewTraining'
import { autoSign } from './utils/autoSign'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    autoSign(setCurrentUser)
  },
  [setCurrentUser])

  return (
    <Router>
      <div>
        <Header currentUser={currentUser} />
        <div className="uk-container uk-margin-medium-top uk-margin-large-bottom">
          <Switch>
            <Route
              exact
              path="/"
            >
              <Main currentUser={currentUser} />
            </Route>
            <Route
              exact
              path="/users/:userId"
            >
              <Participant currentUser={currentUser} />
            </Route>
            <Route path="/new">
              {currentUser ? <NewTraining currentUser={currentUser} /> : <Redirect to="/auth" />}
            </Route>
            <Route
              exact
              path="/auth"
            >
              {currentUser ? <Redirect to="/" /> : <Auth setCurrentUser={setCurrentUser} />}
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  )
}

export default App
