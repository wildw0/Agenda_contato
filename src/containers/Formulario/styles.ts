import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
`
export const Header = styled.header`
  margin-top: 80px;
  padding: 16px;

  h2 {
    font-weight: bold;
    color: ${variaveis.azulEscuro};
  }
`
