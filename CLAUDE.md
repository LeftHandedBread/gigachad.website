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

- **Color themes**: dark (default), light, OLED — toggled via `.theme-toggle` button, stored in `localStorage` as `gigachad-theme`, applied as `data-theme` attribute on `<html>`.
- **Retro skins**: off (default), win95 — toggled via `.retro-toggle` button, stored as `gigachad-retro`, applied as `data-retro` attribute on `<html>`.
- `js/theme.js` is loaded in `<head>` (before CSS) on every page to prevent flash of unstyled content.
- `css/retro-win95.css` is included on every page; its rules only activate under `:root[data-retro='win95']`.

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
