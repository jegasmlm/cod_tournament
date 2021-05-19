import React from 'react'

function Tooltip({children}) {
  return (
    <div className="p-s2 text-xs bg-dark round-rect tooltip z3 text-center">
      {children}      
    </div>
  )
}

export default Tooltip
