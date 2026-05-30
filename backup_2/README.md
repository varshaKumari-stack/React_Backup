# Counter App (React + Vite + Tailwind)

This project is a simple Counter App built with **React (useState)**, **Vite**, and **TailwindCSS**.

## Features

- **IncrementBy1**: Adds `+1` and `+3` using functional `setCount(prev => ...)` updates
- **IncrementBy5**: Adds `+5` using functional update
- **DecrementBy1**: Decreases by `1` (prevents negative values)
- **DecrementBy5**: Decreases by `5`

## Run Locally

```bash
npm install
npm run dev
```

Other useful commands:

```bash
npm run build
npm run preview
npm run lint
```

## Why functional `setState` (prev) matters

When you call state setters multiple times in the same event, using the functional form ensures you always update based on the latest value.

Your example:

```js
differences:-

const [count, setCount] = useState(0);

setCount((prev) => prev + 1);
setCount((prev) => prev + 3); // previous current state ka value leta hai
// result: increment مجموع = +4 (not step-by-step count based on stale value)

setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
// NOTE: with direct `count + 1`, React may batch updates -> you can end up with fewer increments than expected.
```

Functional updates like `setCount((prev) => prev + X)` are the correct way when the next state depends on the previous state.

## Package Info (from package.json)

### Scripts

- `dev`: vite
- `build`: vite build
- `lint`: eslint .
- `preview`: vite preview

### Dependencies

- `@tailwindcss/vite`: ^4.3.0
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `tailwindcss`: ^4.3.0

### Dev Dependencies

- `@eslint/js`: ^9.21.0
- `@types/react`: ^19.0.10
- `@types/react-dom`: ^19.0.4
- `@vitejs/plugin-react`: ^4.3.4
- `eslint`: ^9.21.0
- `eslint-plugin-react-hooks`: ^5.1.0
- `eslint-plugin-react-refresh`: ^0.4.19
- `globals`: ^15.15.0
- `vite`: ^6.2.0
