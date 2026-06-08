import { PLUGIN_DIR } from '@initx-plugin/core'
import { logger } from '@initx-plugin/utils'
import { runStageCommand } from 'stagetty'

const STAGE_MAX_LINES = 5

export async function installCorePackagesToPluginDir(
  packages: string[],
  title: string,
  successMessage: string
): Promise<boolean> {
  try {
    await runStageCommand(
      title,
      'npm',
      ['install', ...packages, '--prefix', PLUGIN_DIR],
      { maxLines: STAGE_MAX_LINES }
    )
  }
  catch (error) {
    logger.error((error as Error).message)
    return false
  }

  logger.success(successMessage)
  return true
}
