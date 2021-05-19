import React from 'react'
import Avatar from './Avatar'

function PlayerItem({player, horizontal, ellipsis, size, className, onClick, style, props}) {
  return (
    <div 
      className={className + (horizontal ? ' h-layout align-center justify-left flex-nowrap' : ' v-layout') + ' '}
      onClick={onClick} 
      style={{
        ...style
      }} {...props}
    >
      <Avatar 
        big={size === 'lg'} 
        url={player && player.avatar || null}
      />
      <span 
        className={`${size === 'sm' ? 'text-sm' : size === 'xs' ? 'text-xs' : size === 'lg' ? 'text-lg' : ''} text-secondary`} 
        style={{
          marginLeft: horizontal ? 4 : 0, 
          marginTop: horizontal ? 0 : 4,
          width: !ellipsis ? 'initial' : size === 'lg' ? 16*9 : 16*3,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textAlign: 'center'
        }}
      >
        {player && player.name || player}
      </span>
    </div>
      
  )
}

export default PlayerItem
