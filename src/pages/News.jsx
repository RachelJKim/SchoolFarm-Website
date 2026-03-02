const NEWS = [
  {
    date: 'Feb 26, 2026',
    title: 'New Memebers + Farm Name Announced',
    body:  "Donghee and Hojeong joined the crew this year! Our farm’s name for 2026 is officially '도파밍 Diggers.'",
  },
]

export default function News() {
  return (
    <div className="page-panel">
      <h2 className="page-title">News</h2>
      <p className="page-sub">This year's updates...</p>
      <ul className="news-list">
        {NEWS.map(n => (
          <li key={n.title} className="news-item">
            <span className="news-date">{n.date}</span>
            <h3 className="news-headline">{n.title}</h3>
            <p className="news-body">{n.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
