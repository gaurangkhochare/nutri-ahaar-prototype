# Product Requirements Document (PRD)
## Homemade Food Delivery — Frontend Prototype

**Version:** 1.0
**Date:** September 8, 2026
**Owner:** [Your Name]
**Status:** Draft

---

## 1. Overview

### 1.1 Purpose
This document defines the requirements for a **frontend-only prototype** of a website that lets students and working professionals order affordable, homemade-style food. The prototype's goal is to demonstrate the core user journey — browsing meals, selecting a plan/dish, and placing an order — without any real backend, payment processing, or persistent database.

### 1.2 Background
Many students and employees living away from home (in hostels, PGs, or rented flats) don't get access to homemade food daily. This platform aims to connect them with homestyle meals at affordable prices, prepared by local home cooks or a central kitchen.

### 1.3 Scope
This is a **demo/prototype**, meant to:
- Showcase the UI/UX and core ordering flow
- Be used for stakeholder demos, investor pitches, or user testing
- Serve as a foundation for a future full-stack build

**Out of scope for this phase:**
- Real backend / API integration
- Payment gateway integration
- User authentication (can be mocked/simulated)
- Real-time order tracking
- Admin/vendor dashboard

---

## 2. Goals & Success Criteria

| Goal | Success Criteria |
|---|---|
| Demonstrate core ordering flow | User can browse meals, add to cart, and complete a mock checkout |
| Convey warmth and trust | UI feels cozy, homely, and inviting — not clinical or corporate |
| Show responsiveness | Site works cleanly on both desktop and mobile screen sizes |
| Enable easy stakeholder demo | No setup/login friction; works with dummy/static data |

---

## 3. Target Users

1. **Students** — living in hostels/PGs, budget-conscious, ordering daily or a few times a week.
2. **Working professionals** — office-goers who want a home-cooked lunch/dinner alternative to restaurant food, may prefer weekly/monthly subscriptions.

### User Needs
- Affordable pricing clearly visible
- Simple, fast ordering (few clicks)
- Trust and warmth — feels like "home," not a generic food delivery app
- Options for one-time orders and recurring meal plans (tiffin-style subscriptions)

---

## 4. Tech Stack

| Layer | Technology |
|---|---|
| Framework | React (functional components + Hooks) |
| Styling | Tailwind CSS |
| State Management | React local state / Context API (no external state library needed for prototype) |
| Data | Static/mock JSON data (no backend, no database) |
| Routing | React Router (for multi-page navigation) |
| Deployment (optional) | Any static hosting (Vercel/Netlify) since it's frontend-only |

**Note:** Since this is a frontend-only prototype, all "orders," "cart," and "user" data will be simulated using local component state or React Context — nothing is persisted beyond the browser session (no localStorage dependency required, but may be used for demo continuity if desired).

---

## 5. Design Direction

### 5.1 Look & Feel
The site's visual identity should feel **warm, cozy, and homely** — reflecting the core value proposition of homemade food. This should come through in:

- **Color palette:** Warm, earthy, appetizing tones — terracotta, mustard/turmeric yellow, warm browns, cream/beige backgrounds, soft greens. Avoid cold, clinical blues/grays typically seen in generic food delivery apps.
- **Typography:** A friendly, rounded sans-serif for body text (e.g., something like Poppins/Nunito), paired with a warm serif or hand-written-style accent font for headings to add a personal, homemade touch.
- **Imagery:** Soft, natural-light food photography; illustrations of home kitchens, steam rising from plates, hands sharing food — avoiding overly polished/stock corporate visuals.
- **Shapes & UI elements:** Rounded corners, soft shadows, generous whitespace — avoiding sharp/hard edges that feel corporate or transactional.
- **Tone of voice (microcopy):** Friendly and personal — e.g., "Made with love, just like home" instead of "Order now."
- **Overall impression:** The user should feel like they're being served by someone who cares, not interacting with a cold marketplace.

### 5.2 Inspiration Keywords
Cozy kitchen · Grandma's cooking · Golden hour lighting · Comfort food · Community table · Handwritten notes · Steam and warmth

---

## 6. Core Features & User Flow (Prototype Scope)

### 6.1 Pages/Screens

1. **Home / Landing Page**
   - Hero section with warm tagline (e.g., "Homemade food, delivered with love")
   - Brief value proposition (affordable, homely, daily meals)
   - Featured meals / today's menu carousel
   - CTA to browse menu or view plans

