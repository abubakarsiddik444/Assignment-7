import { HashRouter, Route, Routes } from 'react-router-dom'
import { TimelineProvider } from './context/TimelineContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'
import AppLayout from './components/AppLayout.jsx'
import Home from './pages/Home.jsx'
import FriendDetails from './pages/FriendDetails.jsx'
import Timeline from './pages/Timeline.jsx'
import Stats from './pages/Stats.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <HashRouter>
      <ToastProvider>
        <TimelineProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/friends/:friendId" element={<FriendDetails />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </TimelineProvider>
      </ToastProvider>
    </HashRouter>
  )
}

export default App
