# Luka Pejic — Space Architecture Portfolio

Personal portfolio site for Luka Pejic, a space architecture master's student. Static HTML/CSS/JS — no build tools, no frameworks, no npm.

## File Structure

```
index.html          — Landing page (hero + project cards)
about.html          — About / CV page
contact.html        — Contact links
projects/
  promethea.html    — Promethea Station project page
  eyes-of-eden.html — Eyes of Eden project page
css/style.css       — Single global stylesheet (all styles live here)
js/main.js          — Single JS file (nav scroll, reveal, parallax, starfield)
assets/             — Images (logo, project assets)
```

## Design System

All tokens are defined as CSS custom properties in `:root` in [css/style.css](css/style.css):

| Token       | Value       | Use                        |
|-------------|-------------|----------------------------|
| `--bg`      | `#F9F8F5`   | Light page background      |
| `--black`   | `#111010`   | Primary text               |
| `--muted`   | `#6B6760`   | Secondary / label text     |
| `--border`  | `#E2DED8`   | Dividers, card borders     |
| `--void`    | `#0C0C0B`   | Dark section backgrounds   |
| `--vtext`   | `#D8D4CC`   | Text on void backgrounds   |
| `--vmuted`  | `#555250`   | Muted text on void         |
| `--sans`    | Space Grotesk | Body / heading font      |
| `--mono`    | Space Mono  | Labels, nav, captions      |
| `--nav`     | `60px`      | Nav bar height             |
| `--max`     | `1240px`    | Max content width          |
| `--pad`     | `clamp(20px, 5vw, 60px)` | Horizontal gutter |

**Typography scale** (all `font-weight: 300` for headings):
- `h1` — `clamp(2.4rem, 6vw, 5rem)`
- `h2` — `clamp(1.7rem, 3.5vw, 3rem)`
- `.label` — Space Mono, 0.65rem, 0.15em tracking, uppercase
- Body `p` — 0.95rem, 1.75 line-height, `var(--muted)` color

## Conventions

- **No build step.** Edit HTML/CSS/JS directly. No transpiling, no bundling.
- **All CSS goes in `css/style.css`.** Never add `<style>` blocks in HTML.
- **All JS goes in `js/main.js`.** Never add inline `<script>` blocks.
- **Use CSS tokens.** Never hardcode colors — always use the `var(--token)` names above.
- **Responsive breakpoints:** tablet ≤ 900px, mobile ≤ 700px, small ≤ 420px. All three are defined at the bottom of `style.css`.
- **Scroll reveal** — add class `reveal` to any element that should fade/slide in on scroll. JS handles the rest via IntersectionObserver.
- **`.void` sections** — dark panels use the `.void` class which applies the dark background and overrides text/heading colors automatically.
- **`.nav--void`** — JS automatically applies this when a `.project-hero` or `.hero--space` is visible, switching nav to light-text mode.
- **Image grids** — use existing layout classes: `.img-pair` (2-col), `.plan-cell` / `.plan-full` (technical drawings), `.render-cell` (square 1:1), `.diagram-row` / `.diagram-box`, `.comic-grid` / `.comic-cell`.

## Page Templates

**Project page structure:**
1. `<nav>` (copied from index, identical across all pages)
2. `.project-hero` — full-viewport dark hero with parallax image
3. `.section.container` blocks — alternating light and `.void` sections
4. `<footer>` (identical across all pages)
5. `<script src="../js/main.js">` (note the `../` from `projects/` subdirectory)

**Nav links** always use root-relative paths (`index.html`, `about.html`, etc.) from top-level pages, or `../index.html` etc. from `projects/`.

## Owner

Luka Pejic — space architecture master's student. The site is his design portfolio showcasing academic projects. Keep the aesthetic minimal, technical, and refined — no decorative clutter.
