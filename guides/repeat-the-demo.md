# Repeat the demo: turn this starter into my portfolio

[Workshop README](../README.md) · [Presentation](https://msc-developer-workspace.quidor-adrean.chatgpt.site/#screen-1)

**Mission:** personalize the introduction and one project card, review the same change, record it, and publish your own portfolio. This is the attendee route: edit **starter/** in your own fork. The speaker uses a separate demo repository with **portfolio/**; do not copy that folder name here.

Take this at your own pace. Watching the demonstration does not require installing anything during the talk. Windows users try Ubuntu in WSL; macOS/Linux users use their native terminal. If WSL is blocked, follow the native Windows fallback in [setup](first-time-setup.md).

**Your progress:** workspace ready → project downloaded → changes previewed → commit recorded → published.

## 1. Workspace ready — where will my project live?

Before starting, complete [first-time setup](first-time-setup.md) and, on Windows, [WSL setup](wsl.md). Prepare your GitHub account, Windows VS Code with Microsoft's WSL extension, and Git inside Ubuntu. Finish any requested restart before continuing.

In **Ubuntu**, not administrator PowerShell:

```sh
git --version
pwd
mkdir -p ~/projects
cd ~/projects
pwd
ls
```

Your path should be inside your Linux home, such as `/home/you/projects`. Configure Git name/email using [identity setup](first-time-setup.md#tell-git-who-created-the-commit). That identifies commits; authentication for push is separate.

**Think before running:** if your current folder is `/home/you/projects`, where would `mkdir portfolio` create a folder? Answer: `/home/you/projects/portfolio`. You do not need to create it for this exercise.

**Ready when:** you know the current folder, commands run in the intended environment, and Git prints its version. [Terminal cheatsheet](../cheatsheets/terminal.md) · [WSL cheatsheet](../cheatsheets/wsl.md).

## 2. Project downloaded — how do I get my own starter?

1. Open the [workshop repository](https://github.com/ssuish/msc-developer-workspace), choose **Fork**, and create a public copy under your account.
2. On **your fork**, use **Code → HTTPS** and copy its URL.
3. In Ubuntu `~/projects`, replace `YOUR_FORK_URL` below with that URL. Do not type a `$` prompt or a placeholder literally.

```sh
git clone YOUR_FORK_URL
cd msc-developer-workspace
ls
ls starter/
git status
git remote -v
```

Renamed your fork? Enter the actual folder created by clone. If a checkout already exists, inspect and use it instead of cloning inside it. Do not run `git init`; clone already created the repository metadata.

Read the README, identify `starter/index.html` and `starter/styles.css`, and inspect `finished/` as a reference. Keep reference files unchanged. `origin` should point to **your fork**. The repository URL shows code/history; the eventual Pages URL opens the website.

**Ready when:** the starter files are present and the remote owner is your account. [Fork/clone/auth guide](github-first-repository.md) · [GitHub cheatsheet](../cheatsheets/github.md).

## 3. Changes previewed — how do I make it mine?

From the Ubuntu checkout:

```sh
code .
```

Check VS Code's remote indicator says WSL/Ubuntu. Open its terminal and run `pwd` to confirm the same project folder. If the launcher fails, use Command Palette → **WSL: Connect to WSL**, then open the Ubuntu project folder. [WSL connection guide](wsl.md).

Explore four stations: Explorer, editor, integrated terminal, and Source Control. Keep setup simple: the WSL extension is the connection we need; no AI tool, theme pack or web framework is required.

1. Open `starter/index.html` in VS Code.
2. Replace the sample heading with your name, and write a short introduction. Use your actual text, not `YOUR NAME`.
3. Personalize one existing project card: its heading and description. It can describe something you are learning; do not claim work you did not do.
4. Update the page title, footer, and contact placeholders before publishing. Share only details you want public.
5. Save. Open the local HTML in a browser and refresh after edits. From Ubuntu, `explorer.exe .` opens the project in Windows File Explorer; navigate into `starter/` and open `index.html`. If your browser cannot read the WSL path, use the preview troubleshooting in [WSL guide](wsl.md).
6. Check the text, links, and a narrow browser width. Keep `href="styles.css"` intact.

**Ready when:** you can see your saved introduction and project card locally. Local preview is not your deployed website. [VS Code walkthrough](vscode-basics.md) · [Customization exercise](../exercises/02-customize.md) · [Editor cheatsheet](../cheatsheets/vscode.md).

## 4. Review — would I commit this?

Inspect before recording. Source Control → click the intended file under **Changes**, or run:

```sh
git status
git diff
```

Here is an intentionally unfinished review example; do not copy it into your portfolio:

```diff
- <h1>Hi, I'm Alex Rivera.</h1>
+ <h1>Hi, I'm YOUR NAME.</h1>
```

**Would you commit it?** No: the placeholder is still present. Fix it, save, refresh the local preview, and reread the diff. Also check sample footer and contact links. A successful command cannot tell you whether your content is finished.

**Ready when:** the diff contains only changes you intended, with no leftover sample identity. [Git glossary](glossary.md) · [Git cheatsheet](../cheatsheets/git.md).

## 5. Commit recorded — what am I sharing?

Choose **one** recording route. The UI and CLI use the same Git state; do not make a second identical commit to “sync” them.

### Recommended: VS Code Source Control

1. Review the file under Changes.
2. Use **+** to stage the intended file. Inspect **Staged Changes**.
3. Write a message such as `Personalize portfolio introduction and project card`.
4. Commit the intended staged files.
5. Use **… → Push** to your verified fork. Sync may pull and push; explicit Push makes the step clear.

Unstage keeps the edit while removing it from the next commit's selection. **Discard Changes removes edits**; it is not the same operation.

### Alternative: Git CLI

Use this only if you did not already record the change through the UI. Stage individual intended files, not unrelated work:

```sh
git add starter/index.html
git diff --staged
git commit -m "Personalize portfolio introduction and project card"
git push
```

If you intentionally edited CSS too, stage `starter/styles.css` before the staged review. First push needs [GitHub authentication](github-first-repository.md#sign-in-for-your-first-push). A GitHub account password is not an HTTPS Git password; follow the guide and never put tokens in files or URLs.

Inspect either route's result:

```sh
git status
git log --oneline -3
git remote -v
```

Open your fork on GitHub and confirm the new commit. If push fails, the local commit still exists; troubleshoot rather than committing it again or force-pushing.

**Ready when:** the intended commit exists locally and on your own fork. [Git exercise](../exercises/03-git.md) · [Common problems](troubleshooting.md).

## 6. Published — did save update the public website?

**Prediction:** you saved the HTML. Is the public website updated? Not yet: save → review/stage → commit → push → successful deployment.

In your fork:

1. Open **Actions** and enable workflows if prompted.
2. In **Settings → Pages**, select **GitHub Actions** as the publishing source.
3. If the earlier push did not deploy, manually run **Deploy portfolio** on `main`, or push a subsequent intended `starter/` change. Documentation-only changes do not trigger this workflow.
4. Wait for success; open the exact Pages URL from the run or Pages settings.
5. Check that your introduction and project card appear there, and check the link on a phone or narrow window.

The workflow publishes **only starter/**. No YAML edits are needed. [Full deployment exercise](../exercises/04-deploy.md).

**Ready when:** someone else can open your public link and see the intended version.

## 7. Share and reflect

[Submit your portfolio](https://msc-developer-workspace.quidor-adrean.chatgpt.site/showcase?submit=1) using your GitHub username, matching live Pages URL, and public-showcase consent. Valid entries appear automatically; content and account ownership are not manually reviewed. [Showcase details](../showcase/README.md).

Before calling the exercise complete, explain these in your own words:

- Where do my project files live, and where do my commands run?
- What is the difference between a fork and a clone?
- What changed between working files, staging and a commit?
- Why did saving alone not update the public website?

Return to [troubleshooting](troubleshooting.md) for blocked steps, and [official resources](../resources.md) for deeper learning. Repeat one small edit using the same review → commit → push → check deployment loop.

## Official references

[VS Code with WSL](https://code.visualstudio.com/docs/remote/wsl) · [VS Code Source Control](https://code.visualstudio.com/docs/sourcecontrol/overview) · [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
