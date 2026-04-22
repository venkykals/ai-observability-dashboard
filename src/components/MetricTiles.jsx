import {
  Activity,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Server,
  ArrowUp,
  ArrowDown,
} from 'lucide-react'

const tiles = [
  {
    label: 'Total Requests',
    value: '4,892,301',
    delta: { dir: 'up', value: '7.2%' },
    sub: 'vs. previous day',
    icon: Activity,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.12)',
  },
  {
    label: 'P95 Latency',
    value: '1.42s',
    delta: { dir: 'down', value: '8.5%', good: true },
    sub: 'Target: < 2.00s',
    icon: Clock,
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.12)',
  },
  {
    label: 'Success Rate',
    value: '99.34%',
    delta: { dir: 'up', value: '0.18%' },
    sub: 'Target: > 99.0%',
    icon: CheckCircle2,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.12)',
  },
  {
    label: 'Error Rate',
    value: '0.66%',
    delta: { dir: 'up', value: '0.12%', bad: true },
    sub: 'Target: < 1.00%',
    icon: AlertTriangle,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
  },
  {
    label: 'Throughput',
    value: '2,842 req/min',
    delta: { dir: 'up', value: '5.7%' },
    sub: '\u00A0',
    icon: Zap,
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.12)',
  },
  {
    label: 'Model Availability',
    value: '99.98%',
    delta: null,
    sub: 'SLA: 99.95%',
    icon: Server,
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
  },
]

function Delta({ d }) {
  if (!d) return null
  const isUp = d.dir === 'up'
  const dirClass = d.bad ? 'down' : d.good ? 'up' : isUp ? 'up' : 'down'
  const Arrow = isUp ? ArrowUp : ArrowDown
  return (
    <span className={`delta ${dirClass}`}>
      <Arrow size={11} />
      {d.value}
    </span>
  )
}

export default function MetricTiles() {
  return (
    <>
      <div className="section-title">AI core monitoring tiles</div>
      <div className="tiles">
        {tiles.map((t) => (
          <div key={t.label} className="tile">
            <div className="tile-head">
              <div className="tile-icon" style={{ background: t.bg, color: t.color }}>
                <t.icon size={14} />
              </div>
              <span>{t.label}</span>
            </div>
            <div className="tile-value">
              {t.value}
              <Delta d={t.delta} />
            </div>
            <div className="tile-foot">{t.sub}</div>
          </div>
        ))}
      </div>
    </>
  )
}
