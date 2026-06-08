import { PLUGIN_DIR } from '@initx-plugin/core'
import { INITX_MONOREPO } from '../constants'
import { installCorePackagesToPluginDir } from '../shared/install-core-packages'

export async function unlinkLocalCoreUtils() {
  await installCorePackagesToPluginDir(
    [
      `${INITX_MONOREPO.core}@latest`,
      `${INITX_MONOREPO.utils}@latest`
    ],
    'Restoring core packages from registry',
    `Restored registry packages in ${PLUGIN_DIR}`
  )
}
