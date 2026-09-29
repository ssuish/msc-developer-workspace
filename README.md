# The Developer Workspace

Build and publish a small developer portfolio while learning how the terminal, editor, Git, GitHub, and deployment fit together. You can finish this project without attending the talk.

## What you will build

A one-page portfolio with a hero, about section, three projects, and contact links. Edit [starter/](starter/). Compare with [finished/](finished/) if you need an example. GitHub Pages publishes only starter/.

## Prerequisites

VS Code, Git, a GitHub account, and a browser. Codex, WSL, containers, and other extensions are optional. No package manager, API key, database, or AI tool is required.

## Quick Start

1. Fork this repository to your personal account. Keep your fork public.
2. Copy your fork's HTTPS URL from **Code**.
3. In a terminal, run: git clone YOUR_FORK_URL
4. Run: cd msc-developer-workspace
5. Run: code .
6. Open starter/index.html in a browser. Edit starter/index.html and starter/styles.css, then refresh.

If the code command is unavailable, use **File → Open Folder** in VS Code.

## Workshop Flow

| Stage | Action | Guide |
| --- | --- | --- |
| Navigate | Open the project | [Terminal exercise](exercises/01-terminal.md) |
| Build | Personalize the page | [Customize exercise](exercises/02-customize.md) |
| Review | Open the page and inspect changes | [Git exercise](exercises/03-git.md) |
| Version | Commit and push | [Git exercise](exercises/03-git.md) |
| Deploy | Enable Pages and open your site | [Deploy exercise](exercises/04-deploy.md) |

## Customize Your Portfolio

Replace the sample name, role, story, three projects, email address, and GitHub link in starter/index.html. Change colors and spacing in starter/styles.css. Open the actual page and check it on a narrow browser window. The finished version is a reference, not a dependency.

## Git Workflow

Run these commands after a useful change:

    git status
    git diff
    git add starter/
    git commit -m "Customize portfolio"
    git push

Status lists changes; diff shows their content; add chooses files; commit records a checkpoint; push sends it to GitHub. See the [Git cheatsheet](cheatsheets/git.md).

## Deploy With GitHub Pages

Your fork includes a workflow that publishes only starter/ on pushes to main.

1. In your fork, open **Actions** and enable workflows when prompted. Forked workflows do not run until enabled.
2. Open **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push a change to main, or use **Actions → Deploy portfolio → Run workflow**.
4. Wait for a successful run. Open the URL shown under **Settings → Pages**. It will usually be https://YOUR_USERNAME.github.io/msc-developer-workspace/.

If the page is missing or old, follow [deployment troubleshooting](exercises/04-deploy.md). GitHub's [Pages source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) explains the settings.

## Using AI

AI is optional. If you use it, start with [explore](prompts/explore.md), then [plan](prompts/plan.md), [build](prompts/build.md), [debug](prompts/debug.md), or [review](prompts/review.md). Inspect the files, open the page, and decide what to keep before committing.

## Submit to Showcase

After your portfolio works, [submit it in the Developer Showcase](https://msc-developer-workspace.quidor-adrean.chatgpt.site/showcase?submit=1). Enter your GitHub username and live GitHub Pages URL, then agree to show them publicly. Your portfolio appears automatically after the form checks the link. See the [showcase guide](showcase/README.md).

## Resources

See [resources.md](resources.md) for first-party documentation.
