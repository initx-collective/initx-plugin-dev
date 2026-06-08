import type { InitxContext, InitxMatcherRules } from '@initx-plugin/core'
import { InitxPlugin } from '@initx-plugin/core'
import { c, logger } from '@initx-plugin/utils'

export default class DevelopmentPlugin extends InitxPlugin {
  rules: InitxMatcherRules = {
    matching: 'dev',
    description: 'Development assistance',
    optional: [
      'sync'
    ]
  }

  async handle(_ctx: InitxContext, type: string, ...others: string[]) {
    switch (type) {
      // 同步 cnpm 包
      case 'sync': {
        const syncPackages = others.length === 0
          ? [
              'initx',
              '@initx-plugin/core',
              '@initx-plugin/utils'
            ]
          : others

        logger.info(`Syncing cnpm packages: ${syncPackages.join(', ')}`)

        await c('npx', ['cnpm', 'sync', ...syncPackages], {
          nodeOptions: {
            stdio: 'inherit'
          }
        })

        break
      }

      default: {
        logger.warn(`Unknown type: ${type}`)
      }
    }
  }
}
