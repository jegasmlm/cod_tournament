import firebase from './Firebase';

// Get a reference to the database service
var storage = firebase.storage();
var storageRef = storage.ref();

export default class StorageService {

  getPath(file) {
    var ref = storageRef.child(file);
    return ref.getDownloadURL();
  }

  listGuns() {
    var listRef = storageRef.child('guides/weapons');
    return listRef.listAll();
  }

  uploadAvatar(uid, file, callback) {
    const fileSplit = file.name.split('.');
    var avatarImagesRef = storageRef.child(`avatars/${uid}.${fileSplit[fileSplit.length - 1]}`);

    // 'file' comes from the Blob or File API
    avatarImagesRef.put(file).then((snapshot) => {
      callback(snapshot)
    });
  }

}