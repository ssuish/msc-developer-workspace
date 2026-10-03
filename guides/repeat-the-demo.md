# Demo help and further reading

**[Follow the demo in the README](../README.md).** It contains the complete setup → edit → commit → publish → share route. This page is for when a step blocks you.

## Quick fixes

| Problem | Check |
| --- | --- |
| WSL installation blocked | Finish restart/setup; use [Microsoft troubleshooting](https://learn.microsoft.com/en-us/windows/wsl/troubleshooting). Native Windows is a fallback. |
| Git not found | Install Git in the environment running the command; Ubuntu Git is separate from Windows Git. |
| Clone folder already exists | Inspect and use the existing checkout; do not delete work or clone inside it. |
| code . fails in WSL | Windows VS Code + Microsoft WSL extension; Command Palette → WSL: Connect to WSL → open your Ubuntu folder. |
| Browser cannot open WSL HTML | Check the path via explorer.exe .; use a native checkout fallback if needed, preserving your edits. |
| Commit asks for identity | Set user.name and user.email in your workspace environment; see README step 1. |
| Nothing to commit | Save the file, inspect git status and Staged Changes. You may already have committed it. |
| Push rejected | Verify origin points to your fork. Read the error; do not force-push. Preserve edits before resolving remote changes. |
| Pages has no run | Enable Actions, choose Pages source GitHub Actions, manually run Deploy portfolio on main. |
| Page shows old content | Check saved starter/ file → commit → push → successful run; refresh the exact Pages URL. |

## Push sign-in

Commit identity does not authenticate push. Use a credential helper's browser login; [GitHub's platform instructions](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git) cover setup. Windows helpers are not automatically configured in Ubuntu.

If Git asks for a terminal password, use a personal access token. For this personal fork, follow [GitHub's token instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens): choose your account, a short expiry, only your fork, and **Contents: Read and write**. This exercise does not edit workflow files. Paste the token only at the password prompt; never put it in files, screenshots or URLs.

## Learn more

[WSL installation](https://learn.microsoft.com/en-us/windows/wsl/install) · [VS Code with WSL](https://code.visualstudio.com/docs/remote/wsl) · [Source Control](https://code.visualstudio.com/docs/sourcecontrol/overview) · [Git book](https://git-scm.com/book/en/v2) · [Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

[Finished speaker example](https://ssuish.github.io/msc-developer-workspace-demo/finished/) · [All cheatsheets](../README.md#quick-reference)
