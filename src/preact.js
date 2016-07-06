
import { render } from 'preact'
import Hello from '../components/Hello'

const div = document.getElementById('preact')
render(<Hello lib='Preact' />, div)

