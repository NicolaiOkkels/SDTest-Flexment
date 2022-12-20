export const calculateStartIndex = (pageLimit, page) => {
    return (Number(page) - 1) * pageLimit;
}

export function convertStringToArray(string) {
    return string.split(", ");
}


export const passwordCharConstrain = (password) => {
  let flag

  if (password.length < 6 || password.length > 32) {
    flag = false
  } else {
    flag = true
  }
  return flag
}

export const nameCharConstrain = (name) => {
  let flag

  if (name.length < 2) {
    flag = false
  } else {
    flag = true
  }
  return flag
}

export function errorMessage (existingUser, firstName, lastName, password, confirmPassword) {
  if (existingUser) {
    return 'User already exist'
  }
  if (nameCharConstrain(firstName) === false) {
    return 'First name is invalid'
  }
  if (nameCharConstrain(lastName) === false) {
    return 'Last name is invalid'
  }
  if (password !== confirmPassword) {
    return 'Password doesnt match'
  }
  if (passwordCharConstrain(password) === false) {
    return 'Password is invalid'
  }

  return false
}

export function signUpError (existingUser, firstName, lastName, password, confirmPassword) {
  let hasError

  if (existingUser) {
    hasError = true
  } else if (nameCharConstrain(firstName) === false) {
    hasError = true
  } else if (nameCharConstrain(lastName) === false) {
    hasError = true
  } else if (password !== confirmPassword) {
    hasError = true
  } else if (passwordCharConstrain(password) === false) {
    hasError = true
  } else {
    hasError = false
  }

  return hasError
}

export function fullName (firstName, lastName) {
  return firstName.concat(' ', lastName)
}
