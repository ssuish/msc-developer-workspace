# First-time setup

[Back to learning path](../README.md#your-learning-path)

A **terminal** is a command window. A **shell** interprets commands. Run one line at a time and press Enter. Do not copy the `$` prompt; replace uppercase placeholders with your values.

## 1. Create a GitHub account

Open [GitHub signup](https://github.com/signup), choose your username, complete signup and verify your email. Sign in and open your profile. Remember your username; it appears in repository/Pages addresses.

A free personal account is enough. GitHub is a website; Git is a separate tool installed on your computer.

## 2. Choose one environment

| Computer | Start with | Alternative |
| --- | --- | --- |
| Windows | [Ubuntu in WSL](wsl.md) + Windows VS Code | Native PowerShell + Git for Windows if WSL is blocked |
| macOS | macOS VS Code + Git + Terminal | WSL does not apply |
| Linux | Linux VS Code + Git + terminal | WSL does not apply |

Keep one checkout in one environment. Windows Git does not automatically configure Ubuntu Git. Windows attendees are encouraged to try WSL; native Windows remains a fallback. Configure/install Git in Ubuntu for the main path.

## 3. Install VS Code

Download [Visual Studio Code](https://code.visualstudio.com/download) for your OS. Follow its installer and open the app. Choose Visual Studio **Code**, the editor used here.

- **Windows:** use the official installer, keep its PATH option, then close/reopen terminals.
- **macOS:** move the app into Applications. For `code .`, open Command Palette (Cmd+Shift+P), then **Shell Command: Install 'code' command in PATH**.
- **Linux:** follow [official distribution-specific instructions](https://code.visualstudio.com/docs/setup/linux).

**File → Open Folder** always provides an alternative to the terminal launcher.

## 4. Install Git in the workspace environment

Windows workshop path: first complete [WSL setup](wsl.md), then install/configure Git inside Ubuntu. Native Windows instructions below are the fallback.

**Windows native fallback:** install [Git for Windows](https://git-scm.com/downloads/win). Default choices are fine; keep Git available from the command line and Git Credential Manager enabled. Open new PowerShell afterward.

**macOS:** run `git --version` in Terminal. If macOS offers Command Line Tools, finish that installation, then retry. [Other official options](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

**Ubuntu / Ubuntu in WSL:** run in its terminal:

```sh
sudo apt update
sudo apt install git
git --version
```

`sudo` requests permission to change system software. Type your Ubuntu password when asked; it may not appear while typing. Other Linux distributions use their own package managers.

**Checkpoint:** `git --version` prints a version rather than “command not found.”

## Tell Git who created the commit

Run in your chosen environment. Replace both placeholders:

```sh
git config --global user.name "Your Name"
git config --global user.email "YOUR_GITHUB_EMAIL"
git config --global --get user.name
git config --global --get user.email
```

These label commits; they do **not** sign you in. `--global` applies to your Git user in this environment. Use a verified email or copy your GitHub no-reply address from **Settings → Emails** for privacy. Never put a password in these settings. [Official Git setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

## 5. Open a terminal

Windows: Start → PowerShell. macOS: Applications → Utilities → Terminal. Linux: your terminal app. WSL: open Ubuntu for Linux commands. Git Bash is another Windows shell; its navigation commands differ from PowerShell.

Start with `pwd` and `ls`. PowerShell also accepts `Get-Location` / `Get-ChildItem`. [Terminal cheatsheet](../cheatsheets/terminal.md).

## 6. Get your project

Continue to [fork, clone and sign in](github-first-repository.md). It explains folders, remote URLs and first-push authentication.

## Browser-only preview

Cannot install today?

1. Workshop repo → **Code → Download ZIP**.
2. Extract it; do not leave files inside the compressed archive.
3. Open extracted `starter/index.html` in your browser.
4. Explore `starter/` and `finished/` while following the talk.

A ZIP has no Git history/remote. To complete Git exercises later, install tools, fork/clone, then copy useful edits into that checkout. Do not create a new nested Git repository to follow this workshop.

## Ready checklist

- [ ] GitHub sign-in works; I know my username.
- [ ] VS Code opens.
- [ ] `git --version` works in my chosen terminal.
- [ ] Git name/email are configured.
- [ ] I know which shell/environment I use.

Next: [fork and clone](github-first-repository.md).
