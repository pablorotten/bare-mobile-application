import Autopass from 'autopass'
import Corestore from 'corestore'
import { join } from 'bare-path'
import { homedir } from 'bare-os'

const dir = join(homedir(), '.autopass-vault')
const pass = new Autopass(new Corestore(dir))
await pass.ready()

const [,, username, password, website] = Bare.argv

if (!username || !password) {
  console.log('Uso: node add.js <username> <password> [website]')
  process.exit(1)
}

await pass.add(username, JSON.stringify(['password', username, password, website || '']))
console.log(`Añadida: ${username}`)
await pass.close()
