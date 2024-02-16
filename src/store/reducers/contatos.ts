import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contatos'

type ContatosState = {
  itens: Contato[]
}
const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Arthur P.',
      email: 'ArthurP@gmail.com',
      telefone: '(xx) xxx-xxxx'
    },
    {
      id: 2,
      nome: 'Gabriela L.',
      email: 'GabrielaL@gmail.com',
      telefone: '(xx) xxx-xxxx'
    },
    {
      id: 3,
      nome: 'Paulo C.',
      email: 'PauloC@gmail.com',
      telefone: '(xx) xxx-xxxx'
    },
    {
      id: 4,
      nome: 'Ana V.',
      email: 'AnaV@gmail.com',
      telefone: '(xx) xxx-xxxx'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExistente) {
        alert('Você já adicionou esse contato')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
