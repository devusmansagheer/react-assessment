# MUI Card Pricing Plans

A modern, production-ready React app for displaying pricing plans using Material UI (MUI v5+), TypeScript, and a custom purplish theme.

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd mui-card
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## ✨ Features

- Responsive, accessible pricing cards with strong TypeScript typings
- Modern, visually appealing purplish theme
- Modular folder structure for scalability
- Easily customizable plan data and theme
- Production-level best practices (accessibility, code quality, maintainability)

## 📁 Folder Structure

```
src/
  components/      # Reusable UI components (BillingCard, etc.)
  data/            # Plan data (plans.ts)
  types/           # TypeScript types (Plan.ts)
  theme/           # MUI theme customization (index.ts)
  App.tsx          # Main app layout and logic
  main.tsx         # App entry point
```

## 🛠️ Customization

- **Add/Edit Plans:**
  - Edit `src/data/plans.ts` to add, remove, or update pricing plans.
  - The `Plan` type in `src/types/Plan.ts` ensures strong typings.
- **Theme:**
  - Customize colors, typography, and shape in `src/theme/index.ts`.
- **Components:**
  - Reuse or extend `BillingCard` for other card-based UIs.

## 🧑‍💻 Best Practices

- Uses strong TypeScript typings throughout
- Modular, scalable folder structure
- Accessibility: ARIA labels, keyboard navigation, semantic HTML
- Responsive and mobile-friendly
- Clean, maintainable code

## 📦 Built With

- [React](https://react.dev/)
- [Material UI (MUI)](https://mui.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## 📝 License

MIT
