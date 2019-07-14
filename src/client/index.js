import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Counter from './Counter'
import Title from './Title'

ReactDOM.hydrate(
  <BrowserRouter>
    <button><Link to='/'>counter</Link></button>
    <button><Link to='/title'>title</Link></button>
    <Switch>
      <Route exact path='/' component={Counter} />
      <Route exact path='/title' component={Title} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
