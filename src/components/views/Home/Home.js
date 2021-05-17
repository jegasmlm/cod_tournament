import { useEffect, useState } from 'react';
import Services from '../../../services/Services';
import { Modal } from '../../elements/Modal';
import TournamentForm from '../Tournament/TournamentForm/TournamentForm';
import TournamentList from '../Tournament/TournamentList/TournamentList';
import './Home.css';

function Home() {
  const [modalIsOpen, setIsOpen] = useState([false]);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    Services.tournaments().detach();
    loadTournaments();

    /*Services.storage().listGuns().then((res) => {
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          console.log(url);
        })
      });
    });*/
  }, [])

  const loadTournaments = () => {
    Services.tournaments().list((tournaments) => {
      setTournaments(tournaments);
    })
  }

  return (
    <div className='home v-layout'>
      <div className='flex-grow v-layout start-tournament-btn'><button onClick={() => setIsOpen([true])}>Start Tournament</button></div>
      <h3>Tournaments</h3>
      <TournamentList tournaments={tournaments}/>
      
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen([false])}
          size='sm'
        >
        <TournamentForm onSave={() => setIsOpen([false])} />
      </Modal>
    </div>
  );
}

export default Home;
