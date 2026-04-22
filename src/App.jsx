import { ExternalLink } from 'lucide-react'
import Sidebar from './components/Sidebar.jsx'
import TopBar from './components/TopBar.jsx'
import MetricTiles from './components/MetricTiles.jsx'
import Chatbot from './components/Chatbot.jsx'
import TokenChart from './components/TokenChart.jsx'
import FinOps from './components/FinOps.jsx'
import IssuesTable from './components/IssuesTable.jsx'
import LLMMetrics from './components/LLMMetrics.jsx'

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <TopBar />
        <div className="content">
          <div className="content-header">
            <div>
              <h1 className="content-title">AI System Overview</h1>
              <div className="content-sub">
                Monitor performance, quality, and cost of your AI systems in production.
              </div>
            </div>
            <button className="btn-text">
              <ExternalLink size={12} />
              Customize Dashboard
            </button>
          </div>

          <MetricTiles />

          <div className="row row-top">
            <Chatbot />
            <TokenChart />
            <FinOps />
          </div>

          <div className="row row-bottom">
            <IssuesTable />
            <LLMMetrics />
          </div>
        </div>
      </div>
    </div>
  )
}
