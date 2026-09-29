# 03 — Review, commit, and push

In your fork's local folder, run:

    git status
    git diff

Read the changes. Check that they are yours, that only intended files changed, and that no private information or secrets were added. Open the actual page in a browser.

Then run:

    git add starter/
    git diff --cached
    git commit -m "Customize portfolio"
    git push

If Git asks for your name or email, follow the prompt to configure them. If push says there is no upstream branch, use git push -u origin main.

Checkpoint: your changed files are visible on your fork's GitHub page. See [Git cheatsheet](../cheatsheets/git.md).
