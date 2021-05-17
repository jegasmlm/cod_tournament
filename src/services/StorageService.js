import firebase from './Firebase';

// Get a reference to the database service
var storage = firebase.storage();
var storageRef = storage.ref();

export default class StorageService {

  listGuns() {
    var listRef = storageRef.child('guides/weapons');
    return listRef.listAll();
  }

}