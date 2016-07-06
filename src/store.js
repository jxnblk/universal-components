
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

export const INC = 'INC'
export const DEC = 'DEC'

store.reducer = (state = {
  count: 0
}, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        count: state.count + 1
      }
    case DEC:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export default store

