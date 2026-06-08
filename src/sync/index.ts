import { logger } from '@initx-plugin/utils'
import { runStageCommand } from 'stagetty'
import { DEFAULT_SYNC_PACKAGES } from '../constants'

const STAGE_MAX_LINES = 5

export async function syncCnpmPackages(packages: string[] = [...DEFAULT_SYNC_PACKAGES]) {
  try {
    await runStageCommand(
      `Syncing cnpm packages: ${packages.join(', ')}`,
      'npx',
      ['cnpm', 'sync', ...packages],
      { maxLines: STAGE_MAX_LINES }
    )
  }
  catch (error) {
    logger.error((error as Error).message)
    return
  }

  logger.success('Cnpm packages synced')
}
