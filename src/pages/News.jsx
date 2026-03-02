const NEWS = [
  {
    date: 'Feb 28, 2026',
    title: 'First Wheat Sprouts of the Season',
    body:  'After a cold January, our wheat plots are finally showing healthy early growth. Soil temperature hit the required 10 °C this week.',
  },
  {
    date: 'Feb 14, 2026',
    title: 'Spring Planting Schedule Released',
    body:  'The 2026 planting calendar is now confirmed. Barley goes in first week of March, sunflower seeds arrive mid-April.',
  },
  {
    date: 'Jan 30, 2026',
    title: 'KAIST Farmers Win Campus Sustainability Award',
    body:  'Our team was recognised for zero-waste composting and water-recycling irrigation initiatives across all plots.',
  },
  {
    date: 'Jan 10, 2026',
    title: 'New Members Join for 2026',
    body:  'Welcome to Bowon, DK, Ho, and Rachel — our newest farmers bringing fresh energy to the campus fields this year.',
  },
]

export default function News() {
  return (
    <div className="page-panel">
      <h2 className="page-title">News</h2>
      <p className="page-sub">Updates from the fields.</p>
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
