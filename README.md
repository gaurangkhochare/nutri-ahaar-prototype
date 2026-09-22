# Nutri Aahaar 🍲

**Homemade food, delivered with love** — a frontend-only prototype for ordering affordable,
home-style meals. Built for students and working professionals living away from home
(hostels, PGs, rented flats) who miss *ghar-ka-khana*.

> **Prototype status:** all ordering, cart, checkout and confirmation flows are **mocked**
> with static data. No backend, no payments, no real user accounts.

## Features

- **Home / landing page** — hero, today's special, featured meals, value props
- **Menu / browse page** — search + filters (meal time, veg/non-veg, max price)
- **Meal detail pages** — photo, description, cook info, quantity selector, **nutrition card**
  (calories, protein, carbs, fat per serving — approximate demo values)
- **Tiffin plans page** — weekly/monthly subscription cards (mock subscribe)
- **Cart** — quantity edit/remove, bill summary, free delivery over ₹299
- **Mock checkout** — name/address/phone form + payment-method UI (no real processing)
- **Order confirmation** — friendly confirmation with mock order ID
- **About page** — story, tech stack, developer card
- **Toast notifications** — "Added to Cart" / "Plan added" popup on every add,
  auto-dismissing after ~2.2s
- **Responsive design** — mobile-first, works on phone, tablet and desktop
- **Warm, homely theme** — cream/terracotta/turmeric palette, Nunito + Fraunces fonts

## Tech Stack

| Layer            | Technology                          |
|------------------|-------------------------------------|
| UI library       | React 19 (functional components + Hooks) |
| Routing          | React Router 7 (`react-router-dom`) |
| Styling          | Tailwind CSS v4 (`@tailwindcss/vite`) |
| State            | React Context API (`CartContext`) — cart + toasts |
| Data             | Static mock data (no backend)       |
| Build tool       | Vite 8                              |
| Linting          | ESLint                              |
| Deployment       | GitHub Pages (`gh-pages`)           |

## Project Structure

```
├── index.html
├── vite.config.js
├── package.json
├── public/                  # Static files (favicon, icons)
└── src/
    ├── main.jsx             # Entry point
    ├── App.jsx              # Router + layout (Header / pages / Footer / Toast)
    ├── index.css            # Tailwind import + warm custom theme
    ├── assets/              # Dish photos (.webp) + logos
    ├── components/
    │   ├── Header.jsx       # Sticky nav + cart count badge
    │   ├── Footer.jsx
    │   ├── MealCard.jsx     # Card with photo, price, nutrition line
    │   ├── CartItem.jsx
    │   ├── PlanCard.jsx     # Subscription plan card
    │   ├── Button.jsx
    │   └── Toast.jsx        # "Added to Cart" popup
    ├── context/
    │   └── CartContext.jsx  # Cart state + toast notifications
    ├── data/
    │   ├── mockMeals.js     # 10 meals: price, cook, rating, nutrition, images
    │   └── mockPlans.js     # 3 tiffin plans
    ├── pages/
    │   ├── Home.jsx
    │   ├── Menu.jsx         # Search + veg/time/price filters
    │   ├── MealDetail.jsx   # Photo, qty selector, nutrition card
    │   ├── Plans.jsx
    │   ├── Cart.jsx         # Bill summary + free-delivery rule
    │   ├── Checkout.jsx     # Mock form (UI only)
    │   ├── OrderConfirmation.jsx
    │   └── About.jsx        # Story + tech stack + developer
    └── utils/
        └── cart.js           # resolveCartItems + bill totals
```

## Getting Started

**Prerequisites:** Node.js (LTS) and npm.

```bash
# 1. Go to the project folder
cd nutri-ahaar-prototype

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Scripts

| Command          | What it does                          |
|------------------|---------------------------------------|
| `npm run dev`    | Start Vite dev server with HMR        |
| `npm run build`  | Production build into `dist/`         |
| `npm run preview`| Preview the production build locally  |
| `npm run lint`   | Run ESLint over the project           |
| `npm run deploy` | Build + publish `dist/` to GitHub Pages |

## Deployment

The live demo is hosted on GitHub Pages: [Click Here](https://gaurangkhochare.github.io/nutri-ahaar-prototype).

The app uses `basename="/nutri-ahaar-prototype"` in the router (`src/App.jsx`) so
client-side routes work under that sub-path. To redeploy: `npm run deploy`.

## Adding a New Dish

1. Drop the photo in `src/assets/` (e.g. `samosa.webp` — `.webp` keeps pages fast).
2. Import it at the top of `src/data/mockMeals.js` and add a meal entry:

```js
{
  id: 11,
  name: "Samosa (2 pc) + Chutney",
  description: "...",
  price: 49,
  type: "veg",
  mealTime: "breakfast",
  image: samosaImg,
  emoji: "🥟", // fallback if image is missing
  cookName: "Sunita's Kitchen",
  rating: 4.7,
  nutrition: { calories: 380, protein: 7, carbs: 48, fat: 16 },
},
```

No other wiring needed — cards, detail page, cart and checkout pick it up automatically.

## Limitations (by design — prototype scope)

- No backend / database — cart lives in memory and resets on refresh
- No real payments — checkout ends in a static confirmation screen
- No authentication — a name/phone field simulates personalization
- Nutrition values are **approximate demo estimates**, not lab-tested figures
- Meal data, prices and cooks are hardcoded in `src/data/`

## Future Considerations

- Backend + database (orders, users, cooks/vendors)
- Real auth (OTP / email login) and payment gateway
- Real-time order tracking, ratings & reviews
- Admin panel for home cooks, subscription billing logic
- Cart persistence (localStorage), calorie filter on the Menu page
