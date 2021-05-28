import { useEffect, useState } from 'react';
import Services, { fsServices } from '../../../services/Services';
import { Modal } from '../../elements/Modal';
import NavigationBar from '../NavigationBar/NavigationBar';
import TournamentForm from '../Tournament/TournamentForm/TournamentForm';
import TournamentList from '../Tournament/TournamentList/TournamentList';
import './Home.css';

function Home() {
  const [modalIsOpen, setIsOpen] = useState([false]);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    loadTournaments();

    /*Services.storage().listGuns().then((res) => {
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          console.log(url);
        })
      });
    });*/

    return () => Services.tournaments().detach();
  }, [])

  const loadTournaments = () => {
    fsServices.tournaments.listByPlayer(Services.auth().loggedUser().uid, (tournaments) => {
      console.log(tournaments)
    })
    Services.tournaments().list((tournaments) => {
      setTournaments(tournaments);
    })
  }

  return (
    <div className='home v-layout'>
      <NavigationBar />
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
