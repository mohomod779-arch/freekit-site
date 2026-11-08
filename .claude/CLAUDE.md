# freekit.me — static site (GitHub Pages)

Plain HTML/CSS, no build step. Branch `main` is published by GitHub Pages (~1-3 min lag). Custom domain is set by `CNAME` — never edit it.
Audience: Arabic-speaking beginners. Pages are `lang="ar" dir="rtl"`.

## Brand: FreeKit Deep Flow v3 (single source: `assets/v3.css`)
- Background `#060A14`, accent cyan `#35D6E8`, secondary sky `#7DD3FC` (code lines), red `#F87171` for warnings only.
- LEGACY, forbidden in any new or edited material: lime `#B4F461` / `#9BC53D` and navy `#0B0F1C`. If you see them, report; do not copy them.
- Use the CSS variables in `assets/v3.css` (`--bg`, `--accent`, `--text`, ...), not hard-coded hex values in pages.
- Fonts: IBM Plex Sans Arabic for Arabic, JetBrains Mono for Latin/numerals/code.
- Latin terms and slash commands inside Arabic text must be wrapped in `<bdi>` (e.g. `<bdi>/remote-control</bdi>`).
- Check every page at 360px width: no horizontal scroll (past bug: a `.meta` nowrap class clash).

## A new page is NOT done until
1. `index.html`: nav link, archive `<li>` entry, and footer (`foot-lib`) link.
2. `sitemap.xml` entry (and `feed.xml` item if it is a content page).
3. Live check with `curl` on the live homepage and the new URL. Cloud sessions usually cannot reach freekit.me: say "live verify pending" instead of claiming it is done.

## Content rules
- Facts about Claude/Anthropic/other tools must be checked against the official docs before they go on a public page. Never invent commands, flags, model names or links.
- Never put secrets, tokens, `.env` values or personal data in any file.

## Git
- Conventional commits, short English message (`feat:`, `fix:`, `chore:`, `docs:`).
- No automated signatures or Co-Authored-By lines.
- Work on a branch and open a PR. Never push to `main`; the owner merges (merging = publishing).
