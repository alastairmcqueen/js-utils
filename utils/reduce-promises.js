const reducePromises = async (data = [], func = () => {}, defaultValue = []) =>
  data.reduce(async (promise, value) => {
    const newData = await promise

    const resolver = await func(newData, value)

    return Promise.resolve(resolver)
  }, Promise.resolve(defaultValue))

export default reducePromises