# 💼 Portafolio

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)](https://vercel.com/)

A sleek **portfolio and landing page** built with **Next.js + TypeScript**, featuring **3D animations**, **email integration**, and a **modern UI** powered by **TailwindCSS** and **Radix UI**.  
Designed for performance, interactivity, and accessibility.

---

## 🚀 Live Demo

👉 [View Live Portfolio](https://portafolio-coral-eta.vercel.app/)

---

## ✨ Features

- 🎨 **Interactive 3D animations** using Spline.
- 🌙 **Theme switcher** with `next-themes` and persistence.
- 📧 **Contact form** with validation (Zod + React Hook Form) and email sending via **Resend**.
- 🧩 **Composable components** with Radix UI and TailwindCSS.
- 📱 **Fully responsive**, optimized for all devices.
- ✨ **Smooth animations and transitions** with Tailwind Animate.
- 🧪 **Component & Unit Testing** with Vitest.

---

## 🧰 Tech Stack

| Category          | Technology                           |
| ----------------- | ------------------------------------ |
| **Framework**     | Next.js 14                           |
| **Language**      | TypeScript                           |
| **Styling**       | TailwindCSS, tailwind-merge, animate |
| **UI Components** | Radix UI, Geist, Lucide Icons        |
| **3D Animations** | Spline React                         |
| **Forms & Email** | React Hook Form + Zod + Resend       |
| **Charts**        | Recharts                             |
| **Themes**        | next-themes                          |
| **Analytics**     | Vercel Analytics                     |
| **Testing**       | Vitest                               |

---

## ⚙️ CI/CD & Automation

This project includes a full GitHub Actions workflow for continuous integration, testing, and deployment:

- **Continuous Integration (CI)**

  - Runs on `push` or `pull_request` events to `master`.
  - Lints code with **ESLint**.
  - Builds the project.
  - Runs **unit and integration tests** using **Jest**.

- **Continuous Deployment (CD)**

  - Automatic deployment to **Vercel** after CI succeeds.
  - Manual approval required for production deployment.
  - Discord notifications for successful production deployments.
  - [CI/CD Discord channel here!](https://discord.com/channels/1433886988158763124/1433886988980719819)

- **Performance & Quality Checks**

  - Weekly **Lighthouse audits** scheduled with GitHub Actions.
  - Dependabot keeps **npm dependencies** and **GitHub Actions** up-to-date weekly.

- **Reusable Workflows**
  - CI tasks are modularized in a **reusable workflow** for maintainability and consistency.
