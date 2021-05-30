import React from 'react'

const tabStyle = (active) => ({
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  backgroundColor: active ? 'var(--accent-color)' : 'transparent',
  borderRadius: '0.5rem',
});

function Tab(props) {
  return (
    <div style={tabStyle(props.active)} {...props}>
      {props.children}
    </div>
  )
}

export default Tab
