# NOVA — Modern Fashion & Lifestyle E-commerce Website

A complete, production-ready multi-page retail e-commerce website built with React 19, Vite, TypeScript, Tailwind CSS v4, React Router DOM v7, and Framer Motion.

## 🎨 Brand Identity

**Name:** NOVA  
**Tagline:** "Style that speaks for itself"  
**Colors:**
- Purple: `#7c3aed`
- Purple Light: `#a78bfa`
- Coral: `#f87171`
- Dark BG: `#0d0d0f`
- Surface: `#1a1a1f`
- Card: `#252530`
- Text: `#f9fafb`
- Muted: `#9ca3af`

**Fonts:** Syne (700, 800) + Inter (400, 500) from Google Fonts

## 🚀 Getting Started

```bash
# Navigate to project directory
cd /Users/aman/project-kashavi/projects/retail-ecommerce-website/

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
retail-ecommerce-website/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── components/
    │   └── layout/
    │       ├── Layout.tsx
    │       ├── Navbar.tsx
    │       └── Footer.tsx
    └── pages/
        ├── HomePage.tsx
        ├── ShopPage.tsx
        ├── CategoriesPage.tsx
        ├── AboutPage.tsx
        ├── BlogPage.tsx
        └── ContactPage.tsx
```

## 🌐 Pages

### Home Page (`/`)
- Full-screen hero with editorial layout and gradient text
- Animated ticker bar
- New Arrivals section with 8 product cards
- Category banners (3-column grid)
- Brand values showcase
- Instagram feed grid
- Newsletter signup

### Shop Page (`/shop`)
- 16 products with filtering
- Category filter pills
- Price range filters
- Size multi-select
- Sort options (Newest, Low-High, High-Low, Popular)
- Pagination
- Results count

### Categories Page (`/categories`)
- 6 large editorial category cards (asymmetric grid)
- Women's, Men's, Kids, Bags, Shoes, Activewear
- Sub-categories for each main category
- Hover effects with image zoom

### About Page (`/about`)
- Brand story and founder profile
- Core values (Quality, Inclusivity, Sustainability, Innovation)
- Team member profiles (6 people)
- Impact statistics (B-Corp certified)
- Press mentions

### Blog Page (`/blog`)
- 6 blog posts with category filtering
- Featured post large at top
- Sidebar with popular posts, tags, newsletter
- Author and read time information

### Contact Page (`/contact`)
- Contact form with validation
- Customer service channels (Email, Live Chat, Phone, Returns Portal)
- Size chart tables (Women's & Men's)
- FAQ accordion (8 items)
- Shipping information
- Returns policy

## ✨ Features

- **React 19** with StrictMode
- **TypeScript** strict mode enabled
- **Tailwind CSS v4** with `@theme` (no config file)
- **React Router DOM v7** with `createBrowserRouter`
- **Framer Motion** animations with `useInView` for scroll-triggered effects
- **Responsive design** mobile-first approach
- **Dark theme** throughout with purple/coral accents
- **Gradient text effects** for headlines
- **Product cards** with wishlist, quick add, hover zoom
- **Sticky navigation** with scroll-triggered background
- **Animated page transitions**
- **Newsletter forms** with state management
- **Filter system** on Shop page
- **FAQ accordion** on Contact page
- **Custom scrollbar** styling

## 🎭 Animations

All sections use Framer Motion:
- Page transitions with AnimatePresence
- Scroll-triggered animations with `useInView`
- Hover effects on cards and buttons
- Smooth fade-ins and slide-ups
- Product card zoom effects
- Ticker animation (CSS keyframes)

## 🎨 Design Patterns

- Editorial fashion aesthetic
- Large typography with Syne font family
- Gradient text for emphasis
- Card-based layouts with rounded corners
- Consistent spacing and padding
- Hover states on all interactive elements
- Badge system for product labels (NEW, SALE, TRENDING)
- Dark overlays on images for text legibility

## 📦 Dependencies

**Runtime:**
- react: ^19.2.8
- react-dom: ^19.2.8
- react-router-dom: ^7.1.1
- framer-motion: ^13.0.0

**Development:**
- @vitejs/plugin-react: ^6.0.5
- @tailwindcss/vite: ^4.3.3
- tailwindcss: ^4.3.3
- typescript: ^5.8.3
- vite: ^6.3.5
- @types/react: ^19.2.18
- @types/react-dom: ^19.2.4

## 🔧 Configuration Notes

- **No `tailwind.config.js`** — uses CSS `@theme {}` directive in `src/index.css`
- **Strict TypeScript** — all type checks enabled
- **Vite plugins** — React + Tailwind CSS
- **Custom scrollbar** — styled in index.css
- **Google Fonts** — loaded in index.html

## 🖼️ Image Sources

All product and lifestyle images use Unsplash with appropriate queries for fashion photography.

## 📝 Production Ready

All code is complete with:
- No TODOs or placeholders
- Full TypeScript types
- Proper React component patterns
- Semantic HTML
- Accessible buttons and forms
- Responsive breakpoints
- Optimized animations

---

**Built with ❤️ for modern fashion retail**
