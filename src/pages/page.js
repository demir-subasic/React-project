import React from 'react'
import "./page.css"
import {Link, Route, Routes } from 'react-router-dom';

export default function Page() {
  return (
    <div className='page'>
      <nav>
        <ul className='page-ul'>
        <li style={{listStyle: 'none'}}><Link style={{textDecoration: 'none', color: 'white'}} to="/home">Home</Link></li>
        <li style={{listStyle: 'none'}}><Link style={{textDecoration: 'none', color: 'white'}} to="/about">About</Link></li>
        <li style={{listStyle: 'none'}}><Link style={{textDecoration: 'none', color: 'white'}} to="/info">Info</Link></li>
        <li style={{listStyle: 'none'}}><Link style={{textDecoration: 'none', color: 'white'}} to="/more">More</Link></li>
        </ul>
      </nav>
    </div>
  )
}
