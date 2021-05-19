import React, { useState } from 'react'
import Avatar from './Avatar'
import Tooltip from './Tooltip';

function PlayerItem({player, horizontal, ellipsis, tooltip, size, className, onClick, style, props}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className={className + (horizontal ? ' h-layout align-center justify-left flex-nowrap' : ' v-layout') + ' relative'}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={onClick} 
      style={{
        ...style
      }} {...props}
    >
      <Avatar 
        size={size} 
        url={player && player.avatar || null}
      />
      { !tooltip && (<span 
        className={`${size === 'sm' ? 'text-sm' : size === 'xs' ? 'text-xs' : size === 'lg' ? 'text-lg' : ''} text-secondary`} 
        style={{
          marginLeft: horizontal ? 4 : 0, 
          marginTop: horizontal ? 0 : 4,
          width: !ellipsis ? 'initial' : size === 'lg' ? 72 : size === 'sm' || size === 'xs' ? 16 : 16*3,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textAlign: 'center'
        }}
      >
        {player && player.name || player}
      </span> )}
      { (tooltip && showTooltip) && <Tooltip>{player.name}</Tooltip> }
    </div>
      
  )
}

export default PlayerItem
