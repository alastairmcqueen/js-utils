const getNestedValueFromString = (obj = {}, str = '') =>
  str.replace(/\[|\]/g, '.').replace('..', '.').split('.').reduce((newObj, key) => (newObj && newObj[key] !== undefined) ? newObj[key] : undefined, obj)

module.exports = getNestedValueFromString
