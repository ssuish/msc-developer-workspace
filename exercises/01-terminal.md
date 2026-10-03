# 01 — Explore the terminal and project

[Setup](../guides/first-time-setup.md) · [Windows WSL workspace](../guides/wsl.md)

## Before cloning: practice navigation

Open Ubuntu on Windows (or your native macOS/Linux terminal). Run:

```sh
pwd
ls
mkdir -p ~/projects
cd ~/projects
pwd
```

Current folder determines where commands act. `~` is home; `.` is here; `..` is parent. Try `cd ..`, list items, then return to projects. Use [PowerShell equivalents](../cheatsheets/terminal.md) if following native Windows fallback.

## After fork/clone: inspect your repository

Follow [fork/clone guide](../guides/github-first-repository.md) first. In the cloned folder:

```sh
pwd
ls
git status
git remote -v
```

Find README.md, starter/ and finished/. Check origin targets your account. Do not cd into the folder again if already inside it. If renamed, use actual folder name.

When ready for editor stage, `code .` opens this folder; otherwise use File → Open Folder in connected VS Code. Compare integrated terminal pwd with Explorer’s project.

**Checkpoint:** name your environment, locate your clone and explain where the next command acts.
