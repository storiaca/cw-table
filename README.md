# CW Table

## Getting Started

First, create .env file in root of project with this content:

```bash
DATABASE_URL="file:./dev.db"
```

## Then install packages with command:

```bash
npm install
```

## Run server with command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## For database:

```bash
npx prisma studio
```

Open [http://localhost::5555](http://localhost:5555) with your browser to see data in database.
