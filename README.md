# The Developer Workspace

**Turn this starter into your personal portfolio.** Follow this page from setup to a public link.

[Presentation](https://msc-developer-workspace.quidor-adrean.chatgpt.site/#screen-1) · [Live starter](https://ssuish.github.io/msc-developer-workspace/) · [Showcase](https://msc-developer-workspace.quidor-adrean.chatgpt.site/showcase)

## What’s here

- **starter/** — edit `index.html` and `styles.css`.
- **guides/** — one help guide for blocked steps and further reading.
- **cheatsheets/** — quick reminders for WSL, terminal, VS Code, Git and GitHub.

The included GitHub Actions workflow publishes **only starter/**. No Node.js, AI tool, package installation or application server is needed for this HTML/CSS portfolio.

## 1. Prepare your workspace

You need a computer, browser, [GitHub account](https://github.com/signup) and [VS Code](https://code.visualstudio.com/download). Verify your GitHub email.

**Windows:** our demo uses Ubuntu inside WSL, with VS Code installed on Windows. On supported Windows 10/11, open **PowerShell as administrator**:

```powershell
wsl --install
```

Restart if requested. Open **Ubuntu** and create its Linux username/password; these are separate from your GitHub account. Install Microsoft's **WSL** extension in Windows VS Code. [Official WSL installation](https://learn.microsoft.com/en-us/windows/wsl/install).

In **Ubuntu**, install Git:

```sh
sudo apt update
sudo apt install git
git --version
```

Password input may be invisible. Windows Git and Ubuntu Git are separate installations.

**macOS/Linux:** use native VS Code and your terminal; no WSL needed. Install Git using [official instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). WSL blocked on Windows? Use PowerShell and [Git for Windows](https://git-scm.com/downloads/win) as a fallback.

In your chosen terminal, replace these values:

```sh
git config --global user.name "Your Name"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

Use your verified email or GitHub no-reply address from **Settings → Emails**. This identifies commits; it does not sign you in.

## 2. Get your own starter

A **fork** is your online copy; a **clone** is its local working copy.

1. On [this repository](https://github.com/ssuish/msc-developer-workspace), choose **Fork** and create a public fork under your account.
2. On **your fork**, choose **Code → HTTPS** and copy its URL.
3. In Ubuntu/macOS/Linux, create a project folder:

```sh
mkdir -p ~/projects
cd ~/projects
pwd
```

In the PowerShell fallback, use `mkdir projects` once and `cd projects` instead. In WSL, keep Linux projects under your Linux home rather than `/mnt/c`.

4. Replace `YOUR_FORK_URL` and run one line at a time:

```sh
git clone YOUR_FORK_URL
cd msc-developer-workspace
ls
git status
git remote -v
code .
```

Renamed your fork? Enter its actual folder. Confirm `origin` points to **your account**. Do not clone inside another checkout or run `git init`.

**Check:** you know your current folder, and VS Code shows WSL/Ubuntu when using WSL. If `code .` fails, use Command Palette → **WSL: Connect to WSL**, then open the Ubuntu folder. Native users can use **File → Open Folder**.

## 3. Make it your portfolio

In VS Code, open **starter/index.html**:

1. Replace the sample name and introduction.
2. Personalize one existing project card.
3. Update the page title, footer and contact links. Remove remaining sample identity; share only details you want public.
4. Save. Open `starter/index.html` in your browser and refresh after each edit. In Ubuntu, `explorer.exe .` opens your folder in Windows File Explorer; enter `starter/` and open the HTML file.
5. Check the text, links and a narrow browser width. Keep `href="styles.css"` intact. Edit **starter/styles.css** if you want to change styling.

**Check:** your introduction and project card appear in the local preview. Saving has not updated the public website.

## 4. Review, commit and push

Use **VS Code Source Control** for the everyday loop:

1. Click the file under **Changes** and read the diff. Fix leftover placeholders such as `YOUR NAME`.
2. Click **+** beside intended files to stage them; inspect **Staged Changes**.
3. Enter `Personalize portfolio introduction and project card`, then **Commit**.
4. Use **… → Push**, then confirm the commit on your GitHub fork.

Unstage keeps your edits; **Discard Changes removes them**. Sync may pull and push; use explicit Push here.

**CLI alternative:** use this instead of the UI route, not again afterward:

```sh
git status
git diff
git add starter/
git diff --staged
git commit -m "Personalize portfolio introduction and project card"
git push
```

UI and CLI share the same repository/history. For deeper inspection: `git log --oneline -3` and `git remote -v`.

**First push:** complete your credential helper's browser sign-in. Ubuntu may need a helper configured separately from Windows. If a terminal asks for a password, use a GitHub personal access token, not your account password. [Authentication help](guides/repeat-the-demo.md#push-sign-in).

**Check:** the intended commit appears on your own fork. A failed push does not erase the local commit.

## 5. Publish with Actions and Pages

In your public fork:

1. Open **Actions** and enable workflows if prompted.
2. Open **Settings → Pages**; select **GitHub Actions** as the source.
3. In Actions, select **Deploy portfolio → Run workflow → main**. Later pushes changing `starter/` on `main` run it automatically.
4. Wait for success. Open the exact public URL shown in Pages settings or the run output.
5. Check the live page on a phone or narrow window.

Usually the URL is `https://YOUR_USERNAME.github.io/msc-developer-workspace/`; renamed repositories change the path. The GitHub repository URL shows code, not the live website. Documentation-only pushes do not deploy.

**Check:** your public page shows the intended version. Remember: **save → stage/commit → push → successful deployment**.

## 6. Share what you shipped

[Submit your portfolio](https://msc-developer-workspace.quidor-adrean.chatgpt.site/showcase?submit=1): GitHub username, matching live GitHub Pages URL and public consent. Valid submissions appear automatically; content and account ownership are not manually reviewed. Submit only your own work.

## Quick reference

[WSL](cheatsheets/wsl.md) · [Terminal](cheatsheets/terminal.md) · [VS Code](cheatsheets/vscode.md) · [Git](cheatsheets/git.md) · [GitHub](cheatsheets/github.md)

Stuck? [One help guide](guides/repeat-the-demo.md) covers setup, sign-in and publishing problems. Cannot install today? Download ZIP, extract it and preview `starter/index.html`; use fork/clone later to get Git history.
