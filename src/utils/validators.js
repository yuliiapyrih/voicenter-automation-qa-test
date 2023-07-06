export function validateEmptyAndLength3 (value) {

  if (!value) {
    return '*Це поле є обов*язковим!'
  }

  if (value.length < 3) {
    return '*Це поле має бути щонайменше 3 символами!'
  }

  return true
}


export function validateEmptyAndEmail (value) {
  if (!value) {
    return '*Це поле є обов*язковим!'
  }

  // Email regex
  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if (!isValid) {
    return '*Це поле має бути електронною поштою'
  }

  return true
}
