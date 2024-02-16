import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  width: 64px;
  height: 64px;
  background-color: ${variaveis.azulEscuro};
  color: ${variaveis.fonteEscuro};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-decoration: none;
`
