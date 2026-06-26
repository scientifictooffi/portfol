# Premium Developer Portfolio

Next.js (App Router) + Tailwind CSS. Dark-first, mobile-first, WCAG 2.1 AA.
Контент — заглушки; заполняется в `data/`.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # прод-сборка
```

## Что заполнить (заглушки)

| Файл                     | Что внутри                                              |
| ------------------------ | ------------------------------------------------------ |
| `data/profile.ts`        | Имя, роль, био, контакты, стек, соцсети — поля `[...]`  |
| `data/projects.json`     | 4–6 карточек проектов — поля `[...]` и пустые `links`   |
| `app/layout.tsx`         | SEO-метаданные (`title`, `description`, OG)             |
| `public/`                | Положите `resume.pdf`, favicon, OG-картинку            |

Поиск всех мест для заполнения: `grep -rn "TODO\|\[" data app`.

## Структура

```
design-system/        # MASTER.md (токены, типографика, a11y) + hero-variants.md
app/                  # layout, page, globals.css
components/
  ├─ ui/              # Button, Tag, Eyebrow, Section, Reveal, ThemeToggle, StatusChip
  └─ sections/        # Hero (A/B), Projects, About, Contact, ProjectCard
data/                 # profile.ts, projects.json — ЕДИНСТВЕННЫЙ источник контента
```

## Hero: два варианта

- **A — Editorial** (по умолчанию): `components/sections/HeroEditorial.tsx`
- **B — Terminal Split**: `components/sections/HeroTerminal.tsx`

Переключение — в `app/page.tsx` (поменять импорт и тег). Подробности —
`design-system/hero-variants.md`.

## Дизайн-система

Полная спецификация токенов, типографики, motion и a11y-чеклиста —
`design-system/MASTER.md`. Токены живут как CSS-переменные в `app/globals.css`
и маппятся на семантические классы Tailwind в `tailwind.config.ts`.
