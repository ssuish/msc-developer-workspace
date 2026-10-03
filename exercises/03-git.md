# 03 — Git concepts, then record through UI or CLI

First: [identity setup](../guides/first-time-setup.md#tell-git-who-created-the-commit), [own fork/clone](../guides/github-first-repository.md).

## Understand before editing

```sh
git status
git remote -v
git log --oneline -3
```

Confirm main, your own fork as origin, and existing history. Press q if log opens a pager. Git is the history engine; VS Code Source Control is its UI.

After [making and previewing a change](02-customize.md), choose **one route** below. UI and CLI operate on the same staging/history; do not repeat an already-created commit.

## Route A — VS Code Source Control

1. Open Source Control. Click changed HTML/CSS under Changes to inspect diff.
2. Use + on intended portfolio files to stage.
3. Inspect Staged Changes; − unstages without deleting edits.
4. Enter a message such as Customize portfolio; choose Commit for intended staged files.
5. … → Push; complete [authentication](../guides/github-first-repository.md#sign-in-for-your-first-push).

Do not select Discard Changes to unstage. Sync may pull/push; use Push for this first upload. Git must work inside Ubuntu for WSL-connected repos.

## Route B — explicit Git CLI

From clone’s project folder:

```sh
git status
git diff
git add starter/
git diff --staged
git commit -m "Customize portfolio"
git push
```

Diff shows unstaged tracked changes. Untracked files appear in status; staged diff includes newly added files. Check intended content before committing.

If no upstream, confirm main/own origin, then `git push -u origin main`. Identity error? Configure Git in chosen environment. No changes? Check saved file and current checkout.

## Confirm online and inspect deeper

Refresh your GitHub fork; find the commit and changed starter/ file. Use CLI `git log --oneline -3` and `git remote -v` for explicit history/destination checks.

For remote updates, inspect status and use a clean checkout with `git pull --ff-only`. If divergent, ask for help reviewing branches; do not force-push. Complex branch/conflict work requires understanding in either interface.

**Checkpoint:** useful commit appears on your fork. Next: [Actions/Pages](04-deploy.md).
