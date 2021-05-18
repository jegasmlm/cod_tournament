import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Services from '../../../../../services/Services';
import './MatchCard.css';
import noobAvatar from '../../../../../assets/imgs/noobAvatar.jpg';
import { toList } from '../../../../../utils/Utils';

function MatchCard({tournamentOpen, tournamentId, match, onDelete}) {
  const tournamentService = Services.tournaments();
  const [open, setOpen] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() =>{
    Services.tournaments().listPlayers(players => {
      setPlayers(toList(players));
    } , tournamentId);
  }, []);

  const playerScore = match.teamScore.map((score, index) => {
    const playerInfo = players.find((player) => player.id === score.player);
    return (
      <tr key={index}>
        <td><img className="avatar" src={playerInfo && playerInfo.avatar || noobAvatar} /></td>
        <td>{playerInfo && playerInfo.name || score.player}</td>
        <td>{score.kills}</td>
        <td>{score.damage}</td>
      </tr>
    );
  });

  const getMatchDetailHeight = () => {
    const matchDetail = document.querySelector(`#${CSS.escape(match.id)} .match-detail`);
    return matchDetail.scrollHeight + 'px';
  }

  return (
    <div id={match.id} className='match card' onClick={() => setOpen(!open)}>
      <div className='h-layout justify-sb text-sm'>
        <div><span className='text-accent text-bold'>Kills: </span>{tournamentService.getMatchKills(match)}</div>
        <div><span className='text-accent text-bold ml'>Pts: </span>{tournamentService.getPositionPoint(match.position)}</div>
        <div><span className='text-accent text-bold ml'>Total: </span>{tournamentService.getMatchPoint(match)}</div>
        { tournamentOpen && <div className='ml' onClick={(e) => onDelete(e, match)}><i className='fas fa-trash'></i></div> }
      </div>
      <div className={(open ? 'match--open' : '') + ' mt match-detail'} style={{maxHeight: open ? getMatchDetailHeight() : 0}}>
        { match.created && <div className='text-sm'>Date: {moment(match.created).format('MM/DD/YYYY')}</div> }
        <div className='text-sm'>Position: {match.position}</div>
        <table className='mt'>
          <thead>
            <tr>
              <th></th>
              <th style={{width: '100%'}}>Player</th>
              <th>Kills</th>
              <th>Dmg</th>
            </tr>
          </thead>
          <tbody>
            {playerScore}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MatchCard;
