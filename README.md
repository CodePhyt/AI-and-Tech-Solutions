# Osman Kadir KI & Tech Solutions

[![Status](https://img.shields.io/badge/Status-Production%20Ready-green)]() [![Build](https://img.shields.io/badge/Build-Passing-brightgreen)]()

**Sovereign Architecture & Elite Tech Consulting**

## 🚀 Overview

This repository houses the official web platform for **Osman Kadir KI & Tech Solutions**. Formerly a template, it has been completely refactored into a high-performance Next.js application tailored for showcasing advanced AI solutions, smart home integrations, and global tech consultancy.

### Key Features
- **Premium "Dark Tech" Aesthetic**: Glassmorphism, neon accents, and fluid animations.
- **Nexus AI Integration**: Custom-built AI assistant for lead qualification and user engagement.
- **Dynamic Service Architecture**: Scalable service pages built from a central configuration.
- **Secure & Compliant**: Fully implemented German legal pages (Impressum, Privacy, Terms).

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + Custom Animations
- **UI Components**: Framer Motion, Lucide React
- **Backend/Data**: Server Actions, Prisma (PostgreSQL ready)
- **AI**: Custom `ChatWidget` with external API integration capability

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo/osman-kadir-tech.git
    cd osman-kadir-tech
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    Copy `.env.example` to `.env` and fill in your credentials.
    ```bash
    cp .env.example .env
    ```
    > **Note:** `DATABASE_URL` is required for Prisma.

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

5.  **Build for Production:**
    ```bash
    npm run build
    ```

## 📂 Project Structure

- `/app`: App Router pages and layouts.
  - `/services`: Dynamic service pages.
  - `/legal`: Compliance pages.
  - `/api`: Server-side API routes (e.g., `/api/chat`).
- `/components`: Reusable UI components.
  - `/features`: complex feature components (e.g., `AssessmentFlow`).
  - `/ui`: Atomic UI elements.
- `/lib`: Utility functions and constants (`services.ts`, `utils.ts`).
- `/public`: Static assets.

## 🛡️ License

Private & Confidential. All rights reserved by Osman Kadir KI & Tech Solutions.
