import React from 'react'
import { StaticRouter, Switch, Route, Link } from 'react-router-dom'
import Counter from '../client/Counter'
import Title from '../client/Title'

const App = ({ path }) => {
  return (
    <StaticRouter location={path} context={{}}>
      <button><Link to='/'>counter</Link></button>
      <button><Link to='/title'>title</Link></button>
      <Switch>
        <Route exact path='/' component={Counter} />
        <Route exact path='/title' component={Title} />
      </Switch>
    </StaticRouter>
  )
}

export default App
