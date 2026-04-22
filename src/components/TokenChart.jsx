import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { Coins, ArrowUp } from 'lucide-react'

const data = [
  { t: '00:00', prompt: 5.2, completion: 3.0 },
  { t: '01:00', prompt: 5.6, completion: 3.2 },
  { t: '02:00', prompt: 6.0, completion: 3.4 },
  { t: '03:00', prompt: 5.8, completion: 3.2 },
  { t: '04:00', prompt: 6.3, completion: 3.5 },
  { t: '05:00', prompt: 7.0, completion: 3.9 },
  { t: '06:00', prompt: 7.4, completion: 4.1 },
  { t: '07:00', prompt: 7.8, completion: 4.3 },
  { t: '08:00', prompt: 8.2, completion: 4.6 },
  { t: '09:00', prompt: 8.8, completion: 5.0 },
  { t: '10:00', prompt: 9.4, completion: 5.3 },
  { t: '11:00', prompt: 9.1, completion: 5.1 },
  { t: '12:00', prompt: 9.7, completion: 5.6 },
  { t: '13:00', prompt: 10.2, completion: 5.8 },
  { t: '14:00', prompt: 10.6, completion: 6.0 },
  { t: '15:00', prompt: 10.3, completion: 5.9 },
  { t: '16:00', prompt: 10.9, completion: 6.2 },
  { t: '17:00', prompt: 10.6, completion: 6.0 },
  { t: '18:00', prompt: 11.3, completion: 6.4 },
  { t: '19:00', prompt: 11.6, completion: 6.6 },
  { t: '20:00', prompt: 11.2, completion: 6.3 },
  { t: '21:00', prompt: 10.9, completion: 6.1 },
  { t: '22:00', prompt: 10.4, completion: 5.8 },
  { t: '23:00', prompt: 9.9, completion: 5.6 },
  { t: '24:00', prompt: 9.5, completion: 5.4 },
]

export default function TokenChart() {
  return (
    <div className="card" style={{ minHeight: 340 }}>
      <div className="card-head">
        <div className="card-title">
          <div className="card-title-icon" style={{ background: 'rgba(139,92,246,0.15)', color: '#a78bfa' }}>
            <Coins size={13} />
          </div>
          Token Used
        </div>
        <div className="chart-head-meta">
          <span className="chart-value">128.6B tokens</span>
          <span className="delta up">
            <ArrowUp size={11} />
            6.3%
          </span>
        </div>
      </div>

      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 6, right: 6, bottom: 0, left: -14 }}>
            <defs>
              <linearGradient id="promptGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="complGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#1f2a3d" strokeDasharray="2 4" vertical={false} />
            <XAxis
              dataKey="t"
              tick={{ fill: '#6b7280', fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              interval={3}
            />
            <YAxis
              tick={{ fill: '#6b7280', fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}B`}
              domain={[0, 12]}
              ticks={[0, 3, 6, 9, 12]}
            />
            <Tooltip
              contentStyle={{
                background: '#0f1524',
                border: '1px solid #1f2a3d',
                borderRadius: 8,
                fontSize: 11,
              }}
              labelStyle={{ color: '#9ca3af' }}
            />
            <Area
              type="monotone"
              dataKey="prompt"
              stroke="#8b5cf6"
              strokeWidth={2}
              fill="url(#promptGrad)"
              name="Prompt Tokens"
            />
            <Area
              type="monotone"
              dataKey="completion"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#complGrad)"
              name="Completion Tokens"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="legend">
        <span>
          <span className="legend-dot" style={{ background: '#8b5cf6' }} />
          Prompt Tokens 78.4B
        </span>
        <span>
          <span className="legend-dot" style={{ background: '#10b981' }} />
          Completion Tokens 50.2B
        </span>
      </div>
    </div>
  )
}
