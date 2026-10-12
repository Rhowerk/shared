// Schreibt tests/fixtures/arzt-baseline.json. NUR vor der Berufsgruppen-Änderung ausführen.
import { mkdirSync, writeFileSync } from 'node:fs'
import { REGISTRY } from '../src/registry.ts'
import { arztBaseline } from './arzt-baseline.ts'

const ids = REGISTRY.map(e => e.id)
if (ids.some(id => id.startsWith('hp_'))) {
  throw new Error('[arzt-baseline] Registry enthält schon hp_-Einträge – Baseline nur vor der Änderung erzeugen')
}
mkdirSync(new URL('./fixtures/', import.meta.url), { recursive: true })
writeFileSync(new URL('./fixtures/arzt-baseline.json', import.meta.url), JSON.stringify(arztBaseline(ids), null, 2) + '\n')
console.log(`[arzt-baseline] ${ids.length} Fachrichtungen geschrieben`)
