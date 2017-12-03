import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Main from './components/Main.jsx'
import Landing from './components/Landing.jsx'
import reducer from './reducers'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/onboard" component={Main} />
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}

render(React.createElement(App), document.getElementById('app'))
