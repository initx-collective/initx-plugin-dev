## initx-plugin-dev

Development assistance plugin for initx.

## Functions

### Sync cnpm packages

Synchronize cnpm `initx`, `@initx-plugin/core`, `@initx-plugin/utils` packages:

```bash
npx initx dev sync
```

### Link local core/utils

When run inside the initx monorepo, link local `packages/core` and `packages/utils` into the initx plugin directory (`PLUGIN_DIR` from `@initx-plugin/core`):

```bash
npx initx dev link
```

Requires `@initx/monorepo` at the repo root and matching package names under `packages/core` and `packages/utils`.

### Unlink local core/utils

Restore `@initx-plugin/core` and `@initx-plugin/utils` from the npm registry in the initx plugin directory. Can be run from any directory:

```bash
npx initx dev unlink
```
