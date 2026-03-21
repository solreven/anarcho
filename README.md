# The Anarchist

A full-stack web application and personal portfolio project — a newspaper-style platform built to demonstrate modern Next.js engineering with TypeScript, authentication, and a live database backend.

---

## Overview

The Anarchist is a developer portfolio project that showcases practical, production-relevant skills: server-side and client-side rendering decisions, dynamic routing, REST API design, database integration, and user authentication. The site presents content in a newspaper aesthetic with articles inspired by anarchist political philosophy.

---

## Key Features

- Authentication with sign-in, sign-up, and protected routes via Clerk
- Dynamic product/article pages using Next.js file-based routing (`/products/[ref]`)
- REST API routes with GET (public) and POST (authenticated, owner-scoped) operations
- MongoDB integration with a reusable server-side connection utility
- Responsive layout built with Tailwind CSS and Google Fonts (Figtree + Open Sans)
- TypeScript throughout — both frontend components and backend API handlers

---

## Tech Stack

| Layer          | Technology                       |
| -------------- | -------------------------------- |
| Framework      | Next.js 16 (App Router)          |
| Language       | TypeScript 5                     |
| Styling        | Tailwind CSS 4                   |
| Authentication | Clerk (`@clerk/nextjs`)          |
| Database       | MongoDB 7 (via `mongodb` driver) |
| Runtime        | Node.js                          |

---

## Project Structure

```
app/
  api/
    mongodb/route.ts     # GET (public) + POST (auth-protected) API handlers
  components/
    PageLayout.tsx       # Shared layout with Clerk-powered navigation
    AltProductCards.tsx  # Product card component
  data/
    altProducts.ts       # Static product seed data
  lib/
    mongoDBconnect.ts    # MongoDB connection utility
  about/page.tsx         # About page
  products/[ref]/page.tsx # Dynamic product detail page
  layout.tsx             # Root layout with metadata and font config
  page.tsx               # Homepage
  globals.css            # Global Tailwind styles
public/                  # Static assets
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB instance)
- A [Clerk](https://clerk.com) account with an application configured

### Installation

```bash
git clone https://github.com/solreven/anarcho.git
cd anarcho
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the project root (this file is git-ignored and must never be committed):

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

| Variable                            | Description                                                 |
| ----------------------------------- | ----------------------------------------------------------- |
| `MONGODB_URI`                       | Full MongoDB connection string, including credentials       |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key (safe for browser)                    |
| `CLERK_SECRET_KEY`                  | Clerk secret key — server-side only, never expose to client |

> **Security:** All secrets must be stored exclusively in `.env.local`. This file is included in `.gitignore` and must never be committed or pushed. Do not hardcode any credentials in source files.

---

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the local development server   |
| `npm run build` | Build the application for production |
| `npm start`     | Start the production server          |
| `npm run lint`  | Run ESLint across the project        |

---

## API Endpoints

### `GET /api/mongodb`

Returns all items from the `testing-items` collection.

- **Auth required:** No
- **Response:** `200 OK` — JSON array of items

### `POST /api/mongodb`

Inserts a new item into the `testing-items` collection, tagged with the authenticated user's ID.

- **Auth required:** Yes (Clerk session)
- **Body:** JSON object with item fields
- **Response:** `200 OK` — `{ insertedId: string }`

---

## Authentication and Security Notes

- Authentication is handled entirely by [Clerk](https://clerk.com) — no custom password storage or session management.
- The `POST /api/mongodb` route uses `auth()` from `@clerk/nextjs/server` to get the current user's ID server-side before any write operation.
- All sensitive operations (database writes, reading credentials) happen on the server, never in client components.
- MongoDB credentials are accessed only via `process.env.MONGODB_URI`, which is validated at startup.
- Use a dedicated MongoDB user with least-privilege access (read/write to the specific database only — not admin).
- Never share or log `CLERK_SECRET_KEY` or `MONGODB_URI` values.

---

## Deployment Notes

This project is compatible with [Vercel](https://vercel.com) (recommended for Next.js App Router).

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add all environment variables from `.env.local` to the Vercel project settings under **Environment Variables**.
4. Deploy.

> Do not rely on `.env.local` being present in production — Vercel injects environment variables separately.

---

## Troubleshooting

**`MONGODB_URI environment variable is not set`**
→ Ensure `.env.local` exists in the project root and contains a valid `MONGODB_URI` value. Restart the dev server after changes.

**Clerk authentication not working**
→ Verify that `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are correctly set and match your Clerk application environment (development vs. production keys).

**Build fails with TypeScript errors**
→ Run `npm run lint` to identify issues. Ensure all types are satisfied — no implicit `any` values.

---

## Future Improvements

- [ ] Replace static product seed data with live MongoDB-backed content
- [ ] Add full CRUD UI for authenticated users
- [ ] Implement role-based access control (admin vs. reader)
- [ ] Migrate content to a CMS (e.g., Sanity) with GROQ queries
- [ ] Add pagination and search for article listings

---

## License

[TODO: add license]
