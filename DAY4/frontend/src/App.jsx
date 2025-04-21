import React from 'react'
import Register from './components/Register'
import Update from './components/Update'
import View from './components/View'
import Delete from './components/Delete'
import './App.css'
const App = () => {
  return (
    <div>
      <h1>User Registration System</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App
