import callApi from '../../api';

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
