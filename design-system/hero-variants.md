# Hero Variants

Two directions explored against the design system. Both are mobile-first,
dark-first, AA-contrast, and use the same tokens. **Variant A is the chosen
default**; Variant B is provided as a swappable component.

---

## Variant A — "Editorial Statement" (DEFAULT)

A left-aligned, type-led hero. The headline carries the weight; a mono eyebrow
and a single accent word anchor it. Status chip + two CTAs. Quiet, confident,
recruiter-scannable in 2 seconds.

```
┌────────────────────────────────────────────────────────┐
│  ● AVAILABLE FOR WORK            (mono eyebrow, accent)  │
│                                                          │
│  [ВАШЕ ИМЯ]                       (display, -0.02em)     │
│  builds [accent: reliable] web                           │
│  products end to end.                                    │
│                                                          │
│  [РОЛЬ] — short positioning line, ≤2 sentences,          │
│  max ~60ch, text-muted.                                  │
│                                                          │
│  [ View work → ]   [ Get in touch ]    (primary/secondary)│
│                                                          │
│  TypeScript · React · Node · …      (mono tag row)       │
└────────────────────────────────────────────────────────┘
```

- **Why:** type-driven heroes read as senior/editorial, age well, and stay fast.
- **Motion:** staggered fade-up (eyebrow → headline lines → sub → CTAs), 60ms steps.
- **Background:** flat `--bg` + a single faint radial accent glow top-left,
  hidden under reduced-motion-neutral (it's static so it stays).

→ Implemented as `components/sections/HeroEditorial.tsx`.

---

## Variant B — "Terminal Split"

Two-column on `lg+`: statement on the left, a stylized, non-interactive
terminal/`profile.ts` snippet card on the right that reinforces the "developer"
identity using real token styling (mono, surface card, hairline).

```
┌─────────────────────────────┬──────────────────────────┐
│ ● AVAILABLE                 │  profile.ts            ●●●│
│                             │  const me = {            │
│ [ВАШЕ ИМЯ]                  │    name: "[ВАШЕ ИМЯ]",    │
│ [accent: Senior] [РОЛЬ]     │    role: "[РОЛЬ]",        │
│                             │    stack: [ "TS", … ],    │
│ positioning line, muted…    │    open: true,            │
│                             │  }                        │
│ [ View work → ] [ Contact ] │                          │
└─────────────────────────────┴──────────────────────────┘
```

- **Why:** stronger "I write code" signal; good for IC/engineering roles.
- **Trade-off:** denser, slightly more chrome; the code card must stay
  decorative (`aria-hidden`) so it isn't read line-by-line by AT.
- Collapses to single column (statement only, card below) on mobile.

→ Implemented as `components/sections/HeroTerminal.tsx`.

---

## Switching

`app/page.tsx` imports `HeroEditorial` by default. To use Variant B, swap the
import to `HeroTerminal`. Both consume the same `profile` data and need no other
changes.
