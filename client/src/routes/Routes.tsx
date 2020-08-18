import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Gods  from '../pages/gods/Gods'
import Boons from '../pages/boons/Boons'
import Error404 from '../pages/error404/Error404'
import Header from '../components/header/Header'

const boonsPaths = [
  '/aphroditeboons', 
  '/aresboons', 
  '/artemisboons', 
  '/athenaboons', 
  '/chaosboons', 
  '/demeterboons', 
  '/dionysusboons', 
  '/hermesboons', 
  '/poseidonboons', 
  '/zeusboons'
]

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/'} exact component={Gods} />
        {boonsPaths.map(path => 
          <Route key={path} path={path} exact component={Boons} />
        )}
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}
