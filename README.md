# 🏎️ Apex Motors — Ultra-Luxury Sports Car Dealership

A premium, cinematic luxury sports car retailer website built with **Next.js 15**, **JavaScript**, and **Tailwind CSS v4**, featuring smooth Framer Motion animations and a dark gold aesthetic.

---

## ✨ Features

| Page | Features |
|------|----------|
| **Home** | Parallax hero, featured cars, stats strip, brand ticker, testimonials, CTA banner |
| **Inventory** | Category filter, live search, sort by price/HP, animated grid |
| **Car Detail** | Image gallery with thumbnails, specs table, features, related vehicles |
| **Gallery** | Masonry grid with hover zoom, lightbox viewer |
| **About** | Team section, values, cinematic image layout |
| **Contact** | Animated form with success state |
| **Booking** | 4-step wizard with car selection, personal details, date/time picker |

---

## 📁 Project Structure

```
apex-motors/
├── app/
│   ├── layout.js              # Root layout (Navbar + Footer)
│   ├── page.js                # Home page
│   ├── globals.css            # Global styles + CSS custom properties
│   ├── inventory/page.js      # Filterable car listings
│   ├── cars/[id]/page.js      # Car detail page
│   ├── about/page.js          # About Apex Motors
│   ├── contact/page.js        # Contact form
│   ├── booking/page.js        # Multi-step test drive booking
│   └── gallery/page.js        # Masonry photo gallery with lightbox
│
├── components/
│   ├── layout/
│   │   ├── Navbar.js          # Scroll-aware transparent → solid navbar
│   │   └── Footer.js          # Full footer with links + contact
│   └── ui/
│       ├── Button.js          # GoldButton, OutlineButton, SectionLabel
│       ├── Badge.js           # Status/category chips
│       └── CarCard.js         # Animated vehicle card
│
├── sections/
│   └── home/
│       ├── HeroSection.js     # Fullscreen parallax hero
│       ├── FeaturedCars.js    # Featured vehicle grid
│       ├── StatsSection.js    # Animated stats counter strip
│       ├── BrandSection.js    # Brand ticker + CTA banner
│       └── TestimonialsSection.js
│
├── data/
│   └── cars.js                # All vehicle data, stats, testimonials
│
└── public/
    └── assets/images/         # Local image assets
```

---

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **JavaScript** (no TypeScript)
- **Tailwind CSS v4** (CSS-first config)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Google Fonts** — Playfair Display + Barlow + Barlow Condensed

---

## 📝 Notes

- Images are served from Unsplash via `next.config.mjs` remote patterns
- All car data lives in `data/cars.js` — easy to extend
- Fully responsive down to 375px mobile
