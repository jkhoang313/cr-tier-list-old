const baseUrl = "http://localhost:3000"

export default function callApi(url, actionType, params=null) {
  return function (dispatch) {
    dispatch(createRequest(actionType, params))

    return fetch(baseUrl + url)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        dispatch(createSuccess(actionType, json))
      )
  }
}

function createRequest(actionType, params) {
  return {
    type: actionType, payload: params
  }
}

function createSuccess(actionType, params) {
  return {
    type: actionType + "_SUCCESS", payload: params
  }
}
