import React from 'react'
import Avatar from './Avatar'

function PlayerItem({player, horizontal, size, className, onClick, style, props}) {
  return (
    <div className={className + (horizontal ? ' h-layout align-center' : ' v-layout')} key={player.id} onClick={onClick} style={style} {...props}>
      <Avatar big={size === 'lg'} url={player.avatar || null}/>
      <span className={`${size === 'sm' ? 'text-sm' : size === 'xs' ? 'text-xs' : size === 'lg' ? 'text-lg' : ''}`} style={{marginLeft: horizontal ? 4 : 0, marginTop: horizontal ? 0 : 4}}>{player.name || player}</span>
    </div>
      
  )
}

export default PlayerItem
