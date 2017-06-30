const baseUrl = "http://localhost:3000"

export default function callApi(url, actionType, requestInfo, params=null) {
  return function (dispatch) {
    dispatch(createRequest(actionType, params))

    return fetch(baseUrl + url, requestInfo)
      .then(
        response => response.json(),
        error => dispatch(createFailure(actionType))
      )
      .then(json =>
        json.error ? null : dispatch(createSuccess(actionType, json))
      )
  }
}

function createRequest(actionType, params) {
  return {
    type: `${actionType}_REQUEST`, payload: params
  }
}

function createSuccess(actionType, params) {
  return {
    type: `${actionType}_SUCCESS`, payload: params
  }
}

function createFailure(actionType) {
  return {
    type: `${actionType}_FAILURE`, error: true
  }
}
