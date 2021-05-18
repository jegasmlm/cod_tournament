import Avatar from '../../../elements/Avatar';
import PlayerItem from '../../../elements/PlayerItem';
import './AchievementCard.css';

function AchievementCard({achievement}) {
  
  return (
    <div className='card v-layout'>
      <div><i className={'fa-2x fas fa-'+achievement.icon} style={{color: achievement.iconColor}}></i></div>
      <h3 className='text-sm text-accent mt'>{achievement.name}</h3>
      <PlayerItem horizontal player={achievement.player} />
      <div className="mt"><span className='text-sm text-accent'>{achievement.attr}: </span>{achievement.value}</div>
      <div className='mt text-sm text-hint'>({achievement.description})</div>
    </div>
  );
}

export default AchievementCard;
