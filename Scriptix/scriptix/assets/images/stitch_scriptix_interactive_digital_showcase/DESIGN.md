---
name: Scriptix Lumina
colors:
  surface: '#f9f9fe'
  surface-dim: '#d9dade'
  surface-bright: '#f9f9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f8'
  surface-container: '#ededf2'
  surface-container-high: '#e8e8ed'
  surface-container-highest: '#e2e2e7'
  on-surface: '#1a1c1f'
  on-surface-variant: '#4f4350'
  inverse-surface: '#2e3034'
  inverse-on-surface: '#f0f0f5'
  outline: '#807381'
  outline-variant: '#d2c1d2'
  surface-tint: '#8c37aa'
  primary: '#8935a7'
  on-primary: '#ffffff'
  primary-container: '#a550c2'
  on-primary-container: '#fffbff'
  inverse-primary: '#efb0ff'
  secondary: '#0058bc'
  on-secondary: '#ffffff'
  secondary-container: '#0070eb'
  on-secondary-container: '#fefcff'
  tertiary: '#8d4559'
  on-tertiary: '#ffffff'
  tertiary-container: '#aa5d72'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fad7ff'
  primary-fixed-dim: '#efb0ff'
  on-primary-fixed: '#330045'
  on-primary-fixed-variant: '#711990'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#ffd9e0'
  tertiary-fixed-dim: '#ffb1c3'
  on-tertiary-fixed: '#3c0419'
  on-tertiary-fixed-variant: '#733044'
  background: '#f9f9fe'
  on-background: '#1a1c1f'
  surface-variant: '#e2e2e7'
  deep-navy: '#1C1C1E'
  electric-blue: '#0A84FF'
  electric-cyan: '#5AC8FA'
  vibrant-pink: '#DC8CDB'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

The design system embodies a "Precision Elegance" philosophy, merging high-end software sophistication with a visionary tech-forward edge. It is designed for a premium audience that values clarity, performance, and aesthetic refinement. 

The visual direction is **Minimalist Glassmorphism**. This style leverages generous whitespace, subtle translucent layers, and highly refined typography to create an "Apple-esque" atmosphere. By utilizing multi-layered background blurs and soft tonal transitions, the interface feels light, airy, and expensive. The interaction model focuses on fluid transitions and depth, ensuring the software feels like a tactile, high-performance tool rather than a static document.

## Colors

The palette is divided into two distinct emotional themes that can be used to distinguish different product tiers or service areas:

1.  **Modern Scriptix (Refined Heritage):** Utilizes the `primary` (Amethyst Purple) and `tertiary` (Soft Rose) colors. These are paired with `deep-navy` for text to maintain a high-end, editorial feel. Use soft gradients between these two hues for primary actions and brand moments.
2.  **Electric Future (High-Tech):** Swaps the palette for `electric-blue` and `electric-cyan`. This theme should be used for data-heavy views, AI features, or performance metrics to evoke a cutting-edge, computational atmosphere.

The background is predominantly `#FFFFFF`, while the `neutral` shade is reserved for subtle container backgrounds and structural dividers to maintain a low-contrast, harmonious aesthetic.

## Typography

This design system uses **Inter** exclusively to achieve a clean, systematic appearance that rivals custom enterprise typefaces. 

- **Display & Headlines:** Use tight letter-spacing and bold weights for a "Swiss-style" impact. These should appear in `deep-navy`.
- **Body Text:** Designed for maximum legibility with a generous line-height to maintain the "airy" feel of the brand.
- **Labels:** Used for navigation elements and buttons, employing a slightly heavier weight to ensure hierarchy even at smaller sizes.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. Content is centered within a maximum container width of 1280px on desktop to prevent eye strain, while the margins expand to fill ultra-wide displays.

- **The 8px Grid:** All spacing between elements must be a multiple of 8px. Use 16px for tight groupings and 48px+ for section breaks to preserve whitespace.
- **Airy Margins:** Page gutters are wide (24px) to ensure no element feels cramped.
- **Responsive Behavior:** On mobile, margins reduce to 24px, and 12-column grids collapse into a single-column stack. Heavy use of vertical padding (64px+) between sections is encouraged to maintain the premium, unhurried pace of the user journey.

## Elevation & Depth

Depth is the primary communicator of hierarchy in this design system. Rather than heavy shadows, we use **Tonal Layering and Glassmorphism**:

1.  **Level 0 (Base):** Pure `#FFFFFF` or very light neutral.
2.  **Level 1 (Cards/Containers):** Subtle 1px border (`#E5E5EA`) with a soft, ambient shadow (0px 4px 20px, 5% opacity).
3.  **Level 2 (Glass Overlays):** Used for navigation bars and floating modals. Background blur set to `20px` with a `70%` white opacity fill and a `0.5px` white inner stroke to simulate a "glass edge."
4.  **Interaction:** On hover, elements should slightly lift (increase shadow spread) and transition their background opacity to feel responsive and tactile.

## Shapes

The shape language is "Soft-Modern." We use a consistent `0.5rem` (8px) corner radius for most UI components (inputs, small cards) and `1rem` (16px) for large containers and modals. This creates a friendly yet professional silhouette. Buttons and tags should never be fully pill-shaped; they should maintain the system-wide 8px radius to feel structural and precise.

## Components

- **Buttons:** Primary buttons use a linear gradient from the theme colors (e.g., Pink to Purple) with white text. Secondary buttons are "Ghost" style with a 1px neutral border and navy text.
- **Inputs:** Fields are minimal—1px border with a subtle background tint. On focus, the border transitions to the primary brand color with a soft glow (3px spread).
- **Cards:** Use Level 1 elevation. For "Featured" content, use Level 2 Glassmorphism to pull the element forward.
- **Chips/Badges:** Small, low-saturation backgrounds (e.g., 10% opacity of the primary color) with high-saturation text for status indicators.
- **Navigation:** A persistent, glassmorphic header that blurs the content beneath it as the user scrolls, creating a sense of constant depth.
- **Specialty Components:** Include "Glass Modals" for high-intent actions and "Gradient Progress Bars" to reinforce the tech-forward aesthetic.