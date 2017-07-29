import callApi from '../middleware.js';


export function login(params) {
  const requestInfo = {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }
  return callApi(`/api/login`, "LOGIN", requestInfo)
}

export function handleLoginModal(modalState) {
  return {
    type: "HANDLE_LOGIN_MODAL", payload: modalState
  }
}

export function logout() {
  return {
    type: "LOGOUT"
  }
}
