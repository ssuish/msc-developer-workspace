# VS Code: develop and use Git through Source Control

VS Code is your editor. The browser renders your page. **Source Control is a user interface for Git**, not a replacement history system: Git still needs to be installed in the project’s environment.

## Open the workspace

WSL route: from the Ubuntu clone run `code .`. Verify WSL/Ubuntu remote status. Native route: File → Open Folder. Explorer should show README.md, starter/, finished/ and learning folders.

If prompted for Workspace Trust, review the source and prompt. No extra extension is needed for the static portfolio or built-in Git UI; WSL connection uses Microsoft’s WSL extension.

## Four useful areas

| Area | Job |
| --- | --- |
| Explorer | Open project files |
| Editor | Read/change/save text |
| Terminal → New Terminal | Run Ubuntu/project commands |
| Source Control | Inspect, stage and commit Git changes |

In the integrated terminal run `pwd`, `ls`, `git status`. Explorer and terminal should show the same checkout.

## Develop manually

1. Open `starter/index.html`; find `Alex Rivera`, replace sample name/role, keeping HTML tags intact.
2. Save: Ctrl+S (Windows/Linux), Cmd+S (macOS).
3. Open that HTML file in the browser. Refresh after saving; unsaved edits cannot appear there.
4. Open `starter/styles.css`; change the existing link rule:

```css
a {
  color: #2448c8;
}
```

5. Save/refresh, narrow the browser, check links and readable layout. The original link color is `#075da8`; edit that rule rather than replacing the whole stylesheet.

HTML carries content; CSS controls appearance. Saving is not a commit. No package manager or server is needed for this portfolio.

## Source Control workflow

1. View → Source Control. Under **Changes**, click a file to inspect its diff (before/after).
2. Hover the intended file and choose **+** to stage it. It moves to **Staged Changes**. Stage only your portfolio files.
3. Inspect staged files. **−** unstages while keeping edits; **Discard Changes** is different and can remove edits—do not choose it for unstaging.
4. Type a useful message, such as `Customize portfolio`, then choose **Commit**. Confirm intended staged files only; do not rely on automatic “stage all” behavior.
5. From Source Control’s **…** menu choose **Push**. Complete authentication if prompted. GitHub then shows the commit.

Menu wording may vary. If choosing **Sync Changes**, understand it can pull and push; use Push for this first simple upload. Do not combine UI and CLI steps blindly—both manipulate the same Git state.

## When to use the Git CLI

The UI is comfortable for routine diffs/staging/commits. The integrated terminal is useful for explicit remote/history checks and diagnosing sync problems:

```sh
git status
git remote -v
git diff --staged
git log --oneline -3
```

More complex branch/conflict work needs understanding and review, not just a different interface. This beginner path does not require merging/rebasing.

## Find editor actions

View → Command Palette; search “Toggle Word Wrap,” “Zoom In” or WSL connection actions. Menus are the fallback when OS/layout shortcuts differ.

[VS Code cheatsheet](../cheatsheets/vscode.md) · [Customize exercise](../exercises/02-customize.md) · [Git UI/CLI exercise](../exercises/03-git.md)
