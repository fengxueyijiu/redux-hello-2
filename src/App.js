import React, { PropTypes } from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './Home'
import Post from './Post'

class App extends React.Component {
  render () {
    return(
      <div className='App'>
        <Router>
          <switch>
            <Route exact path='/' component={Home}/>
            <Route path='/post' component={Post} />
          </switch>
        </Router>
      </div>
     )
  }
}

export default App;
