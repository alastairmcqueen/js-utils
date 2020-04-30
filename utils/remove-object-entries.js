const removeObjectEntries = (obj = {}, keys = []) => 
  Object.keys(obj).reduce((currentObj, currentKey) => 
    keys.every(key => key !== currentKey) ? { ...currentObj, [currentKey]: obj[currentKey] } : currentObj, {})

export default removeObjectEntries