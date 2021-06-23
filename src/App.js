import React, {useState} from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import HomeScreen from './home/HomeScreen'
import CategoriaScreen from './categorias/CategoriaScreen'
import Compras from './compras/Compras'

function App() {
  const [compras, setCompras] = useState([])

  const adicionarProduto = (produto) => {
    let item = compras.find(c => c.produto.id === produto.id)

    if(item) {
      item.quantidade = item.quantidade + 1
    } else {
      item = {
        produto,
        quantidade: 1
      }

      compras.push(item)
    }

    setCompras(compras)
    console.log('adicionarProduto', compras)
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/'>
          <HomeScreen />
        </Route>
        <Route path='/categorias/:id'>
          <CategoriaScreen 
            addProduto={adicionarProduto}
          />
        </Route>
        <Route path='/compras'>
          <Compras
            lista={compras}
          />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}

export default App;
