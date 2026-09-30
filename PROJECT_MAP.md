# PROJECT_MAP.md — gigachad.website

## Project overview

Static HTML/CSS/JS website for **The Gigachad Network** — a self-hosted services and game server community. No framework, no build system; pages are edited directly and served as static files.

## File structure

```
index.html              # Main landing page (services, game servers, articles)
css/styles.css          # Primary stylesheet, CSS variables, shared classes (the active style)
js/theme.js             # Shared utilities (email obfuscation); loaded in every page head
js/animations.js        # Scroll progress bar, floating particles, intersection observers
games/                  # Game server pages (minecraft/, valheim, factorio)
tutorials/              # Setup guides (media/, hosting/, networking/, community/)
services/               # Service pages (Fluxer chat server)
articles/               # Guides (torrenting, under-construction placeholder)
img/                    # Images, logos, signatures, favicons
files/                  # Audio and video assets
```

## Theming system

- `css/styles.css` (original style) is the active theme, linked on every page.
- A legacy `css/retro-win95.css` Win95 skin was removed (unlinked; recover from git history if ever needed).
- No user-facing toggles. The previous `.theme-toggle` and `.retro-toggle` buttons (and the dark/light/OLED + retro on/off logic that powered them) were removed. If you re-add user theming, restore both the buttons and the toggle logic in `js/theme.js`.

## Conventions

- **No frameworks or build tools.** Pure HTML/CSS/JS only.
- Reuse existing CSS classes: `nav-btn`, `service-card`, `service-btn`, `accent-heading`, `section-lead`, `signature`, etc.
- Use CSS variables from `css/styles.css` for colors and theming.
- External links: `target="_blank" rel="noopener noreferrer"`, always `https`.
- Every page includes: `js/theme.js` (in head), `css/styles.css`, a `<div id="particles-container">` after `<body>`, and `js/animations.js` (before `</body>`).
- Keep edits small and surgical. Don't redesign pages or add dependencies unless asked.
- Tone: direct, community-driven, self-hosting/privacy focused.

## Services

Jellyfin, Jellyseerr, AudiobookShelf, NextCloud, Gigachad AI, VPN/WireGuard, Fluxer (self-hosted chat, chat.gigachad.website), Navidrome, Toast Host.

## Game servers

Minecraft (Create, Vanilla, Abyssal Ascent, Beta), Valheim (modded + vanilla), Factorio Space Age.

## Commands

No build/test/lint commands — open HTML files directly in a browser to verify changes.
