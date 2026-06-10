# RDP Portfolio — Setup & Run

A two-folder monorepo:

```
rdp-portfolio/
├── frontend/   # Next.js 14 (App Router) — the portfolio site
└── backend/    # NestJS 10 — contact form / lead capture API
```

The frontend is a polished, client-attracting marketing site. The backend exposes a
validated `POST /api/contact` endpoint that the site's contact form posts to. Submissions
are stored in `backend/data/contacts.jsonl` and optionally forwarded to Slack.

---

## Prerequisites

- **Node.js 18.18+** (Node 20 LTS recommended)
- **npm** (ships with Node) — or `pnpm` / `yarn` if you prefer

Check:

```bash
node -v
npm -v
```

---

## 1. Install dependencies

Open two terminals (one per project).

```bash
# Terminal A — backend (NestJS)
cd rdp-portfolio/backend
npm install

# Terminal B — frontend (Next.js)
cd rdp-portfolio/frontend
npm install
```

---

## 2. Configure environment variables

### Backend

```bash
cd rdp-portfolio/backend
cp .env.example .env
```

Open `backend/.env` and edit if needed. Defaults work out of the box:

```
PORT=4000
CORS_ORIGIN=http://localhost:3000
NOTIFY_EMAIL=devansh@nexttoppers.com
SLACK_WEBHOOK_URL=
```

### Frontend

```bash
cd rdp-portfolio/frontend
cp .env.local.example .env.local
```

`frontend/.env.local` should contain:

```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

---

## 3. Run in development

```bash
# Terminal A — backend
cd rdp-portfolio/backend
npm run start:dev
# → RDP backend listening on http://localhost:4000/api

# Terminal B — frontend
cd rdp-portfolio/frontend
npm run dev
# → http://localhost:3000
```

Open <http://localhost:3000> in your browser. Submitting the contact form posts to the
NestJS backend, which validates the payload, persists the lead, and (optionally) posts to
Slack.

---

## 4. Add your screenshots

The Next.js app serves anything inside `frontend/public/` at `/`. Drop your screenshots
into `frontend/public/screenshots/` using the filenames already wired up in the page:

| Card                                  | File path                                          |
|---------------------------------------|----------------------------------------------------|
| Live Streaming Platform               | `frontend/public/screenshots/live-streaming.png`   |
| HRMS Suite                            | `frontend/public/screenshots/hrms.png`             |
| Test Series Platform                  | `frontend/public/screenshots/test-series.png`      |
| AWS Architecture Diagram              | `frontend/public/screenshots/aws-architecture.png` |
| iOS / Android App                     | `frontend/public/screenshots/mobile-app.png`       |
| Website &amp; SEO                     | `frontend/public/screenshots/web-seo.png`          |
| DevOps Case Study                     | `frontend/public/screenshots/devops-case-study.png`|
| Team — Devansh                        | `frontend/public/screenshots/team-devansh.png`     |
| Team — DevOps lead                    | `frontend/public/screenshots/team-devops.png`      |

Image guidance:

- Work cards expect **16:9** images (e.g. 1600×900). PNG or JPG, ideally under 300 KB.
- Team avatars expect **square** images (e.g. 400×400).
- Each placeholder auto-swaps to the real image once the file exists at the path above.
  No code changes needed.

---

## 5. Production build

```bash
# Backend
cd rdp-portfolio/backend
npm run build
npm run start:prod      # serves the compiled JS from ./dist

# Frontend
cd rdp-portfolio/frontend
npm run build
npm run start           # serves the optimized Next.js build
```

---

## 6. API reference

### `POST /api/contact`

Submit a lead from the contact form.

**Request body**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Acme Inc",
  "message": "We need a live streaming platform for 10K concurrent viewers."
}
```

**Validation rules** (enforced by `class-validator`):

- `name` — required, 2–120 chars
- `email` — required, valid email, up to 200 chars
- `company` — optional, up to 160 chars
- `message` — required, 10–4000 chars

**Success response (200)**

```json
{
  "ok": true,
  "message": "Thanks — we'll be in touch within one business day.",
  "id": "lead_lwt0k1_a8f2cz",
  "receivedAt": "2026-05-18T15:30:00.000Z"
}
```

**Validation error response (400)**

```json
{
  "statusCode": 400,
  "message": ["Please provide a valid email address."],
  "error": "Bad Request"
}
```

### `GET /api`

Health check — returns `{ "service": "rdp-backend", "status": "ok" }`.

### `GET /api/health`

Liveness probe — returns `{ "status": "ok", "uptime": <seconds> }`.

---

## 7. Quick curl test

With the backend running on `:4000`:

```bash
curl -sS -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "company": "Acme",
    "message": "Looking for a live streaming partner."
  }'
```

You should see the success JSON above, and a new line appended to
`backend/data/contacts.jsonl`.

---

## 8. Deploy notes

- **Frontend** &rarr; Vercel (recommended) or any Node host. Set
  `NEXT_PUBLIC_API_URL` to your deployed backend's public URL.
- **Backend** &rarr; Any Node host (Railway, Render, Fly.io, AWS App Runner, ECS,
  EKS). Set `PORT`, `CORS_ORIGIN`, and (optional) `SLACK_WEBHOOK_URL`.
- For persistent lead storage, swap the JSONL file in `ContactService` for a database
  (Postgres, MongoDB, Supabase, DynamoDB — your call).

---

## Project tree

```
rdp-portfolio/
├── SETUP.md
├── frontend/
│   ├── app/
│   │   ├── data.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ContactForm.tsx
│   │   ├── Icon.tsx
│   │   └── Shot.tsx
│   ├── public/
│   │   └── screenshots/
│   ├── .env.local.example
│   ├── .gitignore
│   ├── next-env.d.ts
│   ├── next.config.js
│   ├── package.json
│   └── tsconfig.json
└── backend/
    ├── src/
    │   ├── app.module.ts
    │   ├── health.controller.ts
    │   ├── main.ts
    │   └── contact/
    │       ├── contact.controller.ts
    │       ├── contact.module.ts
    │       ├── contact.service.ts
    │       └── dto/
    │           └── create-contact.dto.ts
    ├── .env.example
    ├── .gitignore
    ├── nest-cli.json
    ├── package.json
    ├── tsconfig.build.json
    └── tsconfig.json
```
