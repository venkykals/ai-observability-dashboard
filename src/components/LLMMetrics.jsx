import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts'
import { BarChart3, ArrowRight } from 'lucide-react'

function spark(n, base, amp) {
  return Array.from({ length: n }, (_, i) => ({
    i,
    v: base + Math.sin(i / 1.7) * amp + (Math.random() - 0.5) * amp * 0.4,
  }))
}

const metrics = [
  {
    label: 'Latency (P50/P95)',
    value: '0.78s / 1.42s',
    color: '#3b82f6',
    data: spark(22, 1.2, 0.35),
    axis: ['2s', '1s', '0s'],
  },
  {
    label: 'Hallucination Rate',
    value: '0.96%',
    color: '#a78bfa',
    data: spark(22, 1, 0.3),
    axis: ['2%', '1%', '0%'],
  },
  {
    label: 'Prompt Success',
    value: '99.34%',
    color: '#10b981',
    data: spark(22, 99, 0.6),
    axis: ['100%', '99%', '98%'],
  },
  {
    label: 'Tokens per Request',
    value: '26,312',
    color: '#f59e0b',
    data: spark(22, 25000, 3500),
    axis: ['30k', '25k', '20k'],
  },
]

export default function LLMMetrics() {
  return (
    <div className="card">
      <div className="card-head">
        <div className="card-title">
          <div className="card-title-icon" style={{ background: 'rgba(59,130,246,0.15)', color: '#60a5fa' }}>
            <BarChart3 size={13} />
          </div>
          LLM Metrics
        </div>
        <button className="btn-text">
          View Metrics <ArrowRight size={12} />
        </button>
      </div>

      <div className="llm-grid">
        {metrics.map((m) => (
          <div key={m.label} className="llm-cell">
            <div className="llm-label">{m.label}</div>
            <div className="llm-value">{m.value}</div>
            <div className="spark">
              <div style={{ height: 40 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={m.data} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                    <YAxis hide domain={['dataMin', 'dataMax']} />
                    <Line
                      type="monotone"
                      dataKey="v"
                      stroke={m.color}
                      strokeWidth={1.8}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="spark-axis">
                {m.axis.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
