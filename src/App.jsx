import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Task from './Components/Task';
import TaskList from './Components/TaskList';


function App() {

  return (
    <>
      <div><Header /></div>
      <div><Task /></div>
      <div><TaskList /></div>

    </>
  )
}

export default App
