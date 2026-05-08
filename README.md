# WanderWise – Smart Travel Planner

A capstone React application for the **Travel & Tourism** domain.

## 🚀 Live Demo

Deploy to Vercel or Netlify (see Deployment below).

## 📋 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Language | JavaScript ES6+ |
| State Management | Redux Toolkit |
| Routing | React Router v6 |
| API Integration | Axios + Fetch API |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Deployment | Vercel / Netlify |

## ✅ Features

### Core
- 🔐 **Authentication** – Register / Login (localStorage-based, role-based access)
- 🗺️ **Trip CRUD** – Create, view, update, delete trips
- 💸 **Expense Tracker** – Per-trip expense management with category breakdown
- 🔭 **Explore Destinations** – 12 curated Indian destinations
- 📊 **Dashboard** – Charts: Pie, Bar, Line (Recharts)

### Advanced (6 features)
1. **Authentication & role-based access** – ProtectedRoute, AuthContext
2. **Pagination** – 6 destinations per page on Explore
3. **Search + Filter + Sort** – Debounced search, region/status filter, sort options
4. **Dark Mode Toggle** – CSS variables-based theming, persisted to localStorage
5. **Debounced API calls** – `useDebounce` hook on all search inputs
6. **Error Boundary** – Class-based `ErrorBoundary` component
7. **Performance optimization** – `React.lazy` + `Suspense` for all pages
8. **Dashboard with charts** – 4 chart types using Recharts
9. **Multi-step forms with validation** – 3-step NewTrip form

### API Integration (Free, No Key)
- **Open-Meteo API** – Live weather data for destinations
- **REST Countries API** – Country info (capital, population, currency, flag)

## 🛠️ Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 🏗️ Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── Layout.jsx         – Sidebar + nav
│   ├── ProtectedRoute.jsx – Auth guard
│   ├── ErrorBoundary.jsx  – Error boundary
│   ├── TripCard.jsx       – Trip list card
│   ├── DestinationCard.jsx
│   ├── DestinationModal.jsx – Live weather modal
│   ├── SearchBar.jsx      – Debounced search
│   └── Pagination.jsx
├── pages/           # Lazy-loaded route pages
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── Trips.jsx
│   ├── TripDetail.jsx
│   ├── NewTrip.jsx
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── NotFound.jsx
├── store/           # Redux Toolkit
│   ├── store.js
│   ├── tripsSlice.js    – CRUD + search/filter/sort
│   └── exploreSlice.js  – Destinations + async API
├── context/
│   ├── AuthContext.jsx  – Login / Register / Logout
│   └── ThemeContext.jsx – Dark mode
├── hooks/
│   └── useDebounce.js
└── utils/
    └── helpers.js
```

## 🚢 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify dashboard
```

Add `_redirects` file in `public/`:
```
/* /index.html 200
```

## 📄 Report

See `WanderWise_Project_Report.pdf`

---

**All The Best! 🌍**
