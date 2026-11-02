# Self Study Library — Jalandhar

Modern, responsive, and SEO-optimized website for **Self Study Library**, located near Jalandhar Bus Stand, Punjab.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide React**. Ready for zero-config deployment on [Vercel](https://vercel.com).

---

## 📍 Business Information

* **Business Name**: Self Study Library
* **Address**: Gate 3, Bus Stand, Near Headmasters Academy, Outside Jawahar Nagar, Jalandhar, Punjab 144001, India.
* **Phone Number**: [+91 81959 74627](tel:+918195974627)
* **WhatsApp**: [+91 81959 74627](https://wa.me/918195974627)
* **Opening Hours**: Open 24 Hours, 7 Days a Week

---

## 🎨 Design & Branding

* **Primary Color**: Dark Navy Blue (`#102A43`)
* **Secondary Color**: Royal Blue (`#1D4ED8`)
* **Accent Color**: Golden Yellow (`#F4B942`)
* **Background**: Clean White (`#FFFFFF`) & Light Grey (`#F5F7FA`)
* **Text**: Dark Slate Grey (`#263238`)
* **Logo Concept**: Open book with an upward-growing knowledge sprout/flame in gold, navy, and white.

---

## 🚀 Technology Stack & Features

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Icons**: Lucide React
* **Image Optimization**: Next.js `<Image />` component with AVIF/WebP formats
* **SEO**: Full Next.js Metadata API, dynamic `sitemap.ts`, `robots.ts`, Open Graph / Twitter Card tags, and Schema.org `Library` JSON-LD structured data.
* **Responsive**: 100% mobile, tablet, and desktop responsive with sticky navigation and mobile hamburger menu.
* **Interactive Features**: Lightbox gallery preview, category filters, click-to-call, click-to-WhatsApp, interactive embedded Google Maps, and persistent floating quick actions.

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css          # Design system tokens and Tailwind styling
│   ├── layout.tsx           # SEO metadata, Open Graph, Twitter, JSON-LD schema
│   ├── page.tsx             # Complete homepage assembling all sections
│   ├── robots.ts            # Dynamic robots.txt configuration
│   └── sitemap.ts           # Dynamic sitemap.xml generator
├── components/
│   ├── Header.tsx           # Sticky navigation with mobile menu & CTA
│   ├── Hero.tsx             # Hero section with 24H badge & CTAs
│   ├── About.tsx            # Introduction & competitive exam focus
│   ├── Facilities.tsx       # 8 confirmed study facility cards
│   ├── WhyChooseUs.tsx      # 6 core differentiators & trust statistics
│   ├── Gallery.tsx          # Filterable image grid with lightbox trigger
│   ├── LightboxModal.tsx    # Accessible modal with keyboard navigation
│   ├── Location.tsx         # Bus Stand Gate 3 address & Google Maps embed
│   ├── Contact.tsx          # Direct contact cards & local student FAQs
│   ├── Footer.tsx           # Comprehensive footer with local keywords
│   ├── FloatingActionButtons.tsx # Floating Call & WhatsApp quick actions
│   └── JsonLd.tsx           # Schema.org Library / LocalBusiness structured data
├── lib/
│   └── site-data.ts         # Centralized real business information & data
├── types/
│   └── index.ts             # TypeScript interfaces
├── public/
│   ├── logo/                # SVG logos (main, white, mobile, symbol)
│   ├── icons/               # SVG app icons & favicons
│   ├── images/              # Hero illustration, gallery previews, OG banner
│   └── favicon.svg          # Modern browser favicon
├── next.config.mjs          # Next.js production configuration
├── tsconfig.json            # TypeScript configuration with @/* path aliases
└── package.json
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🏗️ Production Build & Verification

```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

## 🌐 Deploying to Vercel

1. Import this repository into **[Vercel](https://vercel.com)**.
2. Vercel automatically detects Next.js.
3. Click **Deploy**.
