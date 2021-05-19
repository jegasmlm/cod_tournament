import React from 'react'
import noobAvatar from '../../assets/imgs/noobAvatar.jpg';

function Avatar({url, size}) {
  if(url === null){
    return (
      <img 
        className={`avatar`} 
        src={noobAvatar} 
        style={{
          width: size === 'sm' || size === 'xs' ? 32 : size === 'lg' ? 64 : size === 'xs' ? 64 : 48,
          height: size === 'sm' || size === 'xs' ? 32 : size === 'lg' ? 64 : size === 'xs' ? 64 : 48
        }}
      />
    )
  }
  return (
    <img 
      className={`avatar`} 
      src={url}
      style={{
        width: size === 'sm' || size === 'xs' ? 32 : size === 'lg' ? 64 : size === 'xs' ? 64 : 48,
        height: size === 'sm' || size === 'xs' ? 32 : size === 'lg' ? 64 : size === 'xs' ? 64 : 48
      }}
    />
  )
}

export default Avatar;
