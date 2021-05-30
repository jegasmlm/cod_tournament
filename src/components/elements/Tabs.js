import React from 'react'
import { useState } from 'react'
import Tab from './Tab'

function Tabs(props) {
  const [selectedTab, setSelectedTab] = useState(props.children[0])

  return (
    <div className="v-layout">
      <div className="h-layout">
        { props.children.map(tab => (
          <Tab active={tab.props.title === selectedTab.props.title} onClick={() => setSelectedTab(tab)}>
            {tab.props.title}
          </Tab>
        ))}
      </div>
      <div>
        { selectedTab }
      </div>
    </div>
  )
}

export default Tabs
