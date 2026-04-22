import {
  Sparkles,
  Home,
  Activity,
  CheckSquare,
  Database,
  Box,
  Bell,
  DollarSign,
  Settings,
  FileText,
  LifeBuoy,
  CircleDot,
} from 'lucide-react'

const nav = [
  { icon: Home, label: 'Home', active: true },
  { icon: Activity, label: 'Traces & Sessions' },
  { icon: CheckSquare, label: 'Evaluations' },
  { icon: Database, label: 'Datasets' },
  { icon: Box, label: 'Models' },
  { icon: Bell, label: 'Alerts' },
  { icon: DollarSign, label: 'FinOps' },
  { icon: Settings, label: 'Settings' },
]

const footer = [
  { icon: FileText, label: 'Docs' },
  { icon: LifeBuoy, label: 'Contact Support' },
  { icon: CircleDot, label: 'Status' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">
          <Sparkles size={16} />
        </div>
        <div className="brand-name">AI Observability</div>
      </div>

      <nav className="nav">
        {nav.map((n) => (
          <a key={n.label} className={`nav-item ${n.active ? 'active' : ''}`}>
            <n.icon size={16} />
            <span>{n.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Enterprise Plan</div>
        <div className="sidebar-section-sub">32 / 50 Projects</div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '64%' }} />
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-footer-label">Need help?</div>
        {footer.map((f) => (
          <a key={f.label} className="nav-item">
            <f.icon size={15} />
            <span>{f.label}</span>
          </a>
        ))}
        <div className="version">v2.4.0</div>
      </div>
    </aside>
  )
}
