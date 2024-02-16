import { useDispatch, useSelector } from 'react-redux'
import { Botoes, Campo } from '../../styles'
import * as S from './styles'
import { RootReducer } from '../../store'
import { cadastrar } from '../../store/reducers/contatos'
import { FormEvent, useState } from 'react'

const Formulario = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
  }

  const limparCampos = () => {
    setTimeout(() => {
      setNome('')
      setTelefone('')
      setEmail('')
    }, 100)
  }

  return (
    <>
      <S.Header>
        <h2>Novo Contato</h2>
      </S.Header>
      <S.Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <Campo
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
          type="text"
          placeholder="Telefone"
          required
        />
        <Campo
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="E-mail"
          required
        />
        <Botoes onClick={limparCampos} type="submit">
          ADICIONAR
        </Botoes>
      </S.Form>
    </>
  )
}

export default Formulario
