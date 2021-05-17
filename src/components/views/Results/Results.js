import { useEffect, useState } from 'react';
import Services from '../../../services/Services';
import AchievementList from './AchievementList/AchievementList';
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
        <td>{player.player}</td>
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
            {result.players.length > 1 && <div className='place second-place'>
              <div className='text-xl'>{result.players[1].player}</div>
              <div className='box v-layout'>
                <h1 className='text-white m0'>2<span className='text-sm'>nd</span></h1>
                <span className='text-sm mt'>{parseInt(result.players[1].kills) + parseInt(result.players[1].points)} Pts</span>
              </div>
              <div className='v-layout text-sm mt'>
                <span>Kills: {result.players[1].kills}</span>
                <span>Match Pts: {result.players[1].points}</span>
              </div>
            </div> }
            {result.players.length > 0 && <div className='place first-place ml mr'>
              <div className='text-xl'>{result.players[0].player}</div>
              <div className='box v-layout'>
                <h1 className='text-white m0'>1<span className='text-sm'>st</span></h1>
                <span className='text-sm mt'>{parseInt(result.players[0].kills) + parseInt(result.players[0].points)} Pts</span>
              </div>
              <div className='v-layout text-sm mt'>
                <span>Kills: {result.players[0].kills}</span>
                <span>Match Pts: {result.players[0].points}</span>
              </div>
            </div> }
            {result.players.length > 2 && <div className='place third-place'>
              <div className='text-xl'>{result.players[2].player}</div>
              <div className='box v-layout'>
                <h1 className='text-white m0'>3<span className='text-sm'>rd</span></h1>
                <span className='text-sm mt'>{parseInt(result.players[2].kills) + parseInt(result.players[2].points)} Pts</span>
              </div>
              <div className='v-layout text-sm mt'>
                <span>Kills: {result.players[2].kills}</span>
                <span>Match Pts: {result.players[2].points}</span>
              </div>
            </div> }
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
