# Git cheatsheet

Git records local history; GitHub hosts it online. VS Code Source Control and Git CLI work on the **same repository/state**. Run project commands from your clone.

| CLI | Meaning | VS Code equivalent when available |
| --- | --- | --- |
| `git status` | Branch/files/staging/sync hints | Source Control lists |
| `git diff` | Unstaged tracked changes | Click file under Changes |
| `git add starter/` | Stage portfolio files | + next to intended file(s) |
| `git diff --staged` | Exact staged content | Click file under Staged Changes |
| `git commit -m "Customize portfolio"` | Record staged changes locally | Enter message → Commit |
| `git push` | Send local commits online | … → Push |
| `git log --oneline -3` | Three recent commits | History/graph where available |
| `git remote -v` | Inspect remote URLs | Terminal inspection |
| `git fetch origin` | Download remote history only | … → Fetch |
| `git pull --ff-only` | Update clean branch only without a merge; stops on divergence | Use terminal for explicit constraint |
| `git restore --staged starter/` | Unstage; preserve edits | − under Staged Changes |

`git diff --cached` also means staged diff. New untracked files are listed in status, not unstaged diff; inspect their editor content. Press q to exit a diff/log pager.

## First identity setup

Replace placeholders:

```sh
git config --global user.name "Your Name"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

Identity does not authenticate push. [Setup](../guides/first-time-setup.md) · [Authentication](../guides/github-first-repository.md#sign-in-for-your-first-push)

## Record a useful change

Save/preview first:

```sh
git status
git diff
git add starter/
git diff --staged
git commit -m "Customize portfolio"
git push
```

Do not run `git init` inside a clone. Do not confuse unstage with discard. Inspect unfamiliar branch/conflict problems before reset or force-push.

[UI/CLI exercise](../exercises/03-git.md)
