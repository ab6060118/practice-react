const REGISTER = 'REGISTER'
const OPEN = 'OPEN'
const CLOSE = 'CLOSE'
const MINI = 'MINI'

export default function(state = [], action) {
  switch(action.type) {
    case REGISTER:
      return [...state, {name: action.name, status: 'close'}]
    case OPEN:
      return state.map((item, i) => {return item.name == action.name ? {...item, status: 'open'} : item})
    case CLOSE:
      return [
        ...state.slice(0, state.indexOf(action.window)),
        ...state.slice(state.indexOf(action.window) + 1)
      ]
    default:
      return state
  }
}
