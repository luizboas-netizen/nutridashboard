
import { useState } from 'react'

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="tabs-container">
      <div className="tabs-list" role="tablist" aria-label="Resumo financeiro">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            id={`tab-${index}`}
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${index}`}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          className="tab-panel"
          hidden={activeTab !== index}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}
