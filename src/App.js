import React, { useEffect, useState } from 'react';
import Home from './pages/home';
import About from './pages/about';
import {Link, Route, Routes } from 'react-router-dom';
import Info from './pages/info';
import More from './pages/more';
import Page from './pages/page';


function App() {
  

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const data = response.json()
    console.log(data)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()

  }, [])


  return (
    <>

    <Page />

    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path = '/info' element = {<Info />}/>
      <Route path='/more' element = {<More />}/>
    </Routes>
    </>
    )
}
export default App;
