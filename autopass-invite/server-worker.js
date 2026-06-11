import Autopass from 'autopass'
import Corestore from 'corestore'
import { join } from 'bare-path'
import { homedir } from 'bare-os'
import goodbye from 'graceful-goodbye'

const dir = join(homedir(), '.autopass-vault')
const pass = new Autopass(new Corestore(dir))
await pass.ready()

let count = 0
for await (const _ of pass.list()) count++

if (count === 0) {
  await pass.add('sample-1', JSON.stringify(['password', 'alice@example.com', 'p@ssw0rd1', 'example.com']))
  await pass.add('sample-2', JSON.stringify(['password', 'bob@test.org', 's3cret!23', 'test.org']))
  console.log('Sample passwords added')
}

const invite = await pass.createInvite()
console.log('INVITE:', invite)
console.log('Vault path:', dir)
console.log('Vault seeding... esperando conexiones')

goodbye(() => pass.close())

pass.on('update', () => {
  console.log('Vault actualizado')
})
