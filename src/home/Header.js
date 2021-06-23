import React from 'react'
import logo from './logo.png'
import './Header.css'

export default ({titulo='Loja Virtual'}) => (
  <header>
    <img src={logo} alt="" />
    <h1>{titulo}</h1>
  </header>
)