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

export function handleLoginModal(boolean) {
  return {
    type: "HANDLE_LOGIN_MODAL"
  }
}
