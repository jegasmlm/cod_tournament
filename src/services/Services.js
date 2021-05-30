import TournamentService from "./TournamentService";
import NamesService from "./NamesService";
import AuthService from "./AuthService";
import StorageService from "./StorageService";
import CodService from "./CodService";
import UserService from "./UserService";
import FSTournamentService from './firestore/TournamentService';
import FSUserService from './firestore/UserService';
import FSMatchService from './firestore/MatchService';
import FSResultService from './firestore/ResultService';

class Service {

  auth() {
    return new AuthService();
  }

  storage() {
    return new StorageService();
  }

  users() {
    return new UserService();
  }

  tournaments() {
    return new TournamentService();
  }

  names() {
    return new NamesService();
  }

  cod() {
    return new CodService();
  }

}

const Services = new Service();

export default Services;

const fsTournamentService = new FSTournamentService();
const fsMatchService = new FSMatchService();
const fsResultService = new FSResultService();
const fsUserService = new FSUserService();

export const fsServices = {
  tournaments : fsTournamentService,
  users : fsUserService,
  matches : fsMatchService,
  results : fsResultService,
};
