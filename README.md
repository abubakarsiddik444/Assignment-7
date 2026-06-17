# KeenKeeper 👥

KeenKeeper is a responsive React relationship tracker that helps you maintain meaningful friendships. Track interactions (calls, texts, videos), set contact goals, view interaction timelines, and analyze friendship activity with beautiful charts.

---

## 🛠️ Technologies Used

### **Frontend Framework & Build Tools**
- **React 19.2.6** - UI library for building interactive components
- **Vite 8.0.12** - Lightning-fast build tool and dev server
- **@vitejs/plugin-react 6.0.1** - React Fast Refresh plugin for Vite

### **Routing & State Management**
- **React Router DOM 7.18.0** - Client-side routing with hash-based navigation for static hosting
- **React Context API** - State management for Timeline and Toast notifications

### **Data Visualization**
- **Recharts 3.8.1** - Composable charting library for pie charts and analytics

### **Styling**
- **CSS3** - Responsive grid and flexbox layouts
- **CSS Grid** - Multi-column layouts for responsive design
- **CSS Flexbox** - Component-level layout control
- **CSS Media Queries** - Mobile-first responsive design

### **Storage**
- **LocalStorage API** - Persistent timeline data storage
- **JSON** - Data format for friends profile data

### **Development Tools**
- **ESLint 10.3.0** - JavaScript linting and code quality
- **eslint-plugin-react-hooks** - React hooks best practices
- **eslint-plugin-react-refresh** - React Fast Refresh validation

---

## ✨ Key Features

### 📱 **Home / Dashboard Page**
- Friend cards with profile pictures, status badges, and tags
- Summary cards showing days since contact, goals, and upcoming due dates
- Status indicators: "on-track", "almost due", "overdue"
- Navigation to friend details and other sections

### 👤 **Friend Details Page**
- Comprehensive friend profile with bio and contact information
- **3 Stats Cards**: Days Since Contact, Goal (in days), Next Due Date
- **Relationship Goal Card** with Edit functionality
- **Quick Check-In Card** with Call, Text, and Video buttons
- Action buttons: Snooze 2 Weeks, Archive, Delete
- Toast notifications for interactions

### 📅 **Timeline Page**
- All interactions (calls, texts, videos) sorted by newest first
- Filter options: All, Call, Text, Video
- Empty state message when no interactions exist
- Real-time updates when new interactions are added

### 📊 **Friendship Analytics Page (Stats)**
- Pie chart showing interaction distribution
- Breakdown by type: Call, Text, Video
- Color-coded visualization
- Empty state when no data exists

### 🔔 **Toast Notifications**
- Confirmation messages for interactions
- Appears when adding timeline entries
- Auto-dismiss functionality

### ⚙️ **Additional Features**
- Loading spinner component
- 404 Not Found page
- Responsive navbar and footer
- Mobile-friendly design
- Deploy-safe hash routing for static hosting

---

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── AppLayout.jsx       # Main layout wrapper
│   ├── Navbar.jsx          # Navigation header
│   ├── Footer.jsx          # Footer component
│   ├── FriendCard.jsx      # Friend card display
│   ├── StatusBadge.jsx     # Status indicator badge
│   ├── TagList.jsx         # Tag display component
│   ├── TimelineEntry.jsx   # Single timeline entry
│   ├── Icon.jsx            # SVG icon component
│   ├── LoadingSpinner.jsx  # Loading indicator
│   ├── SummaryCards.jsx    # Summary statistics cards
│   └── ToastHost.jsx       # Toast notification host
│
├── pages/                  # Page components (routes)
│   ├── Home.jsx           # Dashboard / home page
│   ├── FriendDetails.jsx  # Friend profile & details
│   ├── Timeline.jsx       # Interaction timeline
│   ├── Stats.jsx          # Analytics & charts
│   └── NotFound.jsx       # 404 page
│
├── context/               # React Context providers
│   ├── TimelineContext.jsx    # Timeline state provider
│   ├── timelineContext.js     # Timeline context object
│   ├── ToastContext.jsx       # Toast notifications provider
│   └── toastContext.js        # Toast context object
│
├── hooks/                 # Custom React hooks
│   ├── useTimeline.js     # Hook to access timeline context
│   └── useToast.js        # Hook to access toast context
│
├── data/
│   └── initialTimeline.js # Seed timeline data
│
├── App.jsx               # Main app component with routing
├── main.jsx              # React DOM entry point
└── index.css             # Global styles

public/
└── data/
    └── friends.json      # Friend profiles data (name, email, status, goals)

Configuration Files:
├── vite.config.js        # Vite build configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Dependencies & scripts
└── README.md             # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone or navigate to project
cd Assignment.-7-React

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

This will start Vite dev server at `http://localhost:5173` with hot module replacement.

### Build for Production

```bash
npm run build
```

Creates optimized production bundle in `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Locally test the production build before deploying.

### Linting

```bash
npm run lint
```

Check code quality and fix ESLint issues.

---

## 💾 Data Storage

- **Friends Data**: Static JSON file at `public/data/friends.json`
- **Timeline Data**: Stored in browser's LocalStorage with key `keenkeeper.timeline`
- **Persistence**: Timeline persists across page refreshes and browser sessions

---

## 🎨 UI/UX Highlights

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Color-Coded Status**: Visual indicators for contact status
- **Icon System**: Custom SVG icons for calls, texts, videos, and actions
- **Empty States**: Helpful messages when no data exists
- **Loading States**: Spinner component for async operations
- **Toast Notifications**: Confirmation feedback for user actions

---

## 📦 Deployment

This project uses hash-based routing for static hosting compatibility:

```bash
# Build and deploy
npm run build
# Upload dist/ folder to any static hosting (GitHub Pages, Vercel, Netlify, etc.)
```

---

## 📝 Notes

- Timeline data is stored locally in the browser (LocalStorage)
- No backend server required
- Perfect for small to medium friend groups
- Fully responsive and mobile-optimized