2. **Menu / Browse Page**
   - Grid/list of available meals with:
     - Food image
     - Name & short description
     - Price
     - Veg/non-veg indicator
     - "Add to Cart" button
   - Filters: meal type (breakfast/lunch/dinner), veg/non-veg, price range
   - Search bar

3. **Meal Detail Page (optional but recommended)**
   - Larger image, full description, ingredients, "cooked by [home chef name]" touch for warmth
   - Quantity selector
   - Add to cart

4. **Subscription/Plans Page**
   - Weekly/monthly tiffin plan cards (e.g., "5-day lunch plan")
   - Price comparison vs. one-time orders
   - "Subscribe" CTA (mocked — no real payment)

5. **Cart Page**
   - List of selected items with quantity edit/remove
   - Subtotal, mock delivery fee, total
   - "Proceed to Checkout" button

6. **Checkout Page (Mocked)**
   - Simple form: name, delivery address, phone number (no real validation/backend needed)
   - Mock payment method selection (UI only, no real integration)
   - "Place Order" button → leads to confirmation screen

7. **Order Confirmation Page**
   - Friendly confirmation message (e.g., "Your meal is on its way, just like mom used to send!")
   - Mock order summary and estimated delivery time

8. **About Us Page (optional)**
   - Story behind the platform — reinforces warmth/trust angle
   - Meet the home cooks (optional, adds authenticity)

### 6.2 Navigation
- Sticky header with logo, nav links (Home, Menu, Plans, About, Cart icon with item count)
- Footer with basic links/contact info (mocked)

---

## 7. Functional Requirements (Prototype-Level)

| Feature | Requirement |
|---|---|
| Browse meals | Display static/mock meal data in a responsive grid |
| Add to cart | Update cart state (React Context), reflect item count in header icon |
| Cart management | Increase/decrease quantity, remove item, view running total |
| Checkout | Simple form capturing dummy input, no real submission/backend call |
| Order confirmation | Static confirmation screen triggered after "Place Order" click |
| Responsive design | Fully usable on mobile, tablet, and desktop breakpoints |
| Navigation | Client-side routing between all pages without page reload |

---

## 8. Non-Functional Requirements

- **Performance:** Fast load time since there's no backend — should feel instant.
- **Responsiveness:** Mobile-first design, since students/employees are likely to browse on phones.
- **Accessibility:** Reasonable color contrast, semantic HTML, alt text for images.
- **Code quality:** Clean, componentized React structure (reusable components like `MealCard`, `CartItem`, `Header`, `Footer`) for easy handoff to backend integration later.

---

## 9. Data Model (Mock/Static)

Since there's no backend, data will live in static JSON/JS files, e.g.:

```js
// mockMeals.js
const meals = [
  {
    id: 1,
    name: "Dal Tadka with Rice",
    description: "Comforting home-style yellow lentils, tempered with ghee and spices.",
    price: 89,
    type: "veg",
    mealTime: "lunch",
    image: "/images/dal-tadka.jpg",
    cookName: "Sunita's Kitchen"
  },
  // ...more items
];
```

Similarly, mock data structures will be defined for **plans/subscriptions** and **cart items**.

---

## 10. Assumptions & Constraints

- No real user accounts — a name/phone field on checkout is enough to simulate personalization.
- No real payments — checkout ends in a static "Order Confirmed" screen.
- All meal/pricing data is hardcoded/mocked for demo purposes.
- This prototype is meant to validate UX/UI direction and flow, not production readiness.

---

## 11. Future Considerations (Post-Prototype, Not in Current Scope)

- Backend & database integration (orders, users, cooks/vendors)
- Real authentication (OTP/email login)
- Payment gateway integration
- Real-time order tracking
- Admin panel for home cooks/vendors to manage menus
- Ratings & reviews for meals/cooks
- Subscription billing logic

---

## 12. Open Questions

1. Should the prototype support multiple "home cooks/kitchens," or a single unified menu?
2. Should pricing be shown in a specific currency (e.g., INR ₹) by default?
3. Do we want a light dark-mode toggle, or keep it strictly warm/light-themed for now (cozy feel is generally light-toned)?

---

## 13. Appendix: Suggested Component Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── MealCard.jsx
│   ├── CartItem.jsx
│   ├── PlanCard.jsx
│   └── Button.jsx
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── MealDetail.jsx
│   ├── Plans.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── OrderConfirmation.jsx
│   └── About.jsx
├── data/
│   ├── mockMeals.js
│   └── mockPlans.js
├── context/
│   └── CartContext.jsx
├── App.jsx
└── index.js
```
