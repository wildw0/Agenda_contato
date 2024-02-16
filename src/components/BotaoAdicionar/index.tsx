import { Circulo } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-regular-svg-icons'

const BotaoAdicionar = () => (
  <Circulo to="/novo">
    {' '}
    + <FontAwesomeIcon icon={faAddressBook} />
  </Circulo>
)

export default BotaoAdicionar
