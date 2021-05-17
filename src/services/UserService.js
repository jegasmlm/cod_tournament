import { toList } from '../utils/Utils';
import firebase from './Firebase';

// Get a reference to the database service
var database = firebase.database();

export default class UserService {
  
  detach() {
    database.ref('t').off();
  }

  save(user) {
    const newUserRef = database.ref().child('users').push();
    user.id = newUserRef.key;
    newUserRef.set(user);
  }

  update(id, user) {
    database.ref(`users/${id}`).set(user);
  }

  delete(id) {
    database.ref(`users/${id}`).remove();
  }

  list(callback) {
    database.ref(`users`).on('value', (snapshot) => {
      callback(toList(snapshot.val()));
    });
  }

  read(id, callback) {
    database.ref(`users/${id}`).on('value', (snapshot) => {
      callback(snapshot.val());
    });
  }

}