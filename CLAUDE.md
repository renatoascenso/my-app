@AGENTS.md

# Project: my-app (atlas.ascenso.ch)

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| ORM | Prisma 7 |
| Database | PostgreSQL 18 |
| Runtime | Node.js 24 |
| Process Manager | PM2 |
| Web Server | Nginx 1.28 |
| SSL | Let's Encrypt (auto-renews) |

## Infrastructure

- **Server**: Hetzner VPS — `46.225.9.172` (Ubuntu 26.04 LTS)
- **Domain**: [atlas.ascenso.ch](https://atlas.ascenso.ch)
- **App path on server**: `/var/www/my-app`
- **SSH access**: `ssh -i ~/.ssh/hetzner root@46.225.9.172`

### Firewall (UFW)
Only these ports are open:
- `22` — SSH
- `80` — HTTP (redirects to HTTPS via Nginx)
- `443` — HTTPS

Port `5432` (PostgreSQL) is **closed externally** — the DB is only accessible from localhost on the server.

### Database
- **Engine**: PostgreSQL 18, running locally on the server
- **User**: `myapp`
- **Database**: `myapp`
- **Connection string** (server-side only): `postgresql://myapp:<password>@localhost:5432/myapp?schema=public`
- The `.env` file on the server at `/var/www/my-app/.env` holds the live credentials (not committed to git)

### Prisma Setup
Prisma 7 uses adapter-based connections. The client is initialised in `src/lib/prisma.ts`:
```ts
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
export const prisma = new PrismaClient({ adapter });
```
Connection URL is configured in `prisma.config.ts` (not in `schema.prisma`).

## CI/CD Pipeline

```
Local edit → git push → GitHub (renatoascenso/my-app) → GitHub Actions → SSH into server → deploy
```

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Triggers on every push to `main`:
1. SSH into the Hetzner server
2. `git pull origin main`
3. `npm ci`
4. `npx prisma generate`
5. `npx prisma migrate deploy`
6. `npm run build`
7. `pm2 restart my-app`

Average deploy time: **~30 seconds**.

### GitHub Secrets
| Secret | Purpose |
|--------|---------|
| `SSH_PRIVATE_KEY` | Ed25519 deploy key for SSH access |
| `SERVER_HOST` | `46.225.9.172` |
| `SERVER_USER` | `root` |
| `SERVER_PATH` | `/var/www/my-app` |
| `SERVER_ENV` | Production env vars |

### Auto-push Hook
A `Stop` hook in `.claude/settings.json` automatically runs `git add -A && git commit && git push` at the end of every Claude Code turn where files were changed. This means any code change made by Claude deploys automatically to production without manual intervention.

## Local Development

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Start dev server
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout
    page.tsx         # Home page
    globals.css      # Global styles (Tailwind)
  lib/
    prisma.ts        # Prisma client singleton
  generated/
    prisma/          # Auto-generated Prisma client (do not edit)
prisma/
  schema.prisma      # Database schema
  migrations/        # Migration history
prisma.config.ts     # Prisma 7 config (DB URL, migrations path)
.github/
  workflows/
    deploy.yml       # GitHub Actions deploy workflow
.claude/
  settings.json      # Claude Code hooks (auto-push on Stop)
```

## Adding a Database Model

1. Add the model to `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name <migration-name>` locally
3. Commit and push — `prisma migrate deploy` runs automatically on the server during deploy
