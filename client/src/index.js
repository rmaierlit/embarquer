import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Main from './components/Main.jsx'
import Landing from './components/Landing.jsx'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

function App() {
  return (
    <MuiThemeProvider>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/onboard" component={Main} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  )
}

render(React.createElement(App), document.getElementById('app'))
