# Dry-run guide — The Developer Workspace

Use with [speaker notes](speaker-notes.md). This is a rehearsal checklist, not a claim that the event rehearsal or attendee fork has already been completed.

## Links to stage in browser tabs

1. [Presentation, screen 1](https://msc-developer-workspace.quidor-adrean.chatgpt.site/#screen-1)
2. [Workshop repository](https://github.com/ssuish/msc-developer-workspace)
3. [Starter public page](https://ssuish.github.io/msc-developer-workspace/)
4. [Demo repository](https://github.com/ssuish/msc-developer-workspace-demo)
5. [Demo live page](https://ssuish.github.io/msc-developer-workspace-demo/)
6. [Finished fallback](https://ssuish.github.io/msc-developer-workspace-demo/finished/)
7. [Showcase](https://msc-developer-workspace.quidor-adrean.chatgpt.site/showcase)
8. [In-site submission form](https://msc-developer-workspace.quidor-adrean.chatgpt.site/showcase?submit=1)

## At least three days before the event

- Send the organizer handoff links, repository and presenter documents to MSC for technical review. Event date is still to be confirmed.
- Provide CV, short biography and recent photo separately; they are not included in this repository.
- Coordinate the technical dry run with the Technology Committee and obtain the Microsoft Teams link.
- Check links in a signed-out/private browser. Presentation and Showcase must be public.
- Download/clone the repository and save a copy of the presentation screens and GitHub Actions/Pages screenshots for an offline fallback.

## Prepare the live demo safely

Keep the attendee repository unchanged. Rehearse edits in the separate demo repository. Before every run, inspect `git status` and preserve useful local changes; do not reset or delete work blindly.

For a fresh rehearsal checkout:

```sh
git clone https://github.com/ssuish/msc-developer-workspace-demo.git demo-rehearsal
cd demo-rehearsal
code .
git status
```

Open `portfolio/index.html`. The demo deploys `portfolio/` to its root URL; the attendee repository deploys `starter/`. Keep the public `/finished/` fallback untouched. You can preview the attendee reference locally at `finished/index.html` in the workshop checkout.

Prepare one small, visible HTML/CSS change: name/intro plus one project card. Instruct Codex to edit `portfolio/` only. The prompt pack in the attendee repo uses `starter/`; adapt that path aloud.

## 45-minute rehearsal timer

| Clock | Screens | Gate |
| --- | --- | --- |
| 00:00–00:04 | 1–2 | Show result; explain shipping map |
| 00:04–00:09 | 3–4 | Current folder understood; project opens |
| 00:09–00:18 | 5–6 | Tool tour finished; optional tools clear |
| 00:18–00:27 | 7–9 | Plan reviewed; diff and preview inspected |
| 00:27–00:34 | 10–11 | Useful demo commit and push shown |
| 00:34–00:38 | 12 | Actions and public URL demonstrated |
| 00:38–00:42 | 13 | Starter path + QR explained |
| 00:42–00:45 | 14 | In-site form + showcase; close on time |

Record actual chapter finish times. If late: shorten extension tour first, then use finished fallback instead of waiting for AI/deployment. Keep the attendee setup and closing instructions.

## Presentation and interaction checks

- Test all fourteen `#screen-N` anchors, Previous/Next, arrows and PageUp/PageDown.
- Check Presentation → Showcase → Presentation returns to remembered screen.
- Pause/Resume each flow and Git animation. Reduced-motion mode should show static diagrams.
- Share at 1280×720 or 1920×1080; zoom the editor so commands and diffs remain legible.
- Check 320px/390px widths; code scrolls inside its panel, not across the whole page.
- Tab through navigation, form and dialog. Escape closes the dialog and restores focus.
- Scan the screen-13 QR with a phone and verify the correct GitHub repository.

## Attendee fork rehearsal — perform before event

Use a rehearsal account or an attendee’s authorized test fork; do not alter the plain upstream starter.

1. Fork the public workshop repository and clone that fork.
2. Open `starter/index.html`; replace sample identity, projects and contact links.
3. Narrow the browser and check content/links.
4. Enable Actions in the fork; choose GitHub Actions in Settings → Pages.
5. Commit and push `starter/`; watch Deploy portfolio finish.
6. Open the exact Pages URL in a private window and on a phone.
7. Submit only your own live page using username, URL and public consent.
8. Confirm the entry appears; reload the directory; repeat submission and check it does not duplicate.

## Submission checks without public test pollution

Use the local preview and API mocks for invalid URL, service failure and fake identities. Production demonstration should use your own legitimate page only. Never intentionally break the live service to show an error.

Backend checks cover duplicate handling, consent, matching Pages hosts, availability, limits and persistence. Browser checks cover success/error states, input retention and immediate directory updates. For a live rehearsal, verify your real link and reload persistence; that is a separate event-day gate.

## Plan A / B / C

- **A — live:** VS Code → Codex → review → Git → Actions → demo URL.
- **B — AI or deployment delay:** Show finished reference, saved diff/screenshots and last successful Actions run. Open the already deployed `/finished/` URL. Continue on time.
- **C — internet/Teams issue:** Open local workshop `finished/index.html` and saved presentation screenshots/export; explain GitHub/Pages using saved screenshots. Live showcase intake needs connectivity, so give its URL for later submission.

For a local Site preview, use the separate presentation source directory: Node 22+, `npm ci`, `npm run build`, then `npm run dev`; open `http://localhost:4173`. This requires setup ahead of time. The direct static `web/index.html` file is not the fallback for a functioning showcase backend.

## Event day

- Join Teams at least 15 minutes before program start.
- Test microphone, screen sharing, readable text, tab switching and QR scanning with the committee.
- Close unrelated tabs, turn off notifications, check authentication and public URLs.
- Keep water, timer, speaker notes and fallback material within reach.
- End at 45 minutes; remain for the interactive Q&A segment.

## Rehearsal record

- Date / operator: __________
- Display, audio and Teams checked: __________
- Anonymous Site access checked: __________
- Fork → deployment → legitimate submission completed: __________
- Actual chapter finish times: __________
- Fallback rehearsal completed: __________
- Remaining issues / owner: __________
