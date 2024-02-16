import styled from 'styled-components'
import { Botoes } from '../../styles'
import variaveis from '../../styles/variaveis'

export const CardContato = styled.div`
  display: block;
  width: 100%;
  padding: 16px;
  margin-bottom: 24px;
  background-color: rgb(245, 246, 250);
  box-shadow: rgba(12, 36, 97, 0.5) 1px 2px 3px;
  border-radius: 6px;
`

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;

  ul {
    textarea:first-child {
      font-weight: bold;
    }
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`

export const BotaoDeletarECancelar = styled(Botoes)`
  background-color: ${variaveis.BG1};
`

export const BotaoEditar = styled(Botoes)`
  background-color: ${variaveis.BG2};
`

export const BotaoSalvar = styled(Botoes)`
  background-color: ${variaveis.fonteClaro};
`

export const Descricao = styled.textarea`
  display: inline-block;
  font-size: 14px;
  resize: none;
  border: none;
  background-color: transparent;
  margin-left: 12px;
`
