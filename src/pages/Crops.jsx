const CROPS = [
  { name: 'Wheat',       season: 'Spring – Summer', status: 'Growing',   icon: '🌾' },
  { name: 'Barley',      season: 'Spring',           status: 'Planted',   icon: '🌿' },
  { name: 'Sunflower',   season: 'Summer',           status: 'Growing',   icon: '🌻' },
  { name: 'Sweet Potato',season: 'Summer – Autumn',  status: 'Planned',   icon: '🍠' },
  { name: 'Lettuce',     season: 'All Year',          status: 'Harvested', icon: '🥬' },
  { name: 'Radish',      season: 'Autumn – Winter',  status: 'Planned',   icon: '🥕' },
]

export default function Crops() {
  return (
    <div className="page-panel">
      <h2 className="page-title">Crops</h2>
      <p className="page-sub">What we grow on the KAIST fields this season.</p>
      <div className="crops-grid">
        {CROPS.map(c => (
          <div key={c.name} className="crop-card">
            <span className="crop-icon">{c.icon}</span>
            <span className="crop-name">{c.name}</span>
            <span className="crop-season">{c.season}</span>
            <span className={`crop-status status-${c.status.toLowerCase()}`}>{c.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
