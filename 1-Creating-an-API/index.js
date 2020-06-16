const main = async (event) => {
  console.log('Event:', event)
  return Math.floor(Math.random() * 100) + 1
}

exports.handler = main
