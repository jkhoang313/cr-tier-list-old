import callApi from '../middleware.js';


export function login(params) {
  const requestInfo = {
    method: 'post',
    body: JSON.stringify(params)
  }

  return callApi(`/api/login`, "LOGIN", requestInfo)
}

export function logout() {
  return {
    type: "LOGOUT"
  }
}

export function fetchUser() {
  const requestInfo = { method: 'get' }

  return callApi(`/api/user`, "FETCH_USER", requestInfo)
}

export function handleLoginModal(modalState) {
  return {
    type: "HANDLE_LOGIN_MODAL", payload: modalState
  }
}
