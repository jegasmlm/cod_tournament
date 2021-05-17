import './AchievementCard.css';

function AchievementCard({achievement}) {
  
  return (
    <div className='card v-layout'>
      <div><i className={'fa-2x fas fa-'+achievement.icon} style={{color: achievement.iconColor}}></i></div>
      <h3 className='text-sm text-accent mt'>{achievement.name}</h3>
      <div className='text-lg mb'>{achievement.player}</div>
      <div><span className='text-sm text-accent'>{achievement.attr}: </span>{achievement.value}</div>
      <div className='mt text-sm text-hint'>({achievement.description})</div>
    </div>
  );
}

export default AchievementCard;
