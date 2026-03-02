import { useState } from 'react'
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom'
import '../App.css'

export default function Layout() {
  const [showMarket, setShowMarket] = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const isHome    = location.pathname === '/'

  function closeMenu() { setMenuOpen(false) }

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
      <nav className={menuOpen ? 'nav-menu-open' : ''}>
        {/* Desktop brand */}
        <NavLink to="/" className="brand">
          <span className="brand-bar" />
          <span className="brand-name">2026</span>
        </NavLink>

        {/* Mobile hamburger / close button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className="nav-links">
          <li><NavLink to="/about"   onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/crops"   onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Crops</NavLink></li>
          <li><NavLink to="/members" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Members</NavLink></li>
          <li><NavLink to="/news"    onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>News</NavLink></li>
        </ul>

        <button className="nav-ticket" onClick={() => setShowMarket(true)}>
          Visit Market
        </button>
      </nav>

      {/* ── Mobile menu backdrop (closes menu on outside tap) ── */}
      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={closeMenu} />
      )}

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
