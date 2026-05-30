# backup_3 — Profile Cards (React + Vite)

A small React + Vite project that renders a grid of profile cards. Users can **Like** or **Dislike** each profile, and the card UI updates immediately by updating React state.

---

## ✨ Features

- **Card grid / responsive layout** using Tailwind (`flex-wrap`)
- Each card displays:
  - Avatar image
  - Name
  - Role
  - **likeCount**
- **Interactive Like / Dislike**:
  - Clicking **Like** increments `likeCount`
  - Clicking **Dislike** decrements `likeCount` (won’t go below 0)
- Simple component structure:
  - `App` owns the state
  - `Card` renders the list
  - `Button` handles user actions

---

## 🧰 Tech Stack

- **React** (state management with `useState`)
- **Vite** (dev server + build tooling)
- **Tailwind CSS** (styling)
- **ESLint** (code quality)

---

## 📁 Project Structure

- `src/App.jsx`
  - Holds the `postData` array (profile cards)
  - Provides `like` / `disLike` handler functions
- `src/components/Card.jsx`
  - Receives `postData`, `like`, `disLike`
  - Maps profiles to card UI
- `src/components/Button.jsx`
  - Renders Like/Dislike buttons
  - Calls handlers from props

---

## 🚀 Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run in development mode

```bash
npm run dev
```

## Notes

- Images come from `randomuser.me` URLs stored in the profile data.
- The UI is fully client-side—no backend or database is used.
