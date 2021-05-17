import TournamentService from "./TournamentService";
import NamesService from "./NamesService";
import AuthService from "./AuthService";
import StorageService from "./StorageService";
import CodService from "./CodService";

class Service {

  auth() {
    return new AuthService();
  }

  storage() {
    return new StorageService();
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