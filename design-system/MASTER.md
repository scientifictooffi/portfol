# Design System — Premium Developer Portfolio

> Single source of truth for tokens, type, spacing, motion and component rules.
> Everything below is implemented in `tailwind.config.ts` + `app/globals.css`.
> Dark-mode-first. Mobile-first. Target: **WCAG 2.1 AA**.
>
> **Generated with the `ui-ux-pro-max` skill** (`.claude/skills/ui-ux-pro-max`).
> Skill recommendations live in `design-system/developer-portfolio/MASTER.md`
> (raw output) and are reconciled into this human-readable spec. Source of the
> palette + font pairing below: skill `--design-system` query
> *"developer portfolio personal premium minimal dark mode professional"*.

---

## 1. Design Principles

1. **Editorial, not flashy.** Generous whitespace, strong type hierarchy, one
   restrained accent. The work is the hero — chrome stays quiet.
2. **Dark-first.** The default canvas is near-black ink. Light theme is a
   first-class peer, not an afterthought.
3. **Calm motion.** Movement clarifies state and rewards attention; it never
   blocks reading. Everything respects `prefers-reduced-motion`.
4. **Accessible by construction.** Every text/background pair clears AA (≥4.5:1
   body, ≥3:1 large). Focus is always visible. Nothing relies on color alone.
5. **Honest placeholders.** Stub content reads as deliberate scaffolding
   (`[ВАШЕ ИМЯ]`, TODO fields) — never lorem ipsum, never invented facts.

---

## 2. Color Tokens

Defined as CSS custom properties in `globals.css` and mapped to Tailwind
semantic names. Two themes share the same token *names*; only values swap.

### Neutral ramp (ink)
Monochrome base (skill: *"Neutral background — let work shine"*). Zinc ramp.
Skill anchors: Primary `#18181B`, Secondary `#3F3F46`, Background `#FAFAFA`,
Text `#09090B`.

| Token            | Dark value   | Light value  | Role                         |
| ---------------- | ------------ | ------------ | ---------------------------- |
| `--bg`           | `#09090b`    | `#fafafa`    | Page canvas                  |
| `--surface`      | `#121214`    | `#ffffff`    | Cards, raised panels         |
| `--surface-2`    | `#1a1a1d`    | `#f4f4f5`    | Nested / hover surfaces      |
| `--border`       | `#27272a`    | `#e4e4e7`    | Hairlines, dividers          |
| `--border-strong`| `#3f3f46`    | `#d4d4d8`    | Inputs, focus rings base     |
| `--text`         | `#fafafa`    | `#09090b`    | Primary text (AA on bg)      |
| `--text-muted`   | `#a1a1aa`    | `#3f3f46`    | Secondary text (AA on bg)    |
| `--text-faint`   | `#71717a`    | `#71717a`    | Captions, meta (large only)  |

### Accent (signal)
One accent, used sparingly: links, focus, key CTAs, active state.
**Skill CTA = `#2563EB` (blue)**, used directly in light. For dark, lifted to
`#5b9bff` so it clears AA on near-black (the skill blue alone is ~3.7:1 there).

| Token             | Dark        | Light       | Notes                            |
| ----------------- | ----------- | ----------- | -------------------------------- |
| `--accent`        | `#5b9bff`   | `#2563eb`   | Links, primary action (skill CTA)|
| `--accent-hover`  | `#82b4ff`   | `#1d4ed8`   | Hover/active                     |
| `--accent-contrast`| `#09090b`  | `#ffffff`   | Text *on* accent fill            |
| `--accent-soft`   | `rgba(91,155,255,.14)` | `rgba(37,99,235,.10)` | Tinted backgrounds |

### Feedback (reserved, low-use)
`--success #34d399 / #059669`, `--warning #fbbf24 / #b45309`,
`--danger #f87171 / #dc2626`. Never sole signal — always pair with icon/text.

**Contrast verification (dark theme, against `--bg #09090b`):**
- `--text #fafafa` → ~19:1 ✅ AAA
- `--text-muted #a1a1aa` → ~7.5:1 ✅ AA
- `--accent #5b9bff` → ~7.9:1 ✅ AA
- `--text-faint #71717a` → ~4.0:1 — **large text / non-essential only**

**Light theme (against `--bg #fafafa`):** `--text #09090b` ~20:1 ✅,
`--text-muted #3f3f46` ~10:1 ✅, `--accent #2563eb` ~5.2:1 ✅ AA.

---

## 3. Typography

Font pairing from the skill (*Archivo / Space Grotesk*), self-hosted via
`next/font` (no layout shift):
- **Display** — `Archivo` (600/700). Headings, hero.
- **Sans** — `Space Grotesk` (400–700). UI, body.
- **Mono** — `JetBrains Mono`. Code, labels, eyebrows, meta, the "dev" texture.

