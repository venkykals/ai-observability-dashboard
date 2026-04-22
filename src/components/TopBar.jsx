import { ChevronDown, Search, Bell, HelpCircle } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-field">
        <span className="topbar-field-label">Environment</span>
        <button className="select">
          <span>Production</span>
          <ChevronDown size={14} style={{ marginLeft: 'auto' }} />
        </button>
      </div>

      <div className="topbar-field">
        <span className="topbar-field-label">Time Range</span>
        <button className="select">
          <span>Last 24 Hours</span>
          <ChevronDown size={14} style={{ marginLeft: 'auto' }} />
        </button>
      </div>

      <div className="search">
        <Search size={14} />
        <input placeholder="Search traces, models, prompts, issues…" />
        <span className="kbd">
          <span>⌘</span>
          <span>K</span>
        </span>
      </div>

      <div className="topbar-actions">
        <button className="icon-btn">
          <Bell size={16} />
          <span className="dot" />
        </button>
        <button className="icon-btn">
          <HelpCircle size={16} />
        </button>
        <div className="avatar">JD</div>
      </div>
    </div>
  )
}
