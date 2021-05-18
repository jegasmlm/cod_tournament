import _ from 'lodash';
import AchievementCard from '../AchievementCard/AchievementCard';
import './AchievementList.css';
import bloodSpatter from '../../../../assets/imgs/bloodSpatter.png'
import bloodyKnife from '../../../../assets/imgs/bloodyKnife.png'
import toolbox from '../../../../assets/imgs/toolbox.png'
import bird from '../../../../assets/imgs/bird.png'
import tiredSoldier from '../../../../assets/imgs/tiredSoldier.png'
import heavyLoad from '../../../../assets/imgs/heavyLoad.png'

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
      icon: bloodSpatter,
      iconColor: 'yellow'
    });
    achievements.push({
      name: 'Butcher',
      player: highDamage.player,
      attr: 'Damage',
      value: highDamage.damage,
      description: 'Highest Damage',
      icon: bloodyKnife,
      iconColor: 'red'
    });
    achievements.push({
      name: 'Support',
      player: highMatchPts.player,
      attr: 'Match Pts',
      value: highMatchPts.points,
      description: 'Highest Points',
      icon: toolbox,
      iconColor: 'aqua'
    });
    achievements.push({
      name: 'Bird Hunter',
      player: lowKill.player,
      attr: 'Kills',
      value: lowKill.kills,
      description: 'Lowest Kills',
      icon: bird,
      iconColor: 'aliceblue'
    });
    achievements.push({
      name: 'Sleeping',
      player: minDamage.player,
      attr: 'Damage',
      value: minDamage.damage,
      description: 'Lowest Damage',
      icon: tiredSoldier,
      iconColor: 'gray'
    });
    achievements.push({
      name: 'Load',
      player: lowMatchPts.player,
      attr: 'Match Pts',
      value: lowMatchPts.points,
      description: 'Lowest Points',
      icon: heavyLoad,
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
