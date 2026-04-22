import { AlertOctagon, ArrowRight } from 'lucide-react'

const issues = [
  { n: 1, sev: 'P1', name: 'Timeouts Spiking', desc: 'Checkout assistant timing out > 2s', impact: '12.4% req', seen: '2m ago' },
  { n: 2, sev: 'P1', name: 'Hallucination Rate Increased', desc: 'Policy checks flagged 1.8% responses', impact: '5.7% req', seen: '7m ago' },
  { n: 3, sev: 'P2', name: 'Context Length Exceeded', desc: 'Prompt + history > 128k tokens', impact: '3.1% req', seen: '11m ago' },
  { n: 4, sev: 'P2', name: 'Model Rate Limiting', desc: 'gpt-4o hitting RPM limits', impact: '8.9% req', seen: '15m ago' },
  { n: 5, sev: 'P2', name: 'Success Rate Dip', desc: 'Retry attempts exhausted', impact: '2.3% req', seen: '18m ago' },
  { n: 6, sev: 'P3', name: 'High Latency p95', desc: 'Upstream vector DB slow', impact: '7.2% req', seen: '25m ago' },
  { n: 7, sev: 'P3', name: 'JSON Parse Errors', desc: 'Invalid tool call response format', impact: '1.1% req', seen: '32m ago' },
  { n: 8, sev: 'P3', name: 'Safety Filter Blocks', desc: 'Content moderation blocking outputs', impact: '0.9% req', seen: '47m ago' },
  { n: 9, sev: 'P4', name: 'Drift Detected', desc: 'Response quality degradation detected', impact: 'n/a', seen: '1h ago' },
  { n: 10, sev: 'P4', name: 'Low Token Efficiency', desc: 'High prompt tokens, low completion', impact: '4.8% req', seen: '1h 12m ago' },
]

export default function IssuesTable() {
  return (
    <div className="card">
      <div className="card-head">
        <div className="card-title">
          <div className="card-title-icon" style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444' }}>
            <AlertOctagon size={13} />
          </div>
          TOP 10 prod issues with brief description
        </div>
        <button className="btn-text">
          View All Issues <ArrowRight size={12} />
        </button>
      </div>

      <table className="issues-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Severity</th>
            <th>Issue</th>
            <th>Brief Description</th>
            <th>Impacted</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((i) => (
            <tr key={i.n}>
              <td className="td-muted">{i.n}</td>
              <td>
                <span className={`severity ${i.sev.toLowerCase()}`}>{i.sev}</span>
              </td>
              <td>{i.name}</td>
              <td className="td-muted">{i.desc}</td>
              <td>{i.impact}</td>
              <td className="td-muted">{i.seen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
