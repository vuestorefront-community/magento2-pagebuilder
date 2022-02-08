import path from 'path'

// eslint-disable-next-line
export default function m2PageBuilder(moduleOptions) {
  const { pagebuilder } = this.options

  const options = {
    ...pagebuilder,
    ...moduleOptions,
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options,
  })
}
