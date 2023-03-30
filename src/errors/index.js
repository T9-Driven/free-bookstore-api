export function conflictError(message) {
  return {
    name: "ConflictError",
    message,
  };
}

export function duplicatedEmailError() {
  return {
    name: "DuplicatedEmailError",
    message: "There is already an user with given email",
  };
}

export function unauthorizedError() {
  return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
  };
}

export function notFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

export function invalidCredentialsError() {
  return {
    name: "InvalidCredentialsError",
    message: "Email or password are incorrect",
  };
}
