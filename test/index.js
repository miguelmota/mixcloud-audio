const test = require('tape')
const {getStreamUrls} = require('../')

test('got urls', t => {
  t.plan(2)

  const url = 'https://www.mixcloud.com/Bonobo'

  getStreamUrls(url)
  .then(streamUrls => {
    console.log(streamUrls)
    t.ok(Array.isArray(streamUrls))
    t.ok(streamUrls.length > 0)
  })
  .catch(error => {
    console.error(error)
  })
})
