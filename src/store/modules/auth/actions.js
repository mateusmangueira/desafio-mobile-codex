export function LoginRequest(email, password) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: {email, password},
  };
}

export function LoginSuccess(token, user) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: {token, user},
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {name, email, password},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function logout() {
  return {
    type: '@auth/LOGOUT',
  };
}
