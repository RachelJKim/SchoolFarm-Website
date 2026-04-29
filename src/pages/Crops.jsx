const CROPS = [
  { name: 'Tomato',         season: 'Spring – Summer', status: 'Growing', icon: '🍅' },
  { name: 'Basil',          season: 'Spring – Summer', status: 'Growing', icon: '🌿' },
  { name: '루꼴라 (Rucola)', season: 'Spring – Summer', status: 'Growing', icon: '🥗' },
  { name: 'Eggplant',       season: 'Spring – Summer', status: 'Growing', icon: '🍆' },
  { name: 'Korean Lettuce', season: 'All Year',        status: 'Growing', icon: '🥬' },
  { name: 'Potato',         season: 'Spring – Summer', status: 'Growing', icon: '🥔' },
  { name: 'Peanut',         season: 'Spring – Summer', status: 'Failed',  icon: '🥜' },
  { name: 'Green Beans',    season: 'Spring – Summer', status: 'Growing', icon: '🫘' },
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
