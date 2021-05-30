import { useEffect, useState } from 'react';
import Services from '../../../services/Services';
import PlayerItem from '../../elements/PlayerItem';
import AchievementList from './AchievementList/AchievementList';
import Position from './Position';
import './Results.css';

function Results({tournament}) {
  const [activePanel, setActivePanel] = useState(0);
  const [result, setResult] = useState({
    players: [],
    teams: []
  });

  useEffect(() => {
    const resultSlider = document.getElementById('result-slider');
    resultSlider.scrollTo({
      top: 0,
      left: (resultSlider.scrollWidth/4) * activePanel, 
      behavior: 'smooth'
    })
  }, [activePanel]);

  useEffect(() => {
    setResult(Services.tournaments().getResults(tournament));
  }, [tournament]);

  const playerScoreTable = result.players.map((player, index) => {
    return (
      <tr key={'playerScore-'+index}>
        <td>{index+1}</td>
        <td><PlayerItem horizontal player={player.player} /></td>
        <td>{player.kills}</td>
        <td>{player.points}</td>
        <td>{parseInt(player.kills) + parseInt(player.points)}</td>
      </tr>
    )
  });

  const teamScoreTable = result.teams.map((team, index) => {
    return (
      <tr key={'teamScore-'+index}>
        <td>{index+1}</td>
        <td>{team.name ? team.name : team.teamId.substring(0, 4)}</td>
        <td>{team.kills}</td>
        <td>{team.points}</td>
        <td>{parseInt(team.kills) + parseInt(team.points)}</td>
      </tr>
    )
  });

  return (
    <div className='v-layout result mt-3'>
      <h3>Results</h3>
      <div id='result-slider' className='result-slider'>
        <div className='result-slide v-layout justify-right'>
          {result.players.length > 0 && <div className='h-layout align-right' style={{minHeight: '400px'}}>
            {result.players.length > 1 && <Position playerScore={result.players[1]} place={2} /> }
            {result.players.length > 0 && <Position playerScore={result.players[0]} place={1} /> }
            {result.players.length > 2 && <Position playerScore={result.players[2]} place={3} />
            }
          </div> }
        </div>
        <div className='result-slide v-layout'>
          <h3 className='mt-3'>Player Score Table</h3>
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Player</th>
                  <th>Kills</th>
                  <th>Pts</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {playerScoreTable}
              </tbody>
            </table>
          </div>
        </div>
        <div className='result-slide v-layout'>
          <h3 className='mt-3'>Team Score Table</h3>
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Team</th>
                  <th>Kills</th>
                  <th>Pts</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {teamScoreTable}
              </tbody>
            </table>
          </div>
        </div>
        <div className='result-slide v-layout'>
          <h3 className='mt-3'>Achievements</h3>
          <AchievementList result={result}/>
        </div>
      </div>
      <div className='dots'>
        <div className={activePanel === 0 ? 'active' : ''} onClick={() => setActivePanel(0)}></div>
        <div className={activePanel === 1 ? 'active' : ''} onClick={() => setActivePanel(1)}></div>
        <div className={activePanel === 2 ? 'active' : ''} onClick={() => setActivePanel(2)}></div>
        <div className={activePanel === 3 ? 'active' : ''} onClick={() => setActivePanel(3)}></div>
      </div>
    </div>
  );
}

export default Results;
