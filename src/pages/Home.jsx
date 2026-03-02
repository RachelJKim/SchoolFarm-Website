import { useMemo } from 'react'

import bowonImg  from '../assets/crows/crow-bowon.png'
import dkImg     from '../assets/crows/crow-dk.png'
import hoImg     from '../assets/crows/crow-ho.png'
import rachelImg from '../assets/crows/crow-rachel.png'

const PEOPLE = [
  { id: 'bowon',  name: 'Bowon',  img: bowonImg  },
  { id: 'dk',     name: 'DK',     img: dkImg     },
  { id: 'ho',     name: 'Ho',     img: hoImg     },
  { id: 'rachel', name: 'Rachel', img: rachelImg },
]

const ZONES = [
  { xMin:  6, xMax: 20, yMin: 26, yMax: 38, hMin: 135, hMax: 160 },
  { xMin: 28, xMax: 43, yMin: 14, yMax: 24, hMin: 175, hMax: 205 },
  { xMin: 54, xMax: 67, yMin: 21, yMax: 33, hMin: 150, hMax: 175 },
  { xMin: 73, xMax: 86, yMin: 12, yMax: 21, hMin: 185, hMax: 215 },
]

export default function Home() {
  const scarecrows = useMemo(() =>
    PEOPLE.map((person, i) => {
      const z = ZONES[i]
      return {
        ...person,
        left:   z.xMin + Math.random() * (z.xMax - z.xMin),
        bottom: z.yMin + Math.random() * (z.yMax - z.yMin),
        height: Math.round(z.hMin + Math.random() * (z.hMax - z.hMin)),
      }
    })
  , [])

  return (
    <>
      {/* Scarecrows */}
      <div className="scarecrow-stage">
        {scarecrows.map(({ id, name, img, left, bottom, height }) => (
          <div
            key={id}
            className="scarecrow"
            style={{ left: `${left}%`, bottom: `${bottom}%`, '--h': `${height}px` }}
          >
            <img src={img} alt={name} draggable={false} />
            <span className="scarecrow-label">{name}</span>
          </div>
        ))}
      </div>

      {/* Hero — title only, no tagline or buttons */}
      <div className="hero">
        <h1 className="home-title">KAIST Farmers</h1>
      </div>
    </>
  )
}
