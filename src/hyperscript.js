
import Hello from '../components/Hello'

const div = document.getElementById('hyperscript')
const tree = <Hello lib='hyperscript' />

div.appendChild(tree)

