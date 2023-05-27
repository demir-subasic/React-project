import React, { useEffect, useState } from 'react';
import './App.css'
// import Home from './pages/home';
// import About from './pages/about';
// import {Link, Route, Routes } from 'react-router-dom';
// import Info from './pages/info';
// import More from './pages/more';
// import Page from './pages/page';
import axios from 'axios'


function App() {

  const [data, setData] = useState([])
  

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=12')
      setData(response.data)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()

  }, [])


  return (

    <div className='product-page'>
    {data.map((product) => (
      <div style={{borderRadius: '10px', border: '1px solid black', backgroundColor: 'darkcyan'}}>
        <div key={product.id}>
          <img style={{width: '300px', height: '300px'}} src={product.image} alt="" />
        </div>
        <div>
          <h1 style={{color: 'cyan'}}>{product.title}</h1>
          <p style={{smargin: '0px 10px', fontSize: '15px', letterSpacing: '2px'}}>{product.description}</p>
          <p style={{fontSize: '30px'}}>{product.price}</p>
          </div>
      </div>

    ))}


    {/* <Page /> */}

    {/* <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path = '/info' element = {<Info />}/>
      <Route path='/more' element = {<More />}/>
    </Routes> */}
    </div>
    )
}
export default App;
