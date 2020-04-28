const getValueFromString = (obj = {}, str = '') => str.split('.').reduce((newObj, key) => (newObj[key] !== undefined) ? newObj[key] : null, obj)

export default getValueFromString