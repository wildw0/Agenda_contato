import { createGlobalStyle, styled } from 'styled-components'
import variaveis from './variaveis'

const EstiloGLobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-row: auto 24px;
`

export const MainContainer = styled.main`
  position: relative;
  top: 25vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px;
  padding: 0 60px;
`
export const Nome = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
export const Campo = styled.input`
  margin-left: 18px;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: ${variaveis.azulEscuro};
`
export const Botoes = styled.button`
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botoes)`
  background-color: ${variaveis.azulEscuro};
`

export default EstiloGLobal
