const reducePromises = async (data = [], func = () => {}, defaultValue = []) =>
  data.reduce(async (promise, value) => {
    const newData = await promise

    try {
      const resolver = await func(newData, value)
      return Promise.resolve(resolver)
    } catch (error) {
      return Promise.resolve(newData)
    }
  }, Promise.resolve(defaultValue))

module.exports = reducePromises
