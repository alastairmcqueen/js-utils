const isValue = (value, allowEmpty = false) => {
  const type = typeof value

  const isObject = type === 'object'
  const isString = type === 'string'
  const isNumber = type === 'number'
  const isBoolean = type === 'boolean'

  const isValidValue = value && !isObject

  const isObjOrArr = value && isObject
  const objOrArrLength = isObjOrArr ? Object.keys(value).length : 0
  const isValidObjOrArr = isObjOrArr && objOrArrLength

  const allowEmptyObjOrArr = isObjOrArr && !objOrArrLength && allowEmpty
  const allowEmptyString = isString && allowEmpty

  return (isValidValue || isValidObjOrArr || isNumber || isBoolean || allowEmptyObjOrArr || allowEmptyString)
}

export default isValue