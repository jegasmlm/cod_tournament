import { toList } from '../utils/Utils';
import firebase from './Firebase';

// Get a reference to the database service
var database = firebase.database();

export default class UserService {
  
  detach() {
    database.ref('t').off();
  }

  save(user, callback) {
    database.ref('users/'+user.id).set(user, callback);
  }

  update(id, user, callback) {
    console.debug(`Updating`);
    database.ref(`ut/${id}`).on('value', (snapshot) => {
      var updates = {};
      updates[`/users/${id}`] = user;
      Object.keys(snapshot.val()).forEach((key) => {
        updates[`/t/${key}/players/${id}`] = user;

      });
      database.ref().update(updates, callback);
    });
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
      const user = snapshot.val();
      if(callback) {
        callback(user);
      }
    });
  }

  readOnce(id, callback) {
    database.ref(`users/${id}`).once('value').then((snapshot) => {
      callback(snapshot.val());
    });
  }

}