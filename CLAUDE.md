# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

The **public** website for the Hopefield community's response to the proposed Phelan Green development — a static site with no build step, served by GitHub Pages at **hopefieldorigins.co.za** (custom domain via the `CNAME` file). Pushed to `https://github.com/annaretief-sa/phelangreen-site.git` (branch `main`). Pushing to `main` *is* the deploy — GitHub Pages picks it up automatically within a minute or two; there is nothing to build or run locally beyond opening a file in a browser.

## The private/public split — read this before adding content

There is a **separate, private** repository, `phelangreen` (a sibling folder, e.g. `../AI Musings/Phelan Green/` locally), holding the community's raw research, internal strategy, and a file of named individuals' contact details (`network.html`). **This repo is public — never copy content from the private repo here without deliberately re-applying the public-safe editorial rule** (see `the-record.html` below): institutions and documents may be named; individuals are referred to by role only, never by name; no advocacy imperatives; no unverifiable speculation. When adding a new page sourced from the private repo's work, treat that rule as a checklist, not a formality.

## Roles, authority & workflow

- **Anna is currently the only person with any access to this site** — push access, the GitHub account, the domain, all of it. She'll give instructions when that needs to change; don't assume a second maintainer exists.
- **Publishing is unilateral by design, for speed.** There is no review-before-push step. Corrections happen publicly, after the fact — via the site itself (`corrections.html`) or in PDF documents — not via a gatekeeper before something goes live.
- This site is a **separate initiative Anna has stood up that works alongside WCEPA**, not a WCEPA-run or WCEPA-branded site. There is no formal affiliation as of this writing — don't imply one (e.g. don't write copy that reads as if WCEPA has signed off on this site or vice versa) unless told that's changed.

## Editorial stance — applies to every page, not just `the-record.html`

Neutral, factual, and deliberately agnostic — politically, religiously, generally. In practice: no naming or shaming, no stated opinions, nothing that could read as defamation, no hearsay presented as fact. `the-record.html`'s public-safe rule (institutions/documents named, individuals by role only) is the sharpest expression of this, but the stance itself governs the whole site, including new pages.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Landing page — what this is, the nearest deadline, links to every page |
| `briefing.html` | The Resident's Briefing — a wrapped copy of the published claude.ai artefact |
| `the-record.html` | The long, fully-sourced companion to the briefing. **Public-safe**: institutions/documents only, no named individuals, no advocacy framing |
| `sources.html` | The public documents and reporting behind the briefing, with reference numbers — no individual names or editorializing |
| `have-your-say.html` | The survey (KoboToolbox, embedded) + a WhatsApp voice-note line |
| `corrections.html` | How to report a mistake or share a missing document/source |
| `privacy.html` | POPIA privacy note |
| `style.css`, `site.js` | Shared style (design tokens, dark mode) and site-wide behaviour (language toggle, live "last updated") |

## Site-wide conventions

- **Identical nav on every page.** A `.topbar`/`.navlinks` bar plus a matching footer `<nav>` repeat on all seven pages, with `aria-current="page"` marking the current page. Adding a page means adding it to *both* the topbar and footer nav blocks on *every existing page*, not just the new one.
- **Bilingual EN/AF via `site.js`**, not per-page duplication: content is written twice inline (`<span lang="en">…</span><span lang="af">…</span>`), and `body.classList.toggle("af")` + matching CSS (`body:not(.af) [lang="af"]{display:none}`) shows one at a time. The choice persists via `localStorage` (`pg_lang`). All pages are marked with a draft-translation banner (`.draftbar` in `style.css`) until an Afrikaans speaker reviews them — still outstanding as of the last commit.
- **Live "Site last updated."** Every footer's `#siteUpdated` span is overwritten at load time by `site.js`, which fetches `https://api.github.com/repos/annaretief-sa/phelangreen-site/commits?per_page=1` (unauthenticated, CORS-open) and formats the latest commit's timestamp — no server, no manual date-editing, ever. It silently keeps the static fallback text if the fetch fails (e.g. offline). This means the displayed date is genuinely just "whenever `main` was last pushed," including unrelated typo fixes — that's intentional (transparency), not a bug to "fix" by filtering commits.
- **ASCII-safe HTML.** All punctuation is HTML entities (`&mdash;`, `&hellip;`, `&eacute;`, etc.), not literal Unicode — this repo exists partly *because* literal em-dashes were rendering as mojibake (`â€"`) on some phone browsers reading the original claude.ai artefacts. Keep new copy entity-escaped. **Confirmed design brief**: the target reader is on a cheap phone with patchy data, not a desktop with a fast connection — this isn't just a historical accident to work around, it's an active constraint. Keep pages light, avoid anything that assumes a strong connection or a modern browser.
- **Shared design tokens** in `style.css`: a light/dark CSS custom-property palette (`--paper`, `--ink`, `--green`, `--slate`, `--ochre`, etc.) matching the house style used across the private repo's artefacts — reuse these variables rather than hardcoding colours.

## Updating `briefing.html`

It's a copy of the published Resident's Briefing artefact (source of record: `../AI Musings/Phelan Green/artefacts/residents-briefing.html` in the private repo) with a thin wrapper. To update: republish the artefact, then replace everything between the `BEGIN briefing content` / `END briefing content` comments with the new HTML. **Keep the `<style>` + `<nav class="site-nav">` block right before `<header class="mast">`** — the Home/Have your say bar — a fresh paste from the artefact will drop it.

## Known open items

(Status as of 13 Sep 2026 — check before assuming otherwise.)
- **WhatsApp voice-note line** — not yet live. `have-your-say.html` shows a "coming soon" callout; the real `wa.me/27XXXXXXXXX` markup is sitting in an HTML comment ready to swap in once a number exists. Anna's target: sourced by the end of that weekend (i.e. ~14 Sep 2026) — ask if it's overdue.
- **Privacy note** (`privacy.html`) — responsible party and contact (`hopefieldorigins@gmail.com`) are filled in, but the page still carries a "Draft — not yet reviewed by an attorney" banner. No attorney has been found yet as of this writing.
- **Afrikaans translations** — drafts are live and toggleable, but not yet checked by a native speaker (`.draftbar` banner on every page). No fixed reviewer — likely to be different volunteers over time, or Anna herself if she has time. Don't assume a review is scheduled.

## Operational facts

- **`hopefieldorigins@gmail.com`** — only Anna has access. Target response time for corrections/tips coming in through it is **48 hours**.
- **KoboToolbox account** (behind the survey) — Anna owns and manages it. As of this writing it's undecided whether anyone reviews incoming submissions alongside her.
- **No visitor analytics or tracking**, and `privacy.html` says so explicitly ("collects nothing you don't type in yourself"). Anna may add analytics later — if that ever happens, `privacy.html` **must** be updated in the same change, not after. If you're asked to add any tracking script and the privacy note hasn't come up, raise it.

## Adding a new document

Copy the pattern used for `briefing.html`/`the-record.html`: wrapper chrome + content, full nav added to it *and* to every other page, a link from `index.html`, and — if it's sourced from the private repo — the public-safe editorial pass applied before it's committed here.
