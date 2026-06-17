# KeenKeeper

KeenKeeper is a responsive React relationship tracker for keeping meaningful friendships active. It shows friend cards, contact goals, a shared interaction timeline, and friendship analytics in a clean dashboard-style interface.

## Technologies Used

- React.js
- Vite
- React Router DOM
- Recharts
- CSS3 responsive grid and flex layouts
- Local Storage for timeline persistence

## Key Features

- Friend dashboard with summary cards, status colors, tags, and profile navigation.
- Friend details page with contact goals, action buttons, and quick check-ins for Call, Text, and Video.
- Timeline page with interaction filtering and newest-first sorting.
- Friendship Analytics page with a Recharts pie chart for Call, Text, and Video activity.
- 404 page, loading animation, toast notifications, and deploy-safe hash routing.

## Project Structure

- `src/components` contains reusable UI such as Navbar, Footer, FriendCard, TimelineEntry, and shared badges.
- `src/pages` contains Home, Friend Details, Timeline, Stats, and Not Found routes.
- `src/context` contains timeline and toast state providers.
- `public/data/friends.json` contains realistic friend profile data.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
