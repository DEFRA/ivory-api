const joi = require('joi')

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return {
      hello: 'elephants'
    }
  }
}, {
  method: 'POST',
  path: '/',
  handler: (request, h) => {
    return {
      hello: 'world'
    }
  },
  options: {
    validate: {
      payload: joi.object().keys({
        email: joi.string().email().required()
      })
    }
  }
}]
