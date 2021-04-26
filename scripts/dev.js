const execa = require('execa')

async function buildAll() {
  await execa('yarn', ['workspace', 'azui', 'run', 'dev'], { stdio: 'inherit' })
}

buildAll()
