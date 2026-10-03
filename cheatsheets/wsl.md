# WSL cheatsheet — Windows workshop path

| Where | Command/action | Job |
| --- | --- | --- |
| Administrator PowerShell | `wsl --install` | Install Linux/WSL; restart/setup may be needed |
| PowerShell | `wsl --list --verbose` | Installed distro names/versions |
| Start | Open Ubuntu | Enter Linux workspace |
| Ubuntu | `pwd`, `ls`, `cd` | Navigate files |
| Ubuntu | `mkdir -p ~/projects` | Create Linux project parent |
| Ubuntu checkout | `code .` | Open Windows VS Code connected to folder |
| Ubuntu checkout | `explorer.exe .` | Open folder in Windows File Explorer |
| VS Code | Microsoft WSL extension/status | Connect and confirm Ubuntu context |

`~` = Linux home. `/home/you/projects` = Linux projects. `/mnt/c` = Windows C: mount. Keep Linux-tool checkouts in Linux’s filesystem. Ubuntu Git identity/auth is separate from Windows Git.

Linux CLI tooling + Windows editor is the benefit demonstrated. Native Windows is fallback if installation is blocked; macOS/Linux do not need WSL. Install/restart before the talk.

[Workspace setup](../README.md#1-prepare-your-workspace) · [Terminal](terminal.md)
