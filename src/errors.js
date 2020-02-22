const ERRORS = {
  type: (value) => new Error(`Stored value must be a Number, String, Array or Object, got ${typeof value}`),
  duplicateKey: (value) => new Error(`Keys used on object instance in LS must be unique, check: ${value}`),
  doesNotExist: (value) => new Error(`The key ${value.key} does not exist in ${value.id}`)
}

export default ERRORS
