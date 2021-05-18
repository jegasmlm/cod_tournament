import React from 'react'
import noobAvatar from '../../assets/imgs/noobAvatar.jpg';

function Avatar({url, big}) {
  if(url === null){
    return (
      <img className={`avatar ${big ? 'avatar--big' : ''}`} src={noobAvatar}/>
    )
  }
  return (
    <img className={`avatar ${big ? 'avatar--big' : ''}`} src={url}/>
  )
}

export default Avatar;
