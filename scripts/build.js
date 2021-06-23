const execa = require('execa')

async function buildAll() {
  await execa('yarn', ['workspace', 'azui', 'run', 'build'], { stdio: 'inherit' })
  await execa('yarn', ['workspace', '@azui/docs', 'run', 'build'], { stdio: 'inherit' })
}

buildAll()
