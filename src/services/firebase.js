import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
	apiKey: "AIzaSyDtmD1DPQ6nt5mOHmtXeNRZRtzj43ZKh_4",
	authDomain: "chat-12770.firebaseapp.com",
	databaseURL: "https://chat-12770.firebaseio.com",
	projectId: "chat-12770",
	storageBucket: "chat-12770.appspot.com",
	messagingSenderId: "1008232941315"
});

export const setListener = (endpoint, updaterFn) => {
	firebase.database().ref(endpoint).on('value', updaterFn);
	return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
	return firebase.database().ref(endpoint).push(data);
}