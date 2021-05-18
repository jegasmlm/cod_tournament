import React from 'react'
import Avatar from './Avatar'

function PlayerItem({player, horizontal, size, className, onClick, style, props}) {
  return (
    <div className={className + (horizontal ? ' h-layout align-center justify-left flex-nowrap' : ' v-layout') + ' '} key={player && player.id || player} onClick={onClick} style={style} {...props}>
      <Avatar big={size === 'lg'} url={player && player.avatar || null}/>
      <span className={`${size === 'sm' ? 'text-sm' : size === 'xs' ? 'text-xs' : size === 'lg' ? 'text-lg' : ''} text-secondary`} style={{marginLeft: horizontal ? 4 : 0, marginTop: horizontal ? 0 : 4}}>{player && player.name || player}</span>
    </div>
      
  )
}

export default PlayerItem
