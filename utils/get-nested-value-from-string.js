const getNestedValueFromString = (obj = {}, str = '') => 
  str.replace(/\[|\]|\.\./g, '.').split('.').reduce((newObj, key) => (newObj[key] !== undefined) ? newObj[key] : undefined, obj)

export default getNestedValueFromString