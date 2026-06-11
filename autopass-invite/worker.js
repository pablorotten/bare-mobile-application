import Autopass from 'autopass'
import Corestore from 'corestore'
import { join } from 'bare-path'
import { tmpdir } from 'bare-os'

const dir = join(tmpdir(), 'autopass-vault')
const pass = new Autopass(new Corestore(dir))
await pass.ready()

const invite = await pass.createInvite()
console.log('INVITE:', invite)

await pass.add('sample-1', JSON.stringify(['password', 'alice@example.com', 'p@ssw0rd1', 'example.com']))
await pass.add('sample-2', JSON.stringify(['password', 'bob@test.org', 's3cret!23', 'test.org']))
console.log('Added sample passwords')

console.log('Vault ready')

await pass.close()
