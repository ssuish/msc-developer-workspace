# 04 — Deploy with GitHub Pages

This repository contains a GitHub Actions workflow that uploads only starter/. You do not need to write workflow YAML.

1. Open your public fork on GitHub.
2. Open Actions and enable workflows for the fork if prompted.
3. Open Settings → Pages and choose GitHub Actions under Build and deployment.
4. Push a change to main, or select Actions → Deploy portfolio → Run workflow.
5. Wait for a successful workflow run. Open the public URL under Settings → Pages.
6. Check the hero, projects, contact links, and mobile layout on the deployed URL.

A normal project site URL is https://YOUR_USERNAME.github.io/msc-developer-workspace/.

## If it does not work

- No workflow run: confirm Actions are enabled in your fork, and use Run workflow.
- A failed run: open its logs in Actions. Check that Settings → Pages uses GitHub Actions and your branch is main.
- A 404: wait a few minutes, then use the exact URL shown in Settings → Pages.
- Old content: confirm you edited starter/, committed, pushed to main, and opened the latest deployment.
- Missing styles: confirm starter/index.html links to styles.css and both files are in starter/.

Checkpoint: you can open your public portfolio URL in a private browser window.
