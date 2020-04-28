const removeObjectEntries = (obj = {}, keys = []) => Object.keys(obj).reduce((newObj, currentKey) => {
  if (keys.every(key => key !== currentKey)) newObj[currentKey] = obj[currentKey]
  return newObj
}, {})

export default removeObjectEntries