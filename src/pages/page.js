import React from 'react'
import "./page.css"
import {NavLink, Route, Routes } from 'react-router-dom';

export default function Page() {
  return (
    <div className='page'>
      <nav>
        <ul className='page-ul'>
        <li style={{listStyle: 'none'}}><NavLink className={({isActive}) => (isActive ? 'active' : '')} style={{textDecoration: 'none', color: 'white'}} to="/home">Home</NavLink></li>
        <li style={{listStyle: 'none'}}><NavLink style={{textDecoration: 'none', color: 'white'}} to="/about">About</NavLink></li>
        <li style={{listStyle: 'none'}}><NavLink style={{textDecoration: 'none', color: 'white'}} to="/info">Info</NavLink></li>
        <li style={{listStyle: 'none'}}><NavLink style={{textDecoration: 'none', color: 'white'}} to="/more">More</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
