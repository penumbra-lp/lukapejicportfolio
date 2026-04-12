# Portfolio Website — Plan

**Owner:** Luka Pejic  
**Role:** Space Architecture Master's Student  
**Stack:** Plain HTML + CSS + Vanilla JS (no build tools, no frameworks)

---

## Why This Stack

- Opens directly in a browser — no Node, no npm, no build step
- Easy to deploy on GitHub Pages, Netlify, or any static host
- Full creative control over layout and animation
- Fast to write, fast to load

---

## Visual Identity

The logo and the project drawings share the same language: **black and white, high-contrast, sharp linework with sparkle/star accents.** The website should honour this.

| Token | Value | Rationale |
|---|---|---|
| Background | `#080808` | Deep space black |
| Surface | `#111111` | Slightly lifted panels |
| Border | `#222222` | Subtle separation |
| Text primary | `#F0EDE8` | Warm off-white, not harsh |
| Text secondary | `#888888` | Muted labels |
| Accent | `#FFFFFF` | Pure white for highlights |
| Font | **Space Grotesk** (Google Fonts) | Free, on-brand, clean |
| Mono font | **Space Mono** (Google Fonts) | Technical data, labels |

Subtle star particle background on the landing page (CSS-only using `radial-gradient` and `box-shadow` — no canvas, no library).

---

## File Structure

```
Webpage/
├── index.html              ← Landing page
├── about.html              ← About me
├── contact.html            ← Contact
├── projects/
│   └── promethea.html      ← Promethea Station project page
├── assets/
│   ├── logo.png            ← Your logo (copy of Logo.png)
│   └── promethea/          ← All Promethea Station images
│       ├── axo.png         ← Full station axonometric (AXO_edit_final.png)
│       ├── space_crusader_front.png  ← Frontal view Space Crusader
│       ├── space_crusader_plan_v.png ← Martian vertical plan
│       ├── plan_commercial.png       ← martian_g_commercial.png
│       ├── plan_research.png         ← martian_g_research.png
│       ├── greenhouse_1.png          ← greenhouse 1_!.png
│       ├── greenhouse_2.png          ← greenhouse final_2.png
│       ├── earth.png                 ← earth.png
│       ├── floating.png              ← group floating.png
│       ├── comic.jpg                 ← midterm comic 1st image.jpg
│       └── launch/
│           ├── v11.png … v43.png    ← 12 launch phase images (4 versions × 3 phases)
├── css/
│   └── style.css           ← Global styles + design tokens
└── js/
    └── main.js             ← Nav scroll behaviour, any micro-interactions
```

---

## Page Breakdown

### 1. `index.html` — Landing Page

- Full-viewport hero
- Logo centred, large, with a slow fade-in
- Name + title: *"Luka Pejic — Space Architecture"* in Space Grotesk
- Nav bar: **Projects · About · Contact** (top-right, fixed)
- Subtle animated star field behind the logo (pure CSS)
- Below the fold: a minimal "Selected Work" strip linking to Promethea Station
  - Shows the axonometric thumbnail on hover

---

### 2. `projects/promethea.html` — Promethea Station

Scrollable long-form project page. Sections in order:

#### Hero
- Full-width `axo.png` on black background
- Title: **PROMETHEA STATION**
- Subtitle: *HB2 — Orbital Shift | Beliz Bayraktar, Christopher Egg, Luka Pejic*

#### Abstract
- Two-column layout: left = large pull-quote from the abstract, right = body text
- Key stats as a horizontal data strip:
  `LEO Orbit · 12 Crew+Tourists · 0.38g Martian Gravity · 2 Launches (Space Crusader)`

#### Design Approach
- Text block with the design philosophy
- Inline image: `earth.png` (floating right, partial crop for drama)
- Callout box: *"Comfort and efficiency were prioritised — design decisions are based on research-driven logic and scientific grounding."*

#### Research & Development
- Module dimensions note (SpaceX Starship payload constraints)
- Launch phases grid: 4 rows × 3 columns showing `v11.png` → `v43.png`
  - Labels: V1–V4 (versions) / Phase I–III (columns)
- Small diagram callouts: Whipple shield, inflatable module layers

#### Space Crusader — Artificial Gravity Habitat
- Full-bleed `space_crusader_front.png` with labelled overlay text
- Technical data card:
  | Radius | 10.8 m |
  | Rotation | 5.612 rpm |
  | Rim velocity | 6.34 m/s |
  | Gravity | 0.38g (Martian) |
  | Capacity | 12 people (8 crew + 4 tourists) |
