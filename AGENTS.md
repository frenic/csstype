# AGENTS.md

Rules for AI agents working on this repo. Before any change, read [CONTRIBUTING.md](CONTRIBUTING.md):
generated files, layout, commands, where a fix goes, versioning, how to work through a change.

The maintainer has little time, so keep changes small and make his review easy.

## Rules

1. **Never hand-edit** `index.d.ts` or `index.js.flow`.
2. **Confirm the cause before fixing.** When a build or test breaks, find out why first and write it down.
   A fix must be known to work and must not break anything else.
3. **No releases.** Never run `npm publish`, `npm run release`, `release-it`, `git tag`, or push to `master`.
   The maintainer does releases. Push your own branch only when he has said so.
4. **Ask before anything you can't undo**: deleting branches, rewriting history, changing npm or GitHub settings.
5. **Don't install global tools or extra packages just to investigate.** Use what the repo and Node already have.
   Adding a real project dependency is fine when the task needs it; say why.
6. **Review every output diff.** Summarise what changed in `index.d.ts`: properties and values added,
   removed, changed. **Every removal needs a reason.** Removals break users.
7. **Smallest change that works.** v3 only gets small, safe changes. v4 is a separate rewrite, so don't refactor v3.
8. **Snapshots** in `__tests__/__snapshots__/` are updated on purpose only, with the reason in the commit or PR.
9. **Links for facts.** Versions, changelogs and upstream issues you rely on get a link in the PR.
10. **Plain English, short sentences** in commits and PRs.
11. **Draft upstream reports** (webref, MDN, BCD) for the maintainer. He reviews and files them.
12. **Stop after each change** and give the maintainer a short summary: what changed, what to check, open questions.
    Start the next change only when he says so, unless he has told you to keep going.
