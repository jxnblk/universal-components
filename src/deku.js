
import { createApp } from 'deku'
import Hello from '../components/Hello'
import Button from '../components/Button'

let _state = {}
let _reducer = () => _state
const store = {
  get state () {
    return _state
  },
  set reducer (f) {
    _state = f(undefined, {})
    _reducer = f
  },
  dispatch: (action) => {
    _state = {
      ..._state,
      ..._reducer(_state, action)
    }
    store.listener(_state)
  },
  listener: () => {}
}

store.reducer = (state = {
  lib: 'Deku'
}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const div = document.getElementById('deku')
const render = createApp(div, store.dispatch)

console.log('jsx test', render(
  <div>
    <h1>Hello</h1>
    <button onClick={e => console.log('hello')}>click</button>
  </div>
))
// console.log('jsx test', render(<Hello />))

// render(<Hello />, store.state)

