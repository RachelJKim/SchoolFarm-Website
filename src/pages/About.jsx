import farmImg from '../assets/images/farm-image.JPG'

export default function About() {
  return (
    <div className="page-panel">
      <h2 className="page-title">도파밍 (Do-Farmin')</h2>
      <p className="page-sub">School Farm 2026, KAIST </p>

      <div className="about-content">
        <div className="about-body">
          <p>
            Our farm is a small <strong><em>15-square-meter plot</em></strong> located inside the <strong><em>KAIST campus</em></strong>.
          </p>
          <p>
            The farm's name and its crew change slightly every year. For 2026, <strong><em>seven HCI researchers</em></strong> are cultivating the land together.
          </p>
          <p>
            Everything we harvest goes straight into our lunch boxes.
          </p>
          <p>
            If you're curious about our crops or want to share some, feel free to contact us!
          </p>
        </div>
        <img src={farmImg} alt="Our farm" className="about-farm-img" draggable={false} />
      </div>
    </div>
  )
}
