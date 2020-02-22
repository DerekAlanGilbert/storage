import ERRORS from './errors.js'

// const interactWithLocalStorage = (...parameters) => {
//   const [action, value] = parameters
//   if (['string', 'array', 'object', 'boolean', 'number'].includes(typeof value)) {
//     localStorage(action, value)
//   } else {
//     throw ERRORS.type(value)
//   }
// }
const get = (id, key) => {
  const storageObject = JSON.parse(localStorage.getItem(id))
  if (!Object.keys(storageObject).includes(key)) throw ERRORS.doesNotExist({ id, key })
  return storageObject[key]
}
const set = (id, key, item) => {
  if ([undefined, null].includes(localStorage.getItem(id))) localStorage.setItem(id, JSON.stringify({}))
  const storageObject = JSON.parse(localStorage.getItem(id))
  if (Object.keys(storageObject).includes(key)) delete storageObject[key]
  storageObject[key] = item
  localStorage.setItem(id, JSON.stringify(storageObject))
}
const remove = (id, key) => {
  const storageObject = JSON.parse(localStorage.getItem(id))
  delete storageObject[key]
  localStorage.setItem(key, JSON.stringify(storageObject))
}

const webDB = {
  get,
  set,
  remove
}

export { set, get, remove }

export default webDB
