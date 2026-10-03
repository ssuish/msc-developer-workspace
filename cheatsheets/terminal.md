# Terminal cheatsheet

Run one line at a time; copy the command, not a `$` prompt. Replace uppercase placeholders. Commands depend on the shell.

| Task | Bash: Ubuntu / macOS / Linux / Git Bash | PowerShell fallback |
| --- | --- | --- |
| Current folder | `pwd` | `Get-Location` or `pwd` |
| List items | `ls` | `Get-ChildItem` or `ls` |
| Enter folder | `cd msc-developer-workspace` | `cd msc-developer-workspace` |
| Parent folder | `cd ..` | `cd ..` |
| Home | `cd ~` | `Set-Location $HOME` |
| Spaces in path | `cd "My Projects"` | `cd "My Projects"` |
| Create project parent | `mkdir -p ~/projects` | `New-Item -ItemType Directory -Path "$HOME\projects" -Force` |
| Open editor here | `code .` | `code .` |
| Git installed? | `git --version` | `git --version` |
| Cancel input/command | Ctrl+C | Ctrl+C |

`.` = current folder; `..` = parent. Relative paths start here; full paths include the root, e.g. `/home/you/...` or `C:\Users\you\...`. Ubuntu `~` is Linux home; `/mnt/c` accesses Windows C:.

Git commands are the same across these shells; navigation/install commands may differ. Show folder/list items before commands that change work.

[Follow the demo](../README.md) · [Help](../guides/repeat-the-demo.md)
