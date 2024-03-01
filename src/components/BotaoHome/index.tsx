import { Circulo } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHouse } from '@fortawesome/free-solid-svg-icons'

const BotaoHome = () => (
  <Circulo to="/">
    {' '}
    <FontAwesomeIcon icon={faHouse} />
  </Circulo>
)

export default BotaoHome
