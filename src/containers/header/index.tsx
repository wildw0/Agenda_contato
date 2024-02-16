import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

const Cabecalho = () => {
  return (
    <S.cabecalho>
      <h1>Meus Contatos</h1>
    </S.cabecalho>
  )
}

export default Cabecalho
