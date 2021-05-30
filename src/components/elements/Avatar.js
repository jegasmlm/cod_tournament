import React from 'react'
import noobAvatar from '../../assets/imgs/noobAvatar.jpg';

function Avatar({url, size}) {
  if(url === null){
    return (
      <img 
        alt="avatar"
        className={`avatar`} 
        src={noobAvatar} 
        style={{
          width: size === 'sm' || size === 'xs' ? 32 : size === 'lg' ? 64 : size === 'xl' ? 128 : 48,
          height: size === 'sm' || size === 'xs' ? 32 : size === 'lg' ? 64 : size === 'xl' ? 128 : 48
        }}
      />
    )
  }
  return (
    <img 
      alt="avatar"
      className={`avatar`} 
      src={url}
      style={{
        width: size === 'sm' || size === 'xs' ? 32 : size === 'lg' ? 64 : size === 'xl' ? 128 : 48,
        height: size === 'sm' || size === 'xs' ? 32 : size === 'lg' ? 64 : size === 'xl' ? 128 : 48
      }}
    />
  )
}

export default Avatar;
