import React, {useState, useEffect} from 'react'


import {useParams, useHistory} from 'react-router-dom'

import Header from '../home/Header'
import MenuCategorias from './MenuCategorias'
import Footer from '../home/Footer'
import TabelaProdutos from './TabelaProdutos'

import * as CategoriaAPI from '../home/CategoriaAPI'
import * as ProdutosApi from './ProdutosApi'

import './CategoriaScreen.css'

export default ({addProduto}) => {
  const {id} = useParams()
  const history = useHistory()
  const [listaCategorias, setListaCategorias] = useState([])
  const [listaProdutos, setListaProdutos] = useState([])

  useEffect(() => {
    const load = async () => {
      const categorias = await CategoriaAPI.getAll()
      console.log('Executou o carregarCategorias: ', categorias)
      setListaCategorias(categorias)
    }

    load()
  }, [])


  useEffect(() => {
    const load = async () => {
      const produtos = await ProdutosApi.getByIdCategoria(id)
      console.log('Executou o carregarProdutos: ', produtos)
      setListaProdutos(produtos)
    }

    load()
  }, [id])

  return (
    <>
      <Header />
      <nav>
        <button onClick={() => history.push('/compras')}>Ver carrinho</button>
      </nav>
      <nav>
        <MenuCategorias 
          lista={listaCategorias}
        />
      </nav>
      <aside>
          <TabelaProdutos 
          idCategoria={id}
          lista={listaProdutos}
          addProduto={addProduto}
        />
      </aside>
      <Footer />
    </>
  )
}