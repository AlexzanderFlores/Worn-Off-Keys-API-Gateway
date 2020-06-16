const main = async (event) => {
  console.log('Event:', event)

  const min = +event.min
  const max = +event.max

  return Math.floor(Math.random() * (max - min + 1)) + min
}

exports.handler = main
