# 👟 KICKS | Premium Sneaker Store

A high-performance, responsive E-commerce frontend built with the **Next.js 14 App Router**. This project features a seamless shopping experience with persistent state management, real-time cart calculations, and a modern sneaker-culture aesthetic.

** Live Demo:** [https://zavisoft.vercel.app](https://zavisoft.vercel.app)

---

## 🛠 Tech Stack

* **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn/ui](https://ui.shadcn.com/)
* **Animation:** [Framer Motion](https://motion.dev/) 
* **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
* **Persistence:** [Redux Persist](https://github.com/rt2zz/redux-persist) (Local Storage)
* **Data Fetching:** [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) (Base API Slice)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## ✨ Key Features

* **Persistent Shopping Bag:** Integrated Redux Persist ensures that user selections remain in the cart even after a page refresh or session restart.
* **Dynamic Cart Summary:** Optimized Redux logic for real-time calculation of subtotal, sales tax (10%), delivery fees, and grand totals.
* **Robust State Management:** Utilizes RTK Query for efficient data fetching and caching, alongside Redux Toolkit for complex client-side state.
* **Responsive UX:** * **Mobile:** Interactive Drawer/Sheet navigation.
    * **Desktop:** Full-grid product displays with optimized "You may also like" sliders.
* **Skeleton Loading:** Custom-built loading states to prevent layout shifts and improve perceived performance.
* **Toast Notifications:** Real-time feedback for user actions (e.g., Adding to bag) using Sonner.

---

## 🏗 Project Structure



```text
├── app/               # Next.js App Router (Layouts, Pages, Loading)
├── components/        # UI Components (Shadcn, Shared, Custom)
├── store/             # Redux Store, Cart Slice, and API Slices
├── lib/               # Utility functions & Tailwind merging
├── public/            # Static assets (Logos, Icons)
└── types/             # TypeScript interfaces and definitions
```

## 🛠️ Installation & Setup Guide

Follow these steps to get **KICKS** running on your local development machine.


###  Clone the Repository
```bash
git clone https://github.com/mkmahmud/zavisoft
cd zavisoft
```
###  Install Dependencies
```bash
npm install
```
### Start Development Server
```bash
npm run dev
``` 