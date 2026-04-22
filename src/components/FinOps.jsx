import { DollarSign, ArrowRight, ArrowDown, Lightbulb } from 'lucide-react'

const costs = [
  { name: 'gpt-4o', amount: '$9,842', pct: '52.8%', color: '#3b82f6' },
  { name: 'gpt-4o-mini', amount: '$4,301', pct: '23.1%', color: '#8b5cf6' },
  { name: 'embedding-3', amount: '$2,104', pct: '11.3%', color: '#10b981' },
  { name: 'claude-3-5', amount: '$1,734', pct: '9.3%', color: '#f59e0b' },
  { name: 'other', amount: '$661', pct: '3.5%', color: '#6b7280' },
]

function Donut() {
  const size = 92
  const stroke = 14
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const values = costs.map((c) => parseFloat(c.pct))
  let offset = 0
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1f2a3d"
          strokeWidth={stroke}
          fill="none"
        />
        {values.map((v, i) => {
          const length = (v / 100) * circumference
          const dash = `${length} ${circumference - length}`
          const circle = (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={costs[i].color}
              strokeWidth={stroke}
              fill="none"
              strokeDasharray={dash}
              strokeDashoffset={-offset}
            />
          )
          offset += length
          return circle
        })}
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13,
          fontWeight: 700,
        }}
      >
        $18.6K
      </div>
    </div>
  )
}

export default function FinOps() {
  return (
    <div className="card" style={{ minHeight: 340 }}>
      <div className="card-head">
        <div className="card-title">
          <div className="card-title-icon" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>
            <DollarSign size={13} />
          </div>
          FinOps
        </div>
        <button className="btn-text">
          View FinOps <ArrowRight size={12} />
        </button>
      </div>

      <div className="finops-top">
        <div>
          <div className="finops-block-label">Total Cost (24h)</div>
          <div className="finops-block-value">$18,642.39</div>
          <div className="finops-block-sub" style={{ color: '#10b981' }}>
            <ArrowDown size={10} style={{ display: 'inline', marginRight: 2 }} />
            3.9% vs. previous day
          </div>
        </div>
        <div>
          <div className="finops-block-label">Monthly Budget</div>
          <div className="finops-block-value">$521,357 / $650,000</div>
          <div className="progress-bar" style={{ marginTop: 6 }}>
            <div className="progress-bar-fill" style={{ width: '80%', background: '#3b82f6' }} />
          </div>
          <div className="finops-block-sub" style={{ textAlign: 'right' }}>80%</div>
        </div>
      </div>

      <div className="finops-block-label" style={{ marginBottom: 8 }}>Cost by Model</div>
      <div className="finops-bottom">
        <div className="donut-wrap">
          <Donut />
          <div className="cost-list">
            {costs.map((c) => (
              <div key={c.name} className="cost-row">
                <span className="legend-dot" style={{ background: c.color }} />
                <span className="name">{c.name}</span>
                <span className="amount">{c.amount}</span>
                <span className="pct">{c.pct}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="savings-card">
          <div className="savings-title">
            <Lightbulb size={12} />
            Potential Savings
          </div>
          <div className="savings-val">~$1,240/month</div>
          <div className="savings-sub">
            Optimize with caching & right-sizing models.
          </div>
        </div>
      </div>
    </div>
  )
}
