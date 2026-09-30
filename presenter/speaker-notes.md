# Speaker notes — The Developer Workspace

Presenter: AJQ · 45 minutes · eight chapters / fourteen screens

[Presentation](https://msc-developer-workspace.quidor-adrean.chatgpt.site/#screen-1) · [Attendee repository](https://github.com/ssuish/msc-developer-workspace) · [Showcase](https://msc-developer-workspace.quidor-adrean.chatgpt.site/showcase)

## Delivery reminders

Use these as cues, not a script to read word for word. Pause animated diagrams when explaining one step. Arrow keys or PageUp/PageDown change screens; chapter navigation jumps between topics. Keep commands readable, zoom the editor before sharing, and explain each command before running it. Let attendees watch the tool tour; the starter path is their take-home exercise.

All live edits belong in the separate demo repository. Attendees edit `starter/`; the speaker demo uses `portfolio/`. Say this difference aloud before the Git demo. AI, WSL and containers are optional for attendees. No package install is required for their HTML/CSS portfolio.

## Screen 1 · 00:00–00:02 · Open with the result

**Say:** “By the end, you will understand how an idea becomes a page someone else can open. A workspace is the system around your code—not a collection of extensions.”

**Show:** Open the deployed demo finished portfolio, then return to the opener. Point to the workshop repository link. Explain that everyone gets a plain starter and a finished reference.

**Transition:** “Let’s trace how it leaves your laptop.”

## Screen 2 · 00:02–00:04 · Shipping map

**Say:** “Idea → workspace → code → Git → GitHub → deployment → user. Each tool has one job. Writing the page is one part of shipping it.”

**Show:** Let the icon loop complete, then pause it. Trace the path once; separate Git’s local history from GitHub’s online hosting.

**Checkpoint:** Audience can describe the path to a public URL.

## Screen 3 · 00:04–00:07 · Terminal

**Say:** “The terminal is a text interface. Commands act in your current folder. Before a command changes anything, know where you are.”

**Do:** In the demo checkout, show `pwd`, `ls`, and `code .`. To demonstrate `cd`, start from its parent and enter `msc-developer-workspace-demo`. Use the equivalent shell commands if presenting from PowerShell.

**Explain:** `pwd` shows location; `ls` lists files; `cd` changes folders; `code .` opens this folder. If the launcher fails, use VS Code’s File → Open Folder.

## Screen 4 · 00:07–00:09 · Environment model

**Say:** “The editor you see and the tools running your project may be in different places. With WSL, VS Code can display the interface on Windows while Git and files live in Linux.”

**Show:** Point to the remote indicator and Linux terminal if using WSL. Do not install WSL live. A normal local setup is enough for the starter.

**Transition:** “Now, which tools earn a place at this desk?”

## Screen 5 · 00:09–00:16 · Workspace tour

**Say:** “Every tool should solve a problem.”

**Tour:** Project Manager (1 minute): switching projects. Remote Explorer (2 minutes): where projects run. Containers (at most 1 minute): reproducible environments, not a required setup lesson. Codex panel and editor/terminal/source control (3 minutes): where exploration, edits and review happen.

**Checkpoint:** Describe the problem each tool solves. If behind schedule, skip extension settings and container details.

## Screen 6 · 00:16–00:18 · Smallest useful setup

**Say:** “My setup grew over time. Yours only needs VS Code, Git, a GitHub account, a browser and this repository. Add complexity when it solves a real problem.”

**Show:** Starter and finished folder structure. No required AI tool, build chain or package manager.

## Screen 7 · 00:18–00:20 · Codex workflow

**Say:** “Intent → explore → plan → implement → review → test. AI can help throughout; judgment stays with you.”

**Show:** Pause at Plan and Review. Explain constraints: static HTML/CSS, expected files only, readable mobile layout. Do not promise that a generated page is automatically correct.

## Screen 8 · 00:20–00:25 · Explore, plan, build

**Do:** In the demo `portfolio/`, use the explore and plan prompts from `prompts/`. Ask for a small personal portfolio change. Review the plan, then allow implementation. Tell the agent to modify `portfolio/index.html` and `portfolio/styles.css`; attendee prompts use `starter/`.

**Say:** “First understand the files. Then agree on a small change.”

**Timebox:** If the agent has not produced a reviewable change within two minutes, show the finished reference and continue. Never spend the remaining talk waiting for generation.

## Screen 9 · 00:25–00:27 · Review before keeping

**Do:** Inspect expected files in the diff, open the local page, narrow the browser, check project/contact links. Keep, refine or revert deliberately.

**Say:** “Prompt does not mean done. A working preview and an understood diff are our checkpoint.”

## Screen 10 · 00:27–00:32 · Git live loop

**Show:** Let the command/branch animation run once; pause it while running real commands. The diagram shows a working branch and a push to remote—not a merge.

**Run in the demo checkout:**

```sh
git status
git diff
git add portfolio/
git commit -m "Customize demo portfolio"
git push
```

**Explain:** Status lists changes; diff shows the content; add selects files for the commit; commit records local history; push shares it online. The slide uses `starter/` for attendee forks; the live demo uses `portfolio/`.

**Recovery:** If no changes exist, show an existing commit rather than inventing a meaningless change. If push fails, show local history and the already deployed fallback.

## Screen 11 · 00:32–00:34 · Commit checkpoint

**Say:** “A useful commit is a state you can inspect. Local changed files, recorded history and online history are different things.”

**Show:** The committed diff and GitHub commit page. Check expected files only. Avoid branching/rebasing lessons in this session.

## Screen 12 · 00:34–00:38 · Actions and Pages

**Show:** Demo Actions run, deployment status and public URL. Explain trigger → upload → deployment. If the live run is slow, use the last successful run and open the finished fallback.

**Attendee settings:** Fork → enable Actions → Settings → Pages → GitHub Actions → push a change in `starter/` or Run workflow. Only `starter/` is deployed in the public workshop repository.

**Say:** “Automation repeats the publishing steps. We still check the resulting URL.”

## Screen 13 · 00:38–00:42 · Hand the workspace over

**Show:** Repository QR; keep it still for at least 20 seconds. Open README Quick Start. Show fork, clone/open, edit `starter/`, and deployment instructions. Use the repository URL as a fallback if QR scanning fails.

**Say:** “Start small. Replace the sample content, open the page, commit a useful change and publish it.”

**Checkpoint:** Attendees know which folder to edit and where to find troubleshooting.

## Screen 14 · 00:42–00:45 · Challenge and showcase

**Say:** “Make it yours. Ship it. Share it.”

**Show:** Submit your Portfolio opens the in-site form. Explain username, matching live `username.github.io` URL and public consent. Open Showcase to show usernames and portfolio links. Explain that valid links appear automatically; submitted usernames are not ownership-verified or content-reviewed.

**Do:** Do not submit someone else’s page. Use your own existing entry if demonstrating submission; repeat submission should show the duplicate message. Avoid adding fake test entries to the public directory.

**Close:** “The link is the outcome. The repeatable workflow is the skill.” Finish at 45:00; join the organizer’s Q&A segment afterward.

## Short Q&A answers

- **Do I need Codex or WSL?** No. Both are optional; the starter is static HTML/CSS.
- **Git versus GitHub?** Git records history locally; GitHub hosts the repository online.
- **Why does Pages show the old version?** Check `starter/`, commit/push, Actions status and the exact Pages URL; allow deployment to finish.
- **Can I submit a custom domain?** This temporary form accepts matching GitHub Pages hosts only. Use the `username.github.io` URL.
- **Is a showcase username verified?** No. The form validates the URL/host and availability, not account ownership.
- **Why no packages?** The small static portfolio can run directly in a browser; complexity is optional.
