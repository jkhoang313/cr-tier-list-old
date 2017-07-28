export default function(state = {
  user: {}
}, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      sessionStorage.setItem("jwt", action.payload.jwt)

      return {
        ...state,
        user: action.payload.user
      }
    }

    default:
      return state
  }
}
