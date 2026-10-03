# Your first GitHub repository

[Setup first](first-time-setup.md) · [Glossary](glossary.md)

Repository = files and version history. Fork = your online copy. Clone = a checkout on your computer. Fork first, then clone your fork so you can push your own work.

## 1. Fork on GitHub

1. Sign in; open [ssuish/msc-developer-workspace](https://github.com/ssuish/msc-developer-workspace).
2. Select **Fork**, choose your personal account, keep the repo name, create the fork.
3. Confirm URL starts with `github.com/YOUR_USERNAME/`, not `github.com/ssuish/`.
4. Keep it public for this free Pages workshop; files are visible to others.

No empty repository or `git init` is needed: clone includes existing history.

## 2. Choose a local folder

Run only your shell’s block.

**Native Windows fallback (PowerShell):**

```powershell
New-Item -ItemType Directory -Path "$HOME\projects" -Force
Set-Location "$HOME\projects"
```

**macOS / Linux / Ubuntu / Git Bash:**

```sh
mkdir -p ~/projects
cd ~/projects
```

`projects` stores your work; `~` / `$HOME` is your user home. In WSL, keep Linux-tool projects here rather than `/mnt/c`.

## 3. Clone your fork

Your fork → **Code → HTTPS** → copy URL. Replace `YOUR_USERNAME`:

```sh
git clone https://github.com/YOUR_USERNAME/msc-developer-workspace.git
cd msc-developer-workspace
git remote -v
git status
```

Renamed your fork? Use its actual URL/folder. `origin` is a local nickname for the remote URL. Verify it shows your account. Before edits, status should show `main` and a clean working tree.

Existing destination folder? Inspect it; do not delete work or clone inside another copy. [Troubleshooting](troubleshooting.md).

## 4. Open and preview

Run `code .`, or VS Code → **File → Open Folder**. WSL users use a connected window ([WSL guide](wsl.md)).

Open `starter/index.html` through your file manager in a browser; address may begin `file:///`. No server needed. Next: [VS Code walkthrough](vscode-basics.md).

## Sign in for your first push

Public clones often do not ask for sign-in. **Push needs authentication.** Commit email does not provide it. GitHub account passwords are not accepted as Git HTTPS passwords.

### Browser login with a helper

Git for Windows includes Git Credential Manager. Complete its browser login and two-factor prompt when pushing. For macOS/Linux/WSL, install/configure a helper through [GitHub’s platform guide](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git). Windows helpers are not automatically configured in Ubuntu.

Optional alternative: install [GitHub CLI](https://cli.github.com/) in your chosen environment, run `gh auth login`, choose GitHub.com and HTTPS, then agree to authenticate Git. Extra software is not needed for local preview.

### Terminal username/password prompt

Use your GitHub username and a personal access token as the password. Keep tokens out of files, screenshots, repository URLs and commits.

For a personal fork, follow [GitHub’s fine-grained token guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens):

1. **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
2. Choose your account as owner, a short expiry and access to only your workshop fork.
3. Grant repository **Contents: Read and write** for portfolio commits. This guide does not require workflow-file edits.
4. Generate token; paste it only when `git push` requests a password. Input may be invisible. Do not embed it in commands or URLs.

If expired or incorrectly scoped, correct it through the official guide. Organization policies can differ; this workshop uses a personal fork.

## After push

Refresh your fork; open the changed `starter/` file and commit history. Push shares source/history; Pages deployment may still be running.

**Checkpoint:** remote targets your fork and your commit appears online.
