# Common problems

First ask: which environment, which folder, which remote? Read the actual error before running another command.

| Symptom | Next check |
| --- | --- |
| Git not found | Install Git in this environment, reopen terminal; Ubuntu Git differs from Windows Git. [Setup](first-time-setup.md) |
| code not found | Use connected VS Code/File → Open Folder; check launcher/PATH. [WSL](wsl.md) |
| cd cannot find folder | Run pwd/ls; check spelling and parent; quote paths with spaces |
| Clone destination exists | Inspect existing checkout; do not delete edits or create a nested clone |
| Not a Git repository | Enter cloned folder with README.md and .git; ZIP downloads have no Git metadata |
| Wrong VS Code files / Git unavailable | Check WSL status, opened folder and Ubuntu git --version |
| Edit missing in browser | Save correct starter/ file; refresh correct local/live tab; check CSS path |
| Author identity unknown | Configure name/email in project environment. [Identity setup](first-time-setup.md#tell-git-who-created-the-commit) |
| Nothing to commit | Change may be unsaved, already recorded, or in another checkout |
| git diff seems empty | Staged changes use git diff --staged; untracked files appear in status |
| Push permission/auth error | Check own-fork remote, account, credentials. GitHub account password is not a Git HTTPS password. [Sign-in](github-first-repository.md#sign-in-for-your-first-push) |
| Push rejected / non-fast-forward | Preserve edits, inspect status/history. Fetch; with a clean checkout, pull --ff-only. If divergence remains, ask for help; do not force-push |
| No upstream for main | Confirm current branch main and own-fork origin, then git push -u origin main |
| Long diff/log traps terminal | Press q if in a pager |
| Continuation prompt | Unclosed quote may be waiting; Ctrl+C cancels input, then retype |
| WSL cannot install | Follow Microsoft guide/IT support; use native Windows fallback today |
| Pages 404/old/failed | See [deployment guide](../exercises/04-deploy.md) |
| Showcase rejects URL | Matching live username.github.io host and consent required; wait for deployment |

## Wrong remote?

If origin points to upstream ssuish rather than your own fork, replace the username and verify:

```sh
git remote set-url origin https://github.com/YOUR_USERNAME/msc-developer-workspace.git
git remote -v
```

Use actual name if your fork was renamed. This changes destination, not commit history.

## Ask for help

Provide OS, terminal type, folder, attempted action and exact error. Remove credentials before sharing. Do not use delete/reset/force-push commands from unrelated tutorials to make an error disappear.

[Learning path](../README.md#your-learning-path)
