# Copilot Instructions for `gigachad.website`

## Project overview
- This repo is a **static HTML/CSS/JS website** for **The Gigachad Network**.
- Purpose: showcase self-hosted services, game servers, and tutorials.
- There is no framework/build system; pages are edited directly.

## Core structure
- `index.html` is the main landing page and service/game hub.
- `css/styles.css` contains the main styling system and shared visual language.
- `js/` contains lightweight client-side scripts (search, animations, etc.).
- Content pages are grouped by area:
  - `tutorials/` (media, networking, hosting)
  - `games/`
  - `services/`
  - `articles/`

## Editing conventions
- Prefer **small, surgical edits** to existing files.
- Keep existing tone: direct, community-driven, self-hosting/privacy focused.
- Reuse existing classes (`nav-btn`, `service-card`, `service-btn`, etc.) instead of introducing new patterns unless necessary.
- Use existing color/style system from `css/styles.css` (CSS variables and current palette).
- Preserve current relative/absolute path style used in each file.

## Link/content rules
- Use `https` for public service URLs (e.g. `https://ai.gigachad.website`).
- For external links opened in a new tab, prefer `target="_blank"` and `rel="noopener noreferrer"`.
- Keep tutorial instructions practical and concise.
- Do not add placeholder or speculative facts about services/versions.

## Scope guardrails
- Do not redesign pages unless explicitly requested.
- Do not add new dependencies or tooling unless explicitly requested.
- Do not move files/folders unless explicitly requested.
- Keep changes focused on the user’s request and avoid unrelated refactors.

## Quick quality check after edits
- Confirm links are valid and protocol is correct (`https` where appropriate).
- Confirm HTML structure remains valid (no broken tags around inserted sections).
- Confirm visual consistency with existing button/card/nav styles.
