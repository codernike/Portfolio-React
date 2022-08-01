import React from 'react'
import Footer from './lib/footer'
import Navbar from './lib/navbar'
import { BrowserRouter,  Route, Switch } from 'react-router-dom'
import './App.css'
import Homecontainer from './lib/homecontainer'
import Homeabout from './lib/homeabout'
import Skills from './lib/skills'
import Services from './lib/services'
import Homecontact from './lib/homecontact'


export default function App() {
  return (
  <>
  
  <Navbar/>
  <div ></div>
  <div class="gap-container">
  <BrowserRouter>
        <Switch>
          <Route exact path="/" >
      <Homecontainer/>
      <Homeabout/>
      <Skills/>
      <Services/>
      <Homecontact/>
          </Route>
          <Route path="/about">
           
          </Route>
          <Route path="/products/:id">
            
          </Route>
          <Route path="/products">
            
          </Route>
        </Switch>
      </BrowserRouter>
  </div>
  <Footer/>
  </>
  )
}
