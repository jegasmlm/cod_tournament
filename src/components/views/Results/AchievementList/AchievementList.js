import _ from 'lodash';
import AchievementCard from '../AchievementCard/AchievementCard';
import './AchievementList.css';

function AchievementList({result}) {
  const achievements = [];
  if(result.players.length > 0) {
    const highKill = _.maxBy(_.shuffle(result.players), (player) => player.kills);
    const lowKill = _.minBy(_.shuffle(result.players), (player) => player.kills);
    const highDamage = _.maxBy(_.shuffle(result.players), (player) => player.damage);
    const minDamage = _.minBy(_.shuffle(result.players), (player) => player.damage);
    const highMatchPts = _.maxBy(_.shuffle(result.players), (player) => player.points);
    const lowMatchPts = _.minBy(_.shuffle(result.players), (player) => player.points);
  
    achievements.push({
      name: 'Assassin',
      player: highKill.player,
      attr: 'Kills',
      value: highKill.kills,
      description: 'Highest Kills',
      icon: 'crosshairs',
      iconColor: 'yellow'
    });
    achievements.push({
      name: 'Butcher',
      player: highDamage.player,
      attr: 'Damage',
      value: highDamage.damage,
      description: 'Highest Damage',
      icon: 'tint',
      iconColor: 'red'
    });
    achievements.push({
      name: 'Support',
      player: highMatchPts.player,
      attr: 'Match Pts',
      value: highMatchPts.points,
      description: 'Highest Points',
      icon: 'toolbox',
      iconColor: 'aqua'
    });
    achievements.push({
      name: 'Bird Hunter',
      player: lowKill.player,
      attr: 'Kills',
      value: lowKill.kills,
      description: 'Lowest Kills',
      icon: 'dove',
      iconColor: 'aliceblue'
    });
    achievements.push({
      name: 'Sleeping',
      player: minDamage.player,
      attr: 'Damage',
      value: minDamage.damage,
      description: 'Lowest Damage',
      icon: 'bed',
      iconColor: 'gray'
    });
    achievements.push({
      name: 'Load',
      player: lowMatchPts.player,
      attr: 'Match Pts',
      value: lowMatchPts.points,
      description: 'Lowest Points',
      icon: 'weight-hanging',
      iconColor: 'purple'
    });
  }

  const cards = achievements.map((achievement, index) => <AchievementCard key={index} achievement={achievement} />);

  return (
    <div className='achievement-list h-layout align-stretch'>
      {cards}
    </div>
  );
}

export default AchievementList;
