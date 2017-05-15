# mixcloud-audio

> Scrapes [Mixcloud](https://www.mixcloud.com) url to get audio stream urls

## Install

```bash
npm install mixcloud-audio
```

## Usage

```node.js
const {getStreamUrls} = require('mixcloud-audio')

const url = 'https://www.mixcloud.com/Bonobo'

getStreamUrls(url)
.then(streamUrls => {
  console.log(streamUrls)

  /*
  ['https://stream4.mixcloud.com/c/m4a/64/4/a/3/e/6711-093c-44a6-88f4-43c9698512ad.m4a',
    ...
  ]
  */
})
.catch(error => {
  console.error(error)
})
```

## Test

```bash
npm test
```

NOTE: this module will most likely break in the future when Mixcloud updates their audio endpoints.

## License

MIT
