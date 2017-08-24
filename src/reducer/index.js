const INIT = 'INIT'
const CREATE = 'CREATE'
const DELETE = 'DELETE'

export default function(state = '', action) {
  switch(action.type) {
    case CREATE:
      return action.state
    case INIT:
    case DELETE:
    default:
      return state
  }
}

export const init = (item) => {
  return {type: INIT, item}
}

export const create = (item) => {
  return {type: CREATE, item}
}


export const delete_item = (item) => {
  return {type: DELETE, item}
}
