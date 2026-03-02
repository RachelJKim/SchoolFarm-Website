import { useMemo } from 'react'

import bowonImg     from '../assets/crows/crow-bowon.png'
import dkImg        from '../assets/crows/crow-dk.png'
import hoImg        from '../assets/crows/crow-ho.png'
import rachelImg    from '../assets/crows/crow-rachel.png'
import kyeungeunImg from '../assets/crows/crow-kyeungeun.png'
import jinaImg      from '../assets/crows/crow-jina.png'
import dongheeImg   from '../assets/crows/crow-donghee.png'

const PEOPLE = [
  { id: 'bowon',     name: 'Bowon',     img: bowonImg     },
  { id: 'dk',        name: 'DK',        img: dkImg        },
  { id: 'ho',        name: 'Ho',        img: hoImg        },
  { id: 'rachel',    name: 'Rachel',    img: rachelImg    },
  { id: 'kyeungeun', name: 'KyeungEun', img: kyeungeunImg },
  { id: 'jina',     name: 'Jina',      img: jinaImg      },
  { id: 'donghee',  name: 'Donghee',   img: dongheeImg   },
]

const ZONES = [
  { xMin:  4, xMax: 16, yMin: 24, yMax: 36, hMin: 135, hMax: 160 },
  { xMin: 22, xMax: 34, yMin: 14, yMax: 24, hMin: 175, hMax: 205 },
  { xMin: 40, xMax: 52, yMin: 20, yMax: 32, hMin: 150, hMax: 175 },
  { xMin: 58, xMax: 70, yMin: 12, yMax: 22, hMin: 185, hMax: 215 },
  { xMin: 72, xMax: 82, yMin: 26, yMax: 38, hMin: 140, hMax: 165 },
  { xMin: 84, xMax: 92, yMin: 16, yMax: 26, hMin: 160, hMax: 190 },
  { xMin: 10, xMax: 22, yMin: 10, yMax: 20, hMin: 170, hMax: 200 },
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
        <h1 className="home-title">
          <span className="home-title-line1">Human, Computer</span>
          <span className="home-title-line2">
            <span className="home-title-and">and</span>{' '}
            <span className="home-title-farmers">Farmers</span>
          </span>
        </h1>
      </div>
    </>
  )
}