- Side-by-side floor plans: commercial (`plan_commercial.png`) + research (`plan_research.png`)
- Vertical plan (`space_crusader_plan_v.png`) with annotation about Coriolis ladder design
- Detail section: drive system + tether system (text with technical spec lists, styled as code blocks)

#### ICELSS — Inflatable Controlled Ecological Life Support System
- Intro text with `greenhouse_1.png` full-width
- Key stat: *40 m² per person · 2,500 kcal/day · 4 individuals per ICELSS unit*
- Side-by-side: `greenhouse_2.png` (final design) with wall layer breakdown (styled as a vertical stack diagram)
- Cultivation systems: two-column split — **Aeroponics** (1.341 m² gu) vs **Felt/NFT** (4.421 m² gu)
- Crop tables: collapsible/expandable HTML `<details>` sections (one per category: Leafy greens, Herbs, Grains, Tubers, Fruits, Legumes, Oils, Special) — showing name, key nutrients, kcal/gu, harvest cycle
- Floating astronaut illustration: `floating.png` — centred, as a visual break

#### Comic / Narrative
- `comic.jpg` displayed full-width with a caption

#### Module Legend & User Zones
- Icon-style legend using CSS shapes (circles/squares) matching module types
- Three-zone diagram (Permanent Crew / Communal / Commercial) as a colour-coded bar

#### Reflections
- Three-column layout, one per author, with Luka's reflection highlighted/prominent

#### Technical Summary Table
- Clean data table with all key parameters

---

### 3. `about.html` — About Me

- Short bio (placeholder — you fill in)
- Fields of interest: space architecture, closed ecological systems, long-duration habitat design
- Education timeline
- Skills / tools list (styled as tags)
- Logo mark visible but small

---

### 4. `contact.html` — Contact

- Simple `mailto:` link
- Optional: LinkedIn, GitHub links
- No backend needed

---

## Navigation

Fixed top nav on all pages:

```
[LOGO MARK]          Projects   About   Contact
```

- Logo mark links back to `index.html`
- Active page underlined
- On mobile: hamburger collapses to a full-screen overlay

---

## Responsive Strategy

- Mobile-first CSS with `min-width` breakpoints at `768px` and `1200px`
- The launch phase grid collapses from 3-col → 1-col on mobile
- Crop tables scroll horizontally on mobile (no data hidden)
- Images use `object-fit: cover` in fixed-height containers

---

## Assets to Copy

Before building, copy images from the booklet folder into `assets/promethea/`:

| Source (Booklet folder) | Destination |
|---|---|
| `Axos/AXO_edit_final.png` | `assets/promethea/axo.png` |
| `Plans/frontal view space crusader.png` | `assets/promethea/space_crusader_front.png` |
| `Plans/martian_vertical.png` | `assets/promethea/space_crusader_plan_v.png` |
| `Plans/martian_g_commercial.png` | `assets/promethea/plan_commercial.png` |
| `Plans/martian_g_research.png` | `assets/promethea/plan_research.png` |
| `Illustrations/greenhouse 1_!.png` | `assets/promethea/greenhouse_1.png` |
| `Illustrations/greenhouse final_2.png` | `assets/promethea/greenhouse_2.png` |
| `Illustrations/earth.png` | `assets/promethea/earth.png` |
| `Illustrations/group floating.png` | `assets/promethea/floating.png` |
| `Comic/midterm comic 1st image.jpg` | `assets/promethea/comic.jpg` |
| `Illustrations/Launch phases/v11.png … v43.png` | `assets/promethea/launch/v11.png … v43.png` |
| `Backgrounds/background_edit.jpg` | `assets/promethea/background.jpg` |
| `Logo.png` (Webpage root) | `assets/logo.png` |

---

## Implementation Order

1. **Setup** — create folder structure, copy assets
2. **`css/style.css`** — design tokens, reset, typography, nav, utility classes
3. **`index.html`** — landing page with logo hero + star background + nav
4. **`projects/promethea.html`** — full project page (longest step)
5. **`about.html`** — bio page
6. **`contact.html`** — contact page
7. **`js/main.js`** — scroll-triggered nav style, any hover effects
8. **Polish** — spacing, mobile breakpoints, hover transitions

---

## Deployment

When ready, drop the entire `Webpage/` folder into:
- **Netlify Drop** (drag and drop — instant URL, free)
- **GitHub Pages** (push to repo, enable Pages)
- **Vercel** (drag and drop or connect repo)

No server needed. Pure static files.
