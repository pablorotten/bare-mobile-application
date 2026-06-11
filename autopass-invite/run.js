import PearRuntime from 'pear-runtime'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const workerPath = resolve(__dirname, 'worker.js')

const worker = PearRuntime.run(workerPath)

worker.stdout.on('data', (data) => process.stdout.write(data))
worker.stderr.on('data', (data) => process.stderr.write(data))

worker.on('close', () => process.exit())
