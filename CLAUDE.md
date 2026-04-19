# Luka Pejic — Space Architecture Portfolio

Personal portfolio site for Luka Pejic, a 2nd-year Master's student at TU Wien in space architecture. Static HTML/CSS/JS — no build tools, no frameworks, no npm.

## File Structure

```
index.html                      — Landing page (hero + project cards + research cards)
about.html                      — About / CV page
contact.html                    — Contact links (Email, LinkedIn)
projects/
  promethea.html                — Promethea Station project page
  eyes-of-eden.html             — Eyes of Eden project page
research/
  iaa-his-2026.html             — IAA HIS 2026 conference presentation page
  iac-2026.html                 — IAC 2026 abstract page
  biological-autonomy.html      — Independent paper (not peer-reviewed) page
css/style.css                   — Single global stylesheet (all styles live here)
js/main.js                      — Single JS file (nav, reveal, parallax, starfield)
assets/
  logo.png, headshot.jpg, cv.pdf
  p/                            — Promethea Station assets
  eoe/                          — Eyes of Eden assets
  research/                     — PDF files: iaa_2026.pdf, iac_abstract.pdf, biological_autonomy.pdf
booklet.pdf                     — Promethea full project booklet (root level)
```

## Design System

All tokens are CSS custom properties in `:root` in [css/style.css](css/style.css):

| Token       | Value                    | Use                        |
|-------------|--------------------------|----------------------------|
| `--bg`      | `#F9F8F5`                | Light page background      |
| `--black`   | `#111010`                | Primary text               |
| `--muted`   | `#6B6760`                | Secondary / label text     |
| `--border`  | `#E2DED8`                | Dividers, card borders     |
| `--void`    | `#0C0C0B`                | Dark section backgrounds   |
| `--vtext`   | `#D8D4CC`                | Text on void backgrounds   |
| `--vmuted`  | `#555250`                | Muted text on void         |
| `--sans`    | Space Grotesk            | Body / heading font        |
| `--mono`    | Space Mono               | Labels, nav, captions      |
| `--nav`     | `60px`                   | Nav bar height             |
| `--max`     | `1240px`                 | Max content width          |
| `--pad`     | `clamp(20px, 5vw, 60px)` | Horizontal gutter          |

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
- **Responsive breakpoints:** tablet ≤ 900px, mobile ≤ 700px, small ≤ 420px. All defined at the bottom of `style.css`.
- **Scroll reveal** — add class `reveal` to any element that should fade/slide in on scroll. JS handles it via IntersectionObserver.
- **`.void` sections** — dark panels use the `.void` class. Automatically overrides text/heading/label colors for dark bg.
- **`.nav--void`** — JS applies this when `.project-hero` or `.hero--space` is visible, switching nav to light-text mode.
- **`.drawing` warning** — applies `mix-blend-mode: multiply`, which removes white backgrounds on light sections. **Never use on images inside `.void` sections** — it darkens them to near-invisible on dark backgrounds.

## Nav Structure

All pages have 4 nav links: **Projects** → `#work`, **Research** → `#research`, **About**, **Contact**.
- Top-level pages (`index.html`, `about.html`, etc.) use paths like `index.html#work`, `about.html`
- Pages in subdirectories (`projects/`, `research/`) use `../index.html#work`, `../about.html`, etc.
- Research and about/contact pages use `class="nav scrolled"` (no dark hero, so always shows solid nav)
- Project pages use `class="nav"` (JS adds `scrolled` + `nav--void` based on hero visibility)

## Image Grid / Layout Classes

| Class | Use |
|---|---|
| `.img-pair` | 2-col equal image grid with 2px gap |
| `.plan-cell` | Technical drawing cell — fixed height 300px, `object-fit: contain` |
| `.plan-full` | Full-width bordered plan — fixed height 380px |
| `.render-cell` | Square 1:1 cell for circular renders |
| `.diagram-row` | 2-col equal grid for diagram boxes |
| `.diagram-box` | Bordered box with image + caption, fixed 260px image height |
| `.comic-grid` | 2-col photo story grid; `.comic-cell--full` spans both cols |
| `.detail-wrap` | Construction detail drawing with border + label |
| `.crop-table-wrap` | Full-width bordered image wrapper for crop tables |
| `.launches-full` | Full-bleed dark image (launch matrix) |
| `.spin-slow` | CSS animation — 11s linear infinite rotation (used on crusader frontal view) |

## PDF Viewer Component

Used on all research and project overview sections. Shows iframe on desktop, a card with "Open PDF" button on mobile (≤700px). Always include a download link below.

