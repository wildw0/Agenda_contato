import { useDispatch } from 'react-redux'
import * as S from './styles'
import ContatoClass from '../../models/contatos'
import { editar, remover } from '../../store/reducers/contatos'
import { useEffect, useState } from 'react'

type Props = ContatoClass

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [estaEditando, setEstaEditando] = useState(false)

  useEffect(() => {
    if (
      nomeOriginal.length > 0 &&
      emailOriginal.length > 0 &&
      telefoneOriginal.length > 0
    ) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <>
      <S.CardContato>
        <S.ContainerStatus>
          <ul>
            <S.Descricao
              value={nome}
              disabled={!estaEditando}
              onChange={(e) => setNome(e.target.value)}
            />
            <S.Descricao
              value={telefone}
              disabled={!estaEditando}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <S.Descricao
              value={email}
              disabled={!estaEditando}
              onChange={(e) => setEmail(e.target.value)}
            />
          </ul>
        </S.ContainerStatus>
        <S.ContainerButtons>
          {estaEditando ? (
            <>
              <S.BotaoSalvar
                onClick={() => {
                  dispatch(editar({ nome, telefone, email, id }))
                  setEstaEditando(false)
                }}
              >
                SALVAR
              </S.BotaoSalvar>
              <S.BotaoDeletarECancelar onClick={cancelarEdicao}>
                CANCELAR
              </S.BotaoDeletarECancelar>
            </>
          ) : (
            <>
              <S.BotaoDeletarECancelar onClick={() => dispatch(remover(id))}>
                DELETAR
              </S.BotaoDeletarECancelar>
              <S.BotaoEditar onClick={() => setEstaEditando(true)}>
                EDITAR
              </S.BotaoEditar>
            </>
          )}
        </S.ContainerButtons>
      </S.CardContato>
    </>
  )
}

export default Contato
