function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const validate = (input, constraints) => {
  let isValid = false

  if (constraints.minLength && !isValid) {
    isValid = input.value.length >= constraints.minLength
  }

  if (constraints.email && !isValid) {
    isValid = validateEmail(input.value)
  }

  return isValid
}

export default validate