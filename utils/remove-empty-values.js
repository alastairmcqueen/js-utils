const removeEmptyValues = data => {
  if (typeof data === 'object' && data !== null && Object.keys(data).length !== 0) {
    if (Array.isArray(data)) {
      return data.reduce((arr, value) => {
        const cleanedValue = removeEmptyValues(value)
        return cleanedValue ? [...arr, cleanedValue] : arr
      }, [])
    }

    return Object.keys(data).reduce((obj, key) => {
      const cleanedValue = removeEmptyValues(data[key])

      if (cleanedValue || typeof cleanedValue === 'number' || typeof cleanedValue === 'boolean') obj[key] = cleanedValue

      return obj
    }, {})
  }
  else if (data || typeof data === 'number' || typeof data === 'boolean') {
    return data
  }

  return null
}

export default removeEmptyValues