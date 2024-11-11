import { type InitxContext, InitxPlugin } from '@initx-plugin/core'
import { c, log } from '@initx-plugin/utils'

export default class DevelopmentPlugin extends InitxPlugin {
  matchers = {
    matching: 'dev',
    description: 'Development assistance'
  }

  async handle(_ctx: InitxContext, type: string) {
    switch (type) {
      // 同步 cnpm 包
      case 'sync': {
        const syncPackages = [
          'initx',
          '@initx-plugin/core',
          '@initx-plugin/utils'
        ]

        log.info(`Syncing cnpm packages: ${syncPackages.join(', ')}`)

        await c('npx', ['cnpm', 'sync', ...syncPackages], {
          nodeOptions: {
            stdio: 'inherit'
          }
        })

        break
      }

      default: {
        log.warn(`Unknown type: ${type}`)
      }
    }
  }
}
