# Design Brief: Srinidhi's Professional Portfolio

**Tone & Purpose**: Premium tech-professional showcase designed to impress MNC recruiters. Sophisticated, data-driven aesthetic inspired by Linear and Stripe.

**Differentiation**: Data-analytics visual language — grid-inspired layouts, dashboard-styled project cards, cyan accent energy symbolizing data intelligence.

## Palette (Dark Mode)

| Token | OKLCH | Purpose |
|-------|-------|---------|
| Background | 0.12 0.02 264 | Deep navy base, almost black with subtle blue undertone |
| Card | 0.18 0.03 254 | Elevated surface for skill/project cards |
| Foreground | 0.97 0.01 254 | Off-white text for maximum readability |
| Primary/Accent | 0.65 0.15 265 | Vibrant cyan for CTAs, highlights, active states |
| Secondary | 0.62 0.12 140 | Sophisticated emerald for trust/growth accents |
| Muted | 0.22 0.02 264 | Subtle backgrounds, disabled states |
| Border | 0.25 0.02 264 | Dividers, subtle structure |

## Typography

| Layer | Font | Usage |
|-------|------|-------|
| Display | Fraunces (Serif) | Hero name, section titles — distinctive, premium feel |
| Body | DM Sans (Sans-Serif) | All body text, descriptions — clean, professional |
| Mono | Geist Mono | Code snippets, technical highlights |

## Structural Zones

| Zone | Treatment | Details |
|------|-----------|---------|
| Header | Transparent nav | Fade-in on scroll, minimal borders |
| Hero | Full-viewport | Dramatic typography, gradient accent bar, CTA buttons |
| Skills | Card grid | Glassmorphism effect, cyan skill tags, categorized layout |
| Projects | Project cards | Left accent border (cyan/emerald alternating), dashboard visual |
| Leadership | Prominent section | Google Campus Ambassador highlight, Dialogue Dynamics co-founder |
| Footer | Muted background | Contact links, smooth hover states |

## Component Patterns

- **Skill Tags**: `.skill-tag` — cyan background with transparency, border, hover elevation
- **Project Cards**: `.project-card` + `.project-accent-left` — bordered card with left accent, hover shadow lift
- **CTA Buttons**: Primary cyan with white text, rounded corners, smooth transitions
- **Section Titles**: `.section-title` — Fraunces display font, large scale (3xl–4xl), bold weight

## Motion & Transitions

- Smooth scroll behavior on all internal navigation
- Fade-in animations on section entrance (0.6s ease-out)
- Slide-up animations for card stagger effects
- Hover state elevation (`shadow-elevated`) on interactive cards
- All transitions use cubic-bezier(0.4, 0, 0.2, 1) for refined motion

## Spacing & Rhythm

- Base unit: 0.5rem (8px grid)
- Hero: Full viewport height with generous breathing room
- Sections: 4rem vertical rhythm between major sections
- Card padding: 1.5rem to 2rem depending on content density

## Dark Mode Only

This is a dark-mode-only portfolio. No light theme variant. The dark navy base with cyan accents is the core aesthetic and shouldn't be inverted.

## Constraints

- No gradients beyond subtle accent bar on hero and button hover
- No animations beyond fade/slide entrance + hover states
- No decorative elements beyond strategic color accents
- No shadow layers beyond subtle/elevated defined in boxShadow
- Cyan accent used sparingly for maximum impact on CTAs and highlights
