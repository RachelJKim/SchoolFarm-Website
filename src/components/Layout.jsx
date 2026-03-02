import { useState } from 'react'
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom'
import '../App.css'

export default function Layout() {
  const [showMarket, setShowMarket] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const isHome    = location.pathname === '/'

  return (
    <div className="scene">
      {/* ── Painting background (always present) ── */}
      <div className="painting" />
      <div className="sky-veil" />

      {/* ── Invisible click-to-go-home layer (sub-pages only) ── */}
      {!isHome && (
        <div className="back-overlay" onClick={() => navigate('/')} />
      )}

      {/* ── Navigation ── */}
      <nav>
        <NavLink to="/" className="brand">
          <span className="brand-bar" />
          <span className="brand-name">2026</span>
        </NavLink>

        <ul className="nav-links">
          <li><NavLink to="/about"   className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/crops"   className={({ isActive }) => isActive ? 'active' : ''}>Crops</NavLink></li>
          <li><NavLink to="/members" className={({ isActive }) => isActive ? 'active' : ''}>Members</NavLink></li>
          <li><NavLink to="/news"    className={({ isActive }) => isActive ? 'active' : ''}>News</NavLink></li>
        </ul>

        <button className="nav-ticket" onClick={() => setShowMarket(true)}>
          Visit Market
        </button>
      </nav>

      {/* ── Page content ── */}
      <Outlet />

      {/* ── Market overlay ── */}
      {showMarket && (
        <div className="market-overlay" onClick={() => setShowMarket(false)}>
          <div className="market-modal" onClick={e => e.stopPropagation()}>
            <span className="market-wheat">🌾</span>
            <p className="market-text">Wait until Harvest</p>
            <p className="market-sub">We will open soon...</p>
          </div>
        </div>
      )}
    </div>
  )
}
