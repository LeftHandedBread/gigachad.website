# CLAUDE.md — gigachad.website

## Project overview

Static HTML/CSS/JS website for **The Gigachad Network** — a self-hosted services and game server community. No framework, no build system; pages are edited directly and served as static files.

## File structure

```
index.html              # Main landing page (services, game servers, articles)
css/styles.css          # Primary stylesheet, CSS variables, shared classes
css/retro-win95.css     # Windows 95 retro theme skin (activated via data-retro="win95")
js/theme.js             # Theme switcher (dark/light/OLED + retro skins), uses localStorage
js/animations.js        # Scroll progress bar, floating particles, intersection observers
games/                  # Game server pages (minecraft/, valheim, factorio)
tutorials/              # Setup guides (media/, hosting/, networking/)
services/               # Service pages (vaultwarden coming-soon)
articles/               # Guides (torrenting, under-construction placeholder)
img/                    # Images, logos, signatures, favicons
files/                  # Audio and video assets
```

## Theming system

- The Win95 retro skin (`css/retro-win95.css`) is the only active style. `js/theme.js` runs in `<head>` and force-applies `data-retro="win95"` on `<html>` on every page load.
- `css/styles.css` (the non-retro base) is still linked on every page and intentionally kept so the retro skin's overrides have something to override. It is hidden behind the retro overlay; do not delete it.
- No user-facing toggles. The previous `.theme-toggle` and `.retro-toggle` buttons (and the dark/light/OLED + retro on/off logic that powered them) were removed. If you re-add user theming, restore both the buttons and the toggle logic in `js/theme.js`.

## Conventions

- **No frameworks or build tools.** Pure HTML/CSS/JS only.
- Reuse existing CSS classes: `nav-btn`, `service-card`, `service-btn`, `accent-heading`, `section-lead`, `signature`, etc.
- Use CSS variables from `css/styles.css` for colors and theming.
- External links: `target="_blank" rel="noopener noreferrer"`, always `https`.
- Every page includes: `js/theme.js` (in head), `css/styles.css`, `css/retro-win95.css`, and `js/animations.js` (before `</body>`).
- Keep edits small and surgical. Don't redesign pages or add dependencies unless asked.
- Tone: direct, community-driven, self-hosting/privacy focused.

## Services

Jellyfin, Jellyseerr, AudiobookShelf, NextCloud, Gigachad AI, VPN/WireGuard, Vaultwarden (coming soon), Navidrome, Toast Host.

## Game servers

Minecraft (Create, Vanilla, Abyssal Ascent, Beta), Valheim (modded + vanilla), Factorio Space Age.

## Commands

No build/test/lint commands — open HTML files directly in a browser to verify changes.
