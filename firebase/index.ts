import "firebase/auth";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBoAqGg9AV8NmuhTmQFoHyDoTsjTUYQh2I",
  authDomain: "cobuild-todo.firebaseapp.com",
  projectId: "cobuild-todo",
  storageBucket: "cobuild-todo.appspot.com",
  messagingSenderId: "440783420196",
  appId: "1:440783420196:web:fb5cf47d731422f29d11b1"
};

// Initialize Firebase
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const onAuthStateChanged = (onChange: (user: string | null) => void): void => {
  firebase.auth().onAuthStateChanged((user) => {
    onChange(user?.uid || null);
  });
};

export const loginWithGoogle = (): Promise<firebase.auth.UserCredential> => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

export const signOut = (): Promise<void> => {
  return firebase
    .auth()
    .signOut();
};

export const createEmailUser = (
  email: string,
  password: string,
): Promise<firebase.auth.UserCredential> => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const loginWithEmail = (
  email: string,
  password: string,
): Promise<firebase.auth.UserCredential> => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};