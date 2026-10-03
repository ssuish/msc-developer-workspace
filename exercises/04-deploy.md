# 04 — Publish with GitHub Actions and Pages

Take-home follow-up to the short deployment recap. Actions runs publishing instructions; Pages hosts the static page. No workflow/YAML edits needed. Start with a public fork and [pushed portfolio commit](03-git.md).

## Enable once

1. Open your fork → Actions. Enable workflows if prompted.
2. Settings → Pages → Build and deployment → choose GitHub Actions.

## Run and check

3. Push a starter/ change on main, or Actions → Deploy portfolio → Run workflow → main. Documentation-only pushes do not trigger this path-filtered workflow.
4. Wait for successful completion; queued/running is not finished.
5. Open exact Pages URL in Settings/run output. Usually `https://YOUR_USERNAME.github.io/msc-developer-workspace/`; renamed repo changes path.
6. Test private browser window/phone width. Repo URL github.com/... shows source, not live portfolio.

Only starter/ uploads. Editing finished/ does not change live page.

| Problem | Check |
| --- | --- |
| No run | Actions enabled, main branch, starter/ change or manual run |
| Failed run | Failed-step logs; Pages source/account/repo access |
| 404 | Wait until deployment finished; use exact URL |
| Old content | Saved starter/ file, commit, push, successful deployment, refresh |
| Missing CSS | styles.css beside HTML; href="styles.css" intact |

**Checkpoint:** another person can open your public URL. [Submit to showcase](../showcase/README.md).

[Official Pages settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
