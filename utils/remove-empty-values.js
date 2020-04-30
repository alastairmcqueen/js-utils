//TODO: refine keepFields and allowEmpty combination
import isValue from './is-value'

const removeEmptyValues = (data, keepFields = [], allowEmpty = false) => {
  if (isValue(data, allowEmpty)) {
    if (typeof data === 'object') {
      if (Array.isArray(data)) {
        return data.reduce((arr, value) => {
          const cleanedValue = removeEmptyValues(value, keepFields, allowEmpty)
          const newArr = arr ? [...arr, cleanedValue] : [cleanedValue]

          return cleanedValue ? newArr : arr
        }, allowEmpty ? [] : null)
      }

      return Object.keys(data).reduce((obj, key) => {
        const cleanedValue = removeEmptyValues(data[key], keepFields, keepFields.some(fieldKey => fieldKey === key))
        const cleanedObj = { [key]: cleanedValue }
        const newObj = obj ? { ...obj, ...cleanedObj } : cleanedObj

        return cleanedValue ? newObj : obj
      }, allowEmpty ? {} : null)
    }
    
    return data
  }

  return null
}

export default removeEmptyValues