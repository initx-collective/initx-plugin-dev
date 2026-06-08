import type { InitxContext, InitxMatcherRules } from '@initx-plugin/core'
import { InitxPlugin } from '@initx-plugin/core'
import { logger } from '@initx-plugin/utils'
import { linkLocalCoreUtils } from './link'
import { syncCnpmPackages } from './sync'
import { unlinkLocalCoreUtils } from './unlink'

export default class DevelopmentPlugin extends InitxPlugin {
  rules: InitxMatcherRules = {
    matching: 'dev',
    description: 'Development assistance',
    optional: [
      'sync',
      'link',
      'unlink'
    ]
  }

  async handle(_ctx: InitxContext, type: string, ...others: string[]) {
    switch (type) {
      case 'sync': {
        await syncCnpmPackages(others.length === 0 ? undefined : others)
        break
      }

      case 'link': {
        await linkLocalCoreUtils()
        break
      }

      case 'unlink': {
        await unlinkLocalCoreUtils()
        break
      }

      default: {
        logger.warn(`Unknown type: ${type}`)
      }
    }
  }
}
