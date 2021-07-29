import React from 'react'

// terceros
import { Switch, Route } from 'react-router-dom'

// components
import Navbar from '../components/Navbar'

// pages
import HomePage from '../pages/Home'
import BuscadorPage from '../pages/Buscador'

const RootRouter = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/buscador" component={BuscadorPage} />
      </Switch>
    </div>
  )
}

export default RootRouter
