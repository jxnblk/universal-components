import InfernoDOM from 'inferno-dom'
import Hello from '../components/Hello'

const div = document.getElementById('inferno')
InfernoDOM.render(<Hello lib='Inferno' />, div)
