const EXCHANGE_RATE = 15
 const PRICE_CONFIGS = [
  { 
    price: 100 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(230,33,23,1)',
      headerBg: 'rgba(208,0,0,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)',
      iconImg: 'https://cdn.discordapp.com/attachments/819260584620720162/861877971853901824/unknown.png'
    },
    pinTime: 60
  },
  { 
    price: 50 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(233,30,99,1)',
      headerBg: 'rgba(194,24,91,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)',
      iconImg: 'https://media.discordapp.net/attachments/819260584620720162/952963803711148072/icon.png'
    },
    pinTime: 30
  },
  { 
    price: 20 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(245,124,0,1)',
      headerBg: 'rgba(230,81,0,1)',
      header: 'rgba(255,255,255,0.87451)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,0.87451)',
      iconImg: 'https://cdn.discordapp.com/attachments/819260584620720162/861875982109769738/unknown.png'
    },
    pinTime: 10
  },
  { 
    price: 10 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(255,202,40,1)',
      headerBg: 'rgba(255,179,0,1)',
      header: 'rgba(0,0,0,0.87451)',
      authorName: 'rgba(0,0,0,0.541176)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,0.87451)',
      iconImg: 'https://cdn.discordapp.com/attachments/819260584620720162/952975766944092270/icon.jpg'
    },
    pinTime: 5
  },
  { 
    price: 5 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(29,233,182,1)',
      headerBg: 'rgba(0,191,165,1)',
      header: 'rgba(0,0,0,1)',
      authorName: 'rgba(0,0,0,0.541176)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,1)',
      iconImg: 'https://cdn.discordapp.com/attachments/819260584620720162/861879377654317076/unknown.png'
    },
    pinTime: 2
  },
  { 
    price: 2 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(0,229,255,1)',
      headerBg: 'rgba(0,184,212,1)',
      header: 'rgba(0,0,0,1)',
      authorName: 'rgba(0,0,0,0.701961)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,1)',
      iconImg: 'https://cdn.discordapp.com/attachments/819260584620720162/952966347434885210/Honeyview_sad_icon.png'
    },
    pinTime: 0
  },
  { 
    price: 1 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(30,136,229,1)',
      headerBg: 'rgba(21,101,192,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)',
      iconImg: 'https://cdn.discordapp.com/attachments/819260584620720162/861871975239909396/791027489778303006.png'
    },
    pinTime: 0
  }
]

 function getPriceConfig (price) {
  for (const config of PRICE_CONFIGS) {
    if (price >= config.price) {
      return config
    }
  }
  return PRICE_CONFIGS[PRICE_CONFIGS.length - 1]
}

