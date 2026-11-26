# Contributing

How csstype is built, tested and changed. For humans and AI agents. Agents also follow [AGENTS.md](AGENTS.md).

## What this is

csstype is TypeScript and Flow type definitions for CSS, generated from web platform data.
Libraries like `@types/react`, Emotion and Vue depend on it, so a wrong or removed type can break many builds.
Be careful with output changes.

## Generated files: never edit by hand

- `index.d.ts` and `index.js.flow` are **generated**. Never edit them directly.
- Change the generator (`src/`) or the data, then run `npm run build`.
- Both files are committed so every change can be reviewed in the diff.
- `.gitattributes` uses `merge=ours` for them. After cloning, run once:
  `git config merge.ours.driver true`

## Layout

| Path | What it is |
| --- | --- |
| `build.ts` | Entry point: generate → format with prettier → write files → run dist tests |
| `update.ts` | Checks npm for new minor/patch releases of BCD and `@webref/css`, bumps, rebuilds. Interactive: asks y/n, commits and tags. `--yes`: no prompts, prints a diff summary and leaves the tree for review |
| `src/declarator.ts` | Builds the declarations from all collections |
| `src/collections/` | Properties, at-rules, selectors, data types, syntaxes, attributes |
| `src/syntax/` | `parser.ts` (css-tree value syntax) and `typer.ts` (syntax → types) |
| `src/utils/compat.ts` | Browser compat data (BCD): vendor prefixes, obsolete, support tables |
| `src/data/css.ts` | The `@webref/css` data (`css.json`), read once and indexed by name |
| `src/data/patches.ts` | Manual fixes for properties and syntaxes where the data is wrong or missing |
| `src/data/svg.ts` | SVG properties and syntaxes not in the CSS data |
| `src/data/legacy.ts` | Local data webref lacks, copied from mdn-data 2.37.2 (CC0) |
| `src/data/types.ts` | Base CSS types the typer maps to `string` |
| `src/typescript.ts`, `src/flow.ts` | Emit TypeScript and Flow output |
| `__tests__/src.*.ts` | Unit tests for the generator |
| `__tests__/dist.*.ts` | Type tests: one fixture checked on many TS versions + Flow, with snapshots |
| `__tests__/__fixtures__/` | `typecheck.ts` / `typecheck.js`: code that must pass or fail |
| `is-clean.ts` | CI check: fails if the build changed any committed file |

## Commands

| Command | What it does |
| --- | --- |
| `npm ci` | Install |
| `npm run prepublish` | Installs the TS versions used by the type tests (`__tests__`, `__tests__/__fixtures__`) |
| `npm run build` | Generate, format, write and type-test the output |
| `npm run watch` | Build on every save in `src/` |
| `npm run test:src` | Generator unit tests |
| `npm run test:dist` | Type tests on all TS versions + Flow |
| `npm run test` | All tests |
| `npm run lazy` | `tsc` + lint |
| `npx tsx is-clean.ts` | Check that the working tree is clean (as CI does after build) |

CI (`.github/workflows/checks.yaml`, Node 24): `npm ci` → `test:src` → `build` → `is-clean`.
So **always commit the regenerated output** together with the change that caused it.

## How types are made

1. Read CSS data: properties, at-rules, syntaxes, selectors (`@webref/css`, with local data in `src/data/`).
2. Read browser compat data (`@mdn/browser-compat-data`) for vendor prefixes, obsolete features and the
   support tables in the JSDoc.
3. Parse each value syntax with css-tree and turn it into TypeScript types.
4. When the typer meets syntax it doesn't understand, or that is too complex, it **falls back to
   `string & {}`**. That keeps autocomplete for the known keywords, but allows any string.
5. Emit namespaces and variants: `Standard`, `Vendor`, `Obsolete`, `Svg`; camelCase, `Hyphen`,
   `Fallback`, `HyphenFallback`; generics `TLength` and `TTime`.

## Where a fix goes

- **Wrong or missing type for a property** → first check whether the data is wrong. If it is, add a patch in
  `src/data/patches.ts` with a comment linking the spec, and report it upstream.
- **Generator bug** (the data is right, the output is wrong) → fix `src/`, and add a unit test in `__tests__/src.*.ts`
  if it is easy to cover.
- **SVG-only property** → `src/data/svg.ts`.
- Then `npm run build`, and review the `index.d.ts` diff.

## Versioning

csstype doesn't follow semver strictly. Any type change can break someone's code, so the version says what
kind of change it is:

- **Patch**: a data bump. Types may get wider or narrower when the data changes.
- **Minor**: a new feature in the generator (e.g. a new data source, like webref in 3.3).
- **Major**: a break for libraries that build on csstype, such as `@types/react` or Emotion.
  For example: exported types, namespaces or generics renamed or removed, or the minimum TypeScript version raised.

Patches can still break users, so release notes flag every removal and narrowing.

## Working through a change

1. Branch from an up-to-date `master`. Branch names: `v3/<short-name>`.
2. Read the code you will touch before changing it.
3. Make the change. Run `npm run lazy`, `npm run test:src` and `npm run build`.
4. If something fails, find out why first and write it down before trying a fix.
5. Review the `index.d.ts` diff: properties and values added, removed, changed. Give every removal a reason.
6. Commit the regenerated output with the change. Commits: present tense, e.g. "Bump @mdn/browser-compat-data to 8.1.9".
