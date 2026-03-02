import bowonImg     from '../assets/crows/crow-bowon.png'
import dkImg        from '../assets/crows/crow-dk.png'
import hoImg        from '../assets/crows/crow-ho.png'
import rachelImg    from '../assets/crows/crow-rachel.png'
import kyeungeunImg from '../assets/crows/crow-kyeungeun.png'
import jinaImg      from '../assets/crows/crow-jina.png'
import dongheeImg   from '../assets/crows/crow-donghee.png'

const MEMBERS = [
  { name: 'Bowon',     role: 'Field Manager',    img: bowonImg     },
  { name: 'DK',        role: 'Harvest Lead',     img: dkImg        },
  { name: 'Ho',        role: 'Irrigation Expert', img: hoImg        },
  { name: 'Rachel',    role: 'Seed Specialist',  img: rachelImg    },
  { name: 'KyeungEun', role: 'Seed Specialist',  img: kyeungeunImg },
  { name: 'Jina',      role: 'Seed Specialist',  img: jinaImg      },
  { name: 'Donghee',   role: 'Seed Specialist',  img: dongheeImg   },
]

export default function Members() {
  return (
    <div className="page-panel">
      <h2 className="page-title">Members</h2>
      <p className="page-sub">This year's Farmers.</p>
      <div className="members-grid">
        {MEMBERS.map(m => (
          <div key={m.name} className="member-card">
            <img src={m.img} alt={m.name} className="member-img" draggable={false} />
            <span className="member-name">{m.name}</span>
            <span className="member-role">{m.role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
