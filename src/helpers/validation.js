function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const validate = (input, constraints) => {
  if (!input) return false
  
  let isValid = false
  const value = input.value ? input.value.toString() : input.toString()  

  if (constraints.required && !isValid) {
    isValid = value.trim() !== ''
  }

  if (constraints.minLength && !isValid) {
    isValid = value.trim().length >= constraints.minLength
  }

  if (constraints.email && !isValid) {
    isValid = validateEmail(value)
  }

  return isValid
}

export default validate
