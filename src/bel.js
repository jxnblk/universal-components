
// import { update } from 'yo'
import Hello from '../components/Hello'
import Button from '../components/Button'

const div = document.getElementById('bel')

const tree = <Hello lib='bel/yo-yo' />
const btn = tree.querySelector('button')
div.appendChild(tree)
