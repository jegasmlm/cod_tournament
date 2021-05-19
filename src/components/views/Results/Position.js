import React from 'react'
import Avatar from '../../elements/Avatar'
import PlayerItem from '../../elements/PlayerItem'

function Position({playerScore, place}) {
  return (
    <div className={`place ${place === 1 ? 'first-place' : place === 2 ? 'second-place' : 'third-place'}`}>
      <PlayerItem player={playerScore.player} />
      <div className='box v-layout'>
        <h1 className='text-white m0'>{place}<span className='text-sm'>{place === 1 ? 'st' : place === 2 ? 'nd' : 'rd'}</span></h1>
        <span className='text-sm mt'>{parseInt(playerScore.kills) + parseInt(playerScore.points)} Pts</span>
      </div>
      <div className='v-layout text-sm mt'>
        <span>Kills: {playerScore.kills}</span>
        <span>Match Pts: {playerScore.points}</span>
      </div>
    </div>
  )
}

export default Position
