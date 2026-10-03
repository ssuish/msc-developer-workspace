# The Developer Workspace

New to the terminal, VS Code, Git or GitHub? Start here. Build a small portfolio while learning how your files, editor and version history work together.

## Workshop links

- [Presentation](https://msc-developer-workspace.quidor-adrean.chatgpt.site/#screen-1)
- [Live starter example](https://ssuish.github.io/msc-developer-workspace/)
- [Showcase directory](https://msc-developer-workspace.quidor-adrean.chatgpt.site/showcase)

## What you need

A computer, internet and a browser. The full exercise uses **VS Code**, **Git** and a **GitHub account**; [first-time setup](guides/first-time-setup.md) explains how to get them. Windows attendees use **Ubuntu in WSL** as the recommended workshop workspace; native Windows is a fallback. macOS/Linux users use their own terminal. Codex, containers, Node.js, package managers, paid accounts and API keys are not required.

Cannot install today? Use [browser-only preview](guides/first-time-setup.md#browser-only-preview) and return to setup later. Follow the talk without rushing an installation or restart.

## The tools in one minute

| Tool | Job |
| --- | --- |
| Terminal | A window where you type commands |
| VS Code | An editor for reading/changing project files |
| WSL (optional) | A Linux environment inside Windows |
| Git | Records checkpoints of files on your computer |
| GitHub | Hosts repositories online; separate from Git |
| Actions / Pages | Run publishing instructions / host your portfolio |

[Beginner glossary](guides/glossary.md): repository, fork, clone, branch, stage, commit, push and pull.

## Your learning path

| Step | Guide | Ready when… |
| --- | --- | --- |
| 0. Install/sign up | [First-time setup](guides/first-time-setup.md) | Account, editor and Git are ready |
| 1. Enter WSL (Windows) | [WSL workspace](guides/wsl.md) | Ubuntu opens; Git works; Linux project folder exists |
| 2. Navigate terminal | [Terminal exercise](exercises/01-terminal.md) | You can identify current folder and environment |
| 3. GitHub fork/clone | [Fork, clone and sign in](guides/github-first-repository.md) | Your local copy points to your own fork |
| 4. Understand Git | [Git exercise](exercises/03-git.md) | You understand status, stage, commit and push |
| 5. Develop in VS Code | [Editor walkthrough](guides/vscode-basics.md) + [customize](exercises/02-customize.md) | Save/preview changes, use Source Control to record them |
| 6. Publish later | [Actions/Pages](exercises/04-deploy.md) | Public URL shows the portfolio |

Workshop route: **WSL → terminal → GitHub fork/clone/exploration → Git → VS Code → GitHub Actions/Pages**. Source Control is a UI for Git; use CLI for explicit/deeper inspection. Actions/Pages is a short recap; follow its guide afterward at your own pace.

## Already set up? Quick start

1. On [this repository](https://github.com/ssuish/msc-developer-workspace), choose **Fork** and create a public fork under your account.
2. On **your fork**, choose **Code → HTTPS** and copy its URL.
3. Replace `YOUR_USERNAME` below. Run one line at a time; do not copy a `$` prompt.

```sh
git clone https://github.com/YOUR_USERNAME/msc-developer-workspace.git
cd msc-developer-workspace
code .
```

Renamed your fork? Use its copied URL and actual folder name. If `code .` fails, use VS Code → **File → Open Folder**.

4. Open `starter/index.html` in your browser; edit it and `starter/styles.css` in VS Code. Save, then refresh.
5. Review and record the change:

```sh
git status
git diff
git add starter/
git diff --staged
git commit -m "Customize portfolio"
git push
```

First commit/push? Follow [identity setup](guides/first-time-setup.md#tell-git-who-created-the-commit) and [GitHub sign-in](guides/github-first-repository.md#sign-in-for-your-first-push). Saving, committing and pushing are different actions.

## Project map

- `starter/index.html` — your portfolio content.
- `starter/styles.css` — colors, spacing and layout.
- `finished/` — finished reference; starter does not depend on it.
- `guides/`, `exercises/`, `cheatsheets/` — learning materials.
- `prompts/` — optional AI prompts.
- `.github/workflows/deploy-portfolio.yml` — publishing instructions; no YAML editing needed.

**Edit `starter/`. Only `starter/` is published by Pages.** Presenter files and speaker demo work are kept separately.

## Publish and share

In your public fork: enable **Actions**, then **Settings → Pages → GitHub Actions**. Push a `starter/` change or manually run **Deploy portfolio**. [Full deployment guide](exercises/04-deploy.md).

Check the live page, then [submit inside the Site](https://msc-developer-workspace.quidor-adrean.chatgpt.site/showcase?submit=1): GitHub username, matching live Pages URL and public consent. [Showcase guide](showcase/README.md).

## Quick reference and help

[Terminal](cheatsheets/terminal.md) · [VS Code](cheatsheets/vscode.md) · [Git](cheatsheets/git.md) · [GitHub](cheatsheets/github.md) · [WSL](cheatsheets/wsl.md)

[Common problems](guides/troubleshooting.md) · [Glossary](guides/glossary.md) · [Official resources](resources.md)

AI is optional: [explore](prompts/explore.md), [plan](prompts/plan.md), then [build](prompts/build.md). Inspect files and browser output before keeping a change.