> Note: Archivo & Space Grotesk are latin-only. UI copy here is Russian
> (Cyrillic placeholders), so the font stack falls back to `system-ui` for
> Cyrillic glyphs — no tofu, consistent rendering. Swap to a Cyrillic-native
> pair (e.g. Manrope) if the final copy is mostly Cyrillic.

### Type scale (fluid, `clamp`)
Mobile-first; scales up with viewport. Tracking tightens as size grows.

| Token        | clamp(min, vw, max)                  | Use                    |
| ------------ | ------------------------------------ | ---------------------- |
| `display`    | `clamp(2.75rem, 7vw, 5.5rem)`        | Hero headline          |
| `h1`         | `clamp(2rem, 4.5vw, 3.25rem)`        | Section / page title   |
| `h2`         | `clamp(1.5rem, 3vw, 2.25rem)`        | Subsection             |
| `h3`         | `clamp(1.2rem, 2vw, 1.5rem)`         | Card title             |
| `body-lg`    | `1.125rem` / `1.7` line-height       | Lead paragraph         |
| `body`       | `1rem` / `1.65`                       | Default                |
| `small`      | `0.875rem` / `1.5`                    | Meta, captions         |
| `eyebrow`    | `0.75rem` / `0.16em` tracking, mono, uppercase | Section labels |

Headings: weight 600–700, tracking `-0.02em`. Body: weight 400, max line
length `~68ch` (`max-w-prose`).

---

## 4. Spacing & Layout

- **Base unit:** 4px (Tailwind default scale).
- **Section rhythm:** `py-20 sm:py-28 lg:py-36` between major sections.
- **Container:** `max-w-6xl` (72rem) content, `px-5 sm:px-8` gutters.
- **Grid:** Projects `grid sm:grid-cols-2 lg:grid-cols-3 gap-5`.
- **Radius:** `--radius` 14px cards, 10px controls, 999px pills.
- **Border:** 1px hairlines using `--border`; never heavy strokes.

---

## 5. Elevation

Dark UI avoids drop shadows (they read muddy). Depth = surface lightness +
hairline border + optional inner highlight.

- `surface` card = `bg-surface border border-border`
- hover = lift to `surface-2`, border → `border-strong`, accent glow optional
- Focus/active CTAs may use a soft accent glow: `shadow-[0_0_0_1px,0_8px_30px_-12px]`.

---

## 6. Motion

- **Durations:** micro `150ms`, standard `250ms`, entrance `500–700ms`.
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (gentle ease-out) for entrances;
  `ease-out` for hovers.
- **Patterns:** fade-up on scroll (`translateY 12px → 0`, opacity 0→1, staggered
  60ms), accent underline grow on links, subtle card lift (`-translate-y-0.5`).
- **Reduced motion:** all transforms/transitions collapse to opacity-only or
  none under `@media (prefers-reduced-motion: reduce)`.

---

## 7. Components (contracts)

- **Button** — variants: `primary` (accent fill), `secondary` (surface +
  border), `ghost` (text). Sizes `sm | md`. Min target 44×44px. Visible focus
  ring `2px accent + 2px offset`.
- **Card (Project)** — surface, hairline, title (h3), role/summary (muted),
  tag pills (mono small), optional links. Whole card is one focusable link;
  inner links use `relative z-10` to remain independently clickable.
- **Tag/Pill** — mono `small`, `bg-surface-2`, `border-border`, rounded-full.
- **Eyebrow** — mono uppercase label preceding section headings.
- **ThemeToggle** — icon button, `aria-pressed`, persists to `localStorage`,
  respects system on first load, no flash (inline pre-hydration script).
- **Nav** — sticky, translucent `backdrop-blur`, hairline bottom border,
  skip-link as first focusable element.

---

## 8. Accessibility checklist (enforced)

- [ ] Single `<h1>` per page; logical heading order.
- [ ] Skip-to-content link, visible on focus.
- [ ] All interactive elements keyboard reachable, visible focus.
- [ ] Color contrast AA verified (see §2).
- [ ] Images have `alt`; decorative ones `alt=""`.
- [ ] `prefers-reduced-motion` honored.
- [ ] Theme toggle exposes state to AT (`aria-pressed`).
- [ ] Landmarks: `header`/`nav`/`main`/`footer`.
- [ ] Hit targets ≥ 44px.

---

## 9. Content & placeholders

All real content lives in `data/` (see `data/profile.ts`, `data/projects.json`).
Placeholders are explicit and editable:
`[ВАШЕ ИМЯ]`, `[РОЛЬ]`, `[email]`, `// TODO:` — see those files to fill in.
