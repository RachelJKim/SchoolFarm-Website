import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home    from './pages/Home'
import Crops   from './pages/Crops'
import Members from './pages/Members'
import News    from './pages/News'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index        element={<Home />}    />
        <Route path="crops"   element={<Crops />}   />
        <Route path="members" element={<Members />} />
        <Route path="news"    element={<News />}    />
      </Route>
    </Routes>
  )
}
