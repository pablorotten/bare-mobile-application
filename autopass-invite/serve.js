import PearRuntime from 'pear-runtime'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const workerPath = resolve(__dirname, 'server-worker.js')

const worker = PearRuntime.run(workerPath)

worker.stdout.on('data', (data) => {
  const msg = data.toString()
  console.log(msg)
  if (msg.startsWith('INVITE:')) {
    console.log('\nUse the above invite code to connect your mobile app to the vault.\n')
  }
})
worker.stderr.on('data', (data) => process.stderr.write(data))

process.on('SIGINT', () => {
  worker.close()
  process.exit()
})
