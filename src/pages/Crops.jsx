const CROPS = [
  { name: 'Basil',          season: 'Spring – Summer', status: 'Planned', icon: '🌿' },
  { name: 'Tomato',         season: 'Spring – Summer', status: 'Planned', icon: '🍅' },
  { name: 'Eggplant',       season: 'Spring – Summer', status: 'Planned', icon: '🍆' },
  { name: 'Korean Chilli',  season: 'Spring – Summer', status: 'Planned', icon: '🌶️' },
  { name: 'Korean Lettuce', season: 'All Year',        status: 'Planned', icon: '🥬' },
  { name: 'Cat Grass',      season: 'All Year',        status: 'Planned', icon: '🌱' },
]

export default function Crops() {
  return (
    <div className="page-panel">
      <h2 className="page-title">Crops</h2>
      <p className="page-sub">What we are growing this season.</p>
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
