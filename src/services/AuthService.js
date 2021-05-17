import firebase from './Firebase';

export default class AuthService {

  getRedirectResult( callback ) {
    firebase.auth()
    .getRedirectResult()
    .then((result) => {
      callback(result, null);
    }).catch((error) => {
      callback(null, error);
    });
  }

  loggedUser() {
    return firebase.auth().currentUser;
  }

  liveLoggedUser(callback) {
    firebase.auth().onAuthStateChanged(callback);
  }

  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signup(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  logout() {
    firebase.auth().signOut()
  }
  
  popupGoogleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
  }
  
  googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  appleLogin() {
    
  }

  twitterLogin() {
    
  }

  microsoftLogin() {
    
  }

}