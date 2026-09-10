# Phelan Green & Hopefield -- public website

Public information site for Hopefield residents about the proposed Phelan Green
fuel-plant and solar development, with a "Have your say" survey and voice-note
line.

**Live site:** _(add once GitHub Pages is switched on)_

This repo is **public**. Keep it to material that is meant for everyone. The
working documents (research file, response strategy, FSR submission draft,
connector pack) live in the separate **private** `phelangreen` repo and must not
be copied here.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Landing page -- what this is, the nearest deadline, links |
| `briefing.html` | The Resident's Briefing (a wrapped copy of the published artefact) |
| `have-your-say.html` | The survey (KoboToolbox) + WhatsApp voice-note line |
| `privacy.html` | POPIA privacy note |
| `style.css`, `site.js` | Shared style and the English/Afrikaans toggle |

All pages are English + a **draft** Afrikaans translation (toggle, top right).
Have an Afrikaans speaker check every page before sharing widely.

## Set-up before launch

Search the pages for `SET-UP NEEDED` and `PASTE_` / `27XXXXXXXXX` / `[ ]`:

1. **KoboToolbox survey** -- build the form (8 questions, from the connector
   pack / listening survey), publish it, and in KoboToolbox choose
   *Collect data -> Online-Offline (multiple submission)*. Paste that link into
   `have-your-say.html` in **both** places: the `data-kobo-src` attribute on the
   `<iframe>` and the fallback `<a href>`.
2. **WhatsApp number** -- a dedicated number for the residents' group (a cheap
   second SIM or a WhatsApp Business number). Put it in `have-your-say.html` in
   international format, digits only, in both the `wa.me/` link and the visible
   text.
3. **Privacy note** -- in `privacy.html`, fill in the responsible-person name and
   a contact email/phone (the `[ ]` placeholders), then have an attorney read it.
4. **Afrikaans check** -- get the draft translation reviewed; remove the orange
   "voorlopige vertaling" banner (`.draftbar` in `style.css`) once it is done.

## Publishing on GitHub Pages

1. Create a **new public repo** on GitHub named e.g. `phelangreen-site`.
2. From this folder:
   ```
   git remote add origin https://github.com/annaretief-sa/phelangreen-site.git
   git push -u origin main
   ```
3. On GitHub: **Settings -> Pages -> Build and deployment -> Source: Deploy from a
   branch -> Branch: `main` / `/ (root)` -> Save.**
4. The site appears at `https://annaretief-sa.github.io/phelangreen-site/` within
   a minute or two.
5. **Custom domain later:** buy a domain, add it under Settings -> Pages -> Custom
   domain (this writes a `CNAME` file), and set the DNS records GitHub shows.

## Updating the briefing

`briefing.html` is a copy of the published Resident's Briefing artefact with a
small HTML wrapper. To update it: republish the artefact, then replace
everything between the `BEGIN briefing content` and `END briefing content`
comments with the new published HTML. The source of record is
`../AI Musings/Phelan Green/artefacts/residents-briefing.html`.

## Adding more documents later

To publish another artefact (e.g. the research file) once it has been reviewed
for public release: copy it in the same way as `briefing.html` (wrapper +
content), add a link on `index.html`, and commit.
