import { useState } from 'react'
import './App.css'
import './output.css'
import {Route, Routes} from 'react-router-dom'
import Watchlist from './pages/Watchlist'
import Home from './pages/Home'
import Navigation from './pages/Navigation'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/watchlist" element={<Watchlist />}></Route>
    </Routes>
  )
}

function App() {
  return (
    <>
      <Navigation />
      <Router />
    </>
  )
}

export default App
