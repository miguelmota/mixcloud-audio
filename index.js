const request = require('request')
const cheerio = require('cheerio')

function getStreamUrls(mixcloudUrl) {
  return new Promise((resolve, reject) => {
    request({
      url: mixcloudUrl
    }, (error, response, body) => {
      if (error) {
        return reject(error)
      }

      if (!body) {
        return resolve([])
      }

      const $ = cheerio.load(body)
      const result = []
      const attr = 'm-waveform'

      $(`[${attr}]`).each((i, elem) => {
        const jsonUrl = elem.attribs[attr]

        const pathname = jsonUrl.match(/^http.*\.com(.*)\.json.*$/i)

        if (pathname && pathname.length > 1) {
          const streamUrl = `https://stream4.mixcloud.com/c/m4a/64${pathname[1]}.m4a`

          result.push(streamUrl)
        }
      })

      resolve(result)
    })
  })
}

module.exports = {
  getStreamUrls
}
