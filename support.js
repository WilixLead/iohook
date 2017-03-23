module.exports = {
  targets: [
    // ['electron', '1.0.2'],
    // ['electron', '1.2.8'],
    // ['electron', '1.3.13'],
    // ['electron', '1.4.15'],
    // ['electron', '1.5.0'],
    // ['electron', '1.6.0'],
    // ['iojs', '1.0.0'],
    // ['iojs', '1.1.0'],
    // ['iojs', '2.0.0'],
    // ['iojs', '3.0.0'],
    // ['node', '0.12.17'],
    // ['node', '4.6.1'],
    // ['node', '5.12.0'],
    // ['node', '6.9.4'],
    // ['node', '7.4.0'],
    ['nw', '0.12.1']
  ],
  abis: {
    electron: {
      '1.0.2': '47',
      '1.2.8': '48',
      '1.3.13': '49',
      '1.4.15': '50',
      '1.5.0': '51',
      '1.6.0': '53'
    },
    nw: {
      '0.12.1': '43'
    },
    iojs: {
      '1.0.0': '42',
      '1.1.0': '43',
      '2.0.0': '44',
      '3.0.0': '45'
    },
    node: {
      '0.10.48': '11',
      '0.12.17': '14',
      '4.6.1': '46',
      '5.12.0': '47',
      '6.9.4': '48',
      '7.4.0': '51'
    }
  }
}