```html
<div class="pdf-viewer reveal">
  <div class="pdf-viewer__desktop">
    <iframe src="path/to/file.pdf" title="..."></iframe>
  </div>
  <div class="pdf-viewer__mobile">
    <div class="pdf-mobile-card">
      <span class="pdf-mobile-card__icon">PDF [Type]</span>
      <p class="pdf-mobile-card__title">[Title]</p>
      <a href="path/to/file.pdf" target="_blank" rel="noopener noreferrer" class="pdf-open-btn">Open PDF</a>
    </div>
  </div>
  <div class="pdf-download">
    <a href="path/to/file.pdf" download class="pdf-download-btn">↓ Download PDF</a>
  </div>
</div>
```
For void sections, dark overrides are already in the CSS — just use the same markup inside `.void`.

## Page Templates

### Project page (`projects/*.html`)
1. `<nav class="nav">` — JS handles scroll + void state
2. `.project-hero` — full-viewport dark hero with parallax image
3. Alternating `.section` (light) and `.void` (dark) blocks
4. Section numbers: `<div class="sec-head"><span class="label">01</span><h2>Title</h2></div>`
5. Ends with a `.void` section containing `.pdf-viewer` for full project PDF
6. `<footer style="background:var(--void); border-color:#1e1e1e;">` — dark footer
7. `<script src="../js/main.js">` (note `../`)

### Research page (`research/*.html`)
1. `<nav class="nav scrolled">` — hardcoded scrolled state
2. `<section class="section" style="padding-top: calc(var(--nav) + 64px);">` — no hero
3. Back link → `../index.html#research`
4. Header: `.label` eyebrow + `<h1>` + subtitle label
5. `.split` with description paragraphs on left, `.data-table` metadata on right
6. `.pdf-viewer` component at bottom
7. Light footer
8. `<script src="../js/main.js">`

### Top-level simple pages (`about.html`, `contact.html`)
1. `<nav class="nav scrolled">` — hardcoded
2. `<section class="section" style="padding-top: calc(var(--nav) + 64px);">` — no hero
3. `<script src="js/main.js">` (no `../`)

## Site Content Summary

### index.html — Landing Page
- Hero: starfield canvas, logo animation, "Luka Pejic / Space Architecture · TU Wien"
- `#work` — 2 project cards (Promethea Station, Eyes of Eden)
- `#research` — 3 research cards (IAA HIS 2026, IAC 2026, Biological Autonomy)

### projects/promethea.html — Promethea Station
Sections: Intro+Stats → 01 Mission → 02 Launch & Assembly → 03 Station Overview → 04 Station Layout → 05 Space Crusader Module → 05a Construction Details → 06 ICELSS → 07 Interior & Human Scale → 08 Review by David Nixon → 09 Full Project Overview (PDF)

Key facts: 12 capacity (8 crew + 4 tourists), 6 Starship launches, 10.8m rotation radius, 0.38g Martian gravity, 5.6 rpm, 4 ICELSS units (40m² per person, 2,500 kcal/day). Reviewed by David Nixon (ISS Architecture Beyond Earth).

### projects/eyes-of-eden.html — Eyes of Eden
Sections: Intro+Stats → 01 Mission & Concept → 02 Site & Location → 02a Lighting Concept & Launch Phases → 03 Habitat Modules → 04 CELSS → 05 Full Project Overview (PDF)

Key facts: 19 inflatable modules (4 Starship launches), 15 crew max, 20+ year lifespan, Jezero Crater Mars, team: Deniz Cetin, Yana Hurovych, Luka Pejic.

### research/iaa-his-2026.html — IAA HIS 2026
Conference presentation of Promethea Station at 24th IAA Humans in Space Symposium. PDF: `assets/research/iaa_2026.pdf`. Institution: TU Wien. Topic: Orbital habitat design.

### research/iac-2026.html — IAC 2026
Abstract for International Astronautical Congress 2026 on personalised biological life support systems. PDF: `assets/research/iac_abstract.pdf`. Institution: TU Wien. Topic: Biologically based life support.

### research/biological-autonomy.html — Biological Autonomy
Independent paper (not peer-reviewed, written in personal time). PDF: `assets/research/biological_autonomy.pdf`. Includes a disclaimer notice box.

### about.html
Two-column layout: sidebar (headshot, 7 fields of interest, CV download) + main (bio, education timeline, skills table). Fields of interest, bio text, and skills table are important content — check HTML for exact current wording before editing.

### contact.html
Single `.contact-grid` section (2-col on desktop, 1-col on mobile). Left: label + `<h1>Get in Touch</h1>`. Right: Email and LinkedIn `.contact-link` rows. Grid uses `align-items: center`.

## Owner

Luka Pejic — space architecture Master's student at TU Wien. Keep the aesthetic minimal, technical, and refined — no decorative clutter, no emojis, no marketing language.
