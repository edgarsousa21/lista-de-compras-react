import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles'

/*
 - React Hooks
     - useRef
     - useState / Estado -> É uma variável que. toda vez que troca de valor
                            a tela irá "Recarregar os Valores"
*/

function Home() {
  const [produtos, setProdutos] = useState([])

  const inputRef = useRef()


  function cliqueiNoBotão() {
    if (inputRef.current.value !== '') {
      console.log(v4())
      setProdutos([{ id: v4(), nome: inputRef.current.value, }, ...produtos])
      inputRef.current.value = ''
    } else {
      alert('Por Favor, Digite um Produto!')
    }
    // produtos.push()
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotão}>Adicionar</AddButton>

      {
        produtos.map(produto => (
          <Product key={produto.id}>
            <p>{produto.nome}</p>
            <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
          </Product>

        ))
      }

    </Container>
  )
}

export default Home
