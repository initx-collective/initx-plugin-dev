export const INITX_MONOREPO = {
  root: '@initx/monorepo',
  core: '@initx-plugin/core',
  utils: '@initx-plugin/utils'
} as const

export const DEFAULT_SYNC_PACKAGES = [
  'initx',
  INITX_MONOREPO.core,
  INITX_MONOREPO.utils
] as const
