export default function(state = {
  user: {},
  loggedIn: !!sessionStorage.getItem("jwt"),
  loginModalOpen: false
}, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      sessionStorage.setItem("jwt", action.payload.jwt)

      return {
        ...state,
        loggedIn: true,
        loginModalOpen: false
      }
    }

    case "LOGOUT": {
      sessionStorage.setItem("jwt", "")

      return {
        ...state,
        loggedIn: false
      }
    }

    case "HANDLE_LOGIN_MODAL": {
      return {
        ...state,
        loginModalOpen: action.payload
      }
    }

    default:
      return state
  }
}
