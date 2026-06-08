import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { INITX_MONOREPO } from '../constants'

function readPackageName(path: string): string | null {
  if (!existsSync(path))
    return null

  try {
    const { name } = JSON.parse(readFileSync(path, 'utf8')) as { name?: string }
    return name ?? null
  }
  catch {
    return null
  }
}

export function findInitxMonorepoRoot(startDir: string): string | null {
  let dir = startDir

  while (true) {
    const rootPackageJson = resolve(dir, 'package.json')
    if (readPackageName(rootPackageJson) === INITX_MONOREPO.root) {
      const coreName = readPackageName(resolve(dir, 'packages/core/package.json'))
      const utilsName = readPackageName(resolve(dir, 'packages/utils/package.json'))

      if (coreName === INITX_MONOREPO.core && utilsName === INITX_MONOREPO.utils)
        return dir
    }

    const parent = resolve(dir, '..')
    if (parent === dir)
      return null

    dir = parent
  }
}
