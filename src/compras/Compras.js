import React from 'react'


import Header from '../home/Header'
import Footer from '../home/Footer'
import ComprasBotoes from './ComprasBotoes'
import TabelaCompras from './TabelaCompras'

import './Compras.css'

export default () => {
  
 return (
    <>
      <Header />
      <h1>Tabela de Compras</h1>
      
      <ComprasBotoes />
      <div class="total">
      <span>Total da Compra:</span>
      <span>R$ 1,587,55</span>
      </div>
      <aside>
        <TabelaCompras />
      </aside>
      <footer />
    </>
  )
}