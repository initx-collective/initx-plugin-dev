import { resolve } from 'node:path'
import process from 'node:process'
import { PLUGIN_DIR } from '@initx-plugin/core'
import { logger } from '@initx-plugin/utils'
import { INITX_MONOREPO } from '../constants'
import { installCorePackagesToPluginDir } from '../shared/install-core-packages'
import { findInitxMonorepoRoot } from './initx-monorepo'

export async function linkLocalCoreUtils(cwd = process.cwd()) {
  const root = findInitxMonorepoRoot(cwd)
  if (!root) {
    logger.error('Not in initx monorepo, cannot link local core/utils')
    return
  }

  const corePath = resolve(root, 'packages/core')
  const utilsPath = resolve(root, 'packages/utils')

  await installCorePackagesToPluginDir(
    [
      `${INITX_MONOREPO.core}@file:${corePath}`,
      `${INITX_MONOREPO.utils}@file:${utilsPath}`
    ],
    'Linking local core packages',
    `Linked local packages to ${PLUGIN_DIR}`
  )
}
