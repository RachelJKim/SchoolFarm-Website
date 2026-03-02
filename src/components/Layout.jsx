import { Outlet, NavLink } from 'react-router-dom'
import '../App.css'

export default function Layout() {
  return (
    <div className="scene">
      {/* ── Painting background (always present) ── */}
      <div className="painting" />
      <div className="sky-veil" />

      {/* ── Navigation ── */}
      <nav>
        <NavLink to="/" className="brand">
          <span className="brand-bar" />
          <span className="brand-name">2026</span>
        </NavLink>

        <ul className="nav-links">
          <li><NavLink to="/crops"   className={({ isActive }) => isActive ? 'active' : ''}>Crops</NavLink></li>
          <li><NavLink to="/members" className={({ isActive }) => isActive ? 'active' : ''}>Members</NavLink></li>
          <li><NavLink to="/news"    className={({ isActive }) => isActive ? 'active' : ''}>News</NavLink></li>
        </ul>

        <a href="#" className="nav-ticket">Market</a>
      </nav>

      {/* ── Page content ── */}
      <Outlet />
    </div>
  )
}
