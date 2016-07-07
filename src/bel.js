
// import { update } from 'yo'
import Hello from '../components/Hello'
import Button from '../components/Button'
import readme from '../README.md'

const div = document.getElementById('bel')

const tree = <Hello lib='bel/yo-yo' />
const btn = tree.querySelector('button')
div.appendChild(tree)

const sx = {
  padding: 32,
  maxWidth: 640
}
const content = <div style={sx} />
content.innerHTML = readme
document.body.appendChild(content)

