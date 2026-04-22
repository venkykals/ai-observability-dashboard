import { Bot, Send } from 'lucide-react'

const messages = [
  { from: 'user', text: 'Why did error rate increase in the last hour?', time: '10:32 AM' },
  {
    from: 'bot',
    text: 'I found 3 related issues. The main spike is from timeouts on the checkout-assistant service and a prompt policy violation increase.',
    time: '10:32 AM',
  },
  { from: 'user', text: 'Show me the top failing requests.', time: '10:33 AM' },
  { from: 'bot', text: 'Here are the top 5 failing traces sorted by volume…', time: '10:33 AM' },
]

export default function Chatbot() {
  return (
    <div className="card chatbot">
      <div className="card-head">
        <div className="card-title">
          <div className="card-title-icon" style={{ background: 'rgba(59,130,246,0.15)', color: '#60a5fa' }}>
            <Bot size={13} />
          </div>
          Chatbot box
        </div>
        <button className="btn-text">Clear Chat</button>
      </div>

      <div className="chat-body">
        {messages.map((m, i) => (
          <div key={i}>
            <div className={`chat-msg ${m.from}`}>
              {m.from === 'bot' && (
                <div className="chat-avatar">
                  <Bot size={13} />
                </div>
              )}
              <div className={`bubble ${m.from}`}>{m.text}</div>
            </div>
            <div className="chat-time" style={{ textAlign: m.from === 'user' ? 'right' : 'left', paddingLeft: m.from === 'bot' ? 32 : 0 }}>
              {m.time}
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input placeholder="Ask about your AI system…" />
        <button className="send-btn">
          <Send size={13} />
        </button>
      </div>
    </div>
  )
}
