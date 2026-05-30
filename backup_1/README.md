# React + Vite (Cards / Follow UI)

A small React + Vite project that renders a responsive grid of user/profile cards. Each card shows an avatar, name, age, description, and a Follow/UnFollow button.

## Features

- Responsive card grid (flex + wrapping)
- Glassmorphism-style card UI with hover lift
- Profile cards populated from a local `users` array in `src/App.jsx`
- Reusable components:
  - `src/component/Card.jsx`
  - `src/component/Button.jsx`

## Tech Stack

- React 19
- Vite
- CSS (in `src/index.css`)

## Project Structure

- `src/App.jsx` — maps `users` data to `Card`
- `src/component/Card.jsx` — card layout + passes data to `Button`
- `src/component/Button.jsx` — Follow/UnFollow button styling (based on `card.isFollowed`)
- `src/index.css` — all styling

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run in development mode

```bash
npm run dev
```
 
## Notes

- The button label and color are determined by `data.isFollowed` (green when followed, red when not).
- Card images use the `image` URL from the `users` array.
