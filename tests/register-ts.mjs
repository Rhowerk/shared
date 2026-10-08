// Lässt die Tests direkt gegen src/*.ts laufen: Die Quellen importieren mit
// ".js"-Endung (für tsc/dist). Node mit Type-Stripping schreibt das nicht um,
// deshalb wird ein relativer ".js"-Import aus einer .ts-Datei auf die
// gleichnamige .ts-Datei umgelenkt, sofern sie existiert.
import { registerHooks } from 'node:module'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith('.') && specifier.endsWith('.js') && context.parentURL?.endsWith('.ts')) {
      const tsUrl = new URL(specifier.slice(0, -3) + '.ts', context.parentURL)
      if (existsSync(fileURLToPath(tsUrl))) return nextResolve(tsUrl.href, context)
    }
    return nextResolve(specifier, context)
  },
})
