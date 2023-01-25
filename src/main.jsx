import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEqZLXrPIfJm7sFUIAptphtdqWXF4aXiQ",
  authDomain: "book-stack-1717.firebaseapp.com",
  projectId: "book-stack-1717",
  storageBucket: "book-stack-1717.appspot.com",
  messagingSenderId: "27364583702",
  appId: "1:27364583702:web:8ffa69c4211366749dc837",
  measurementId: "G-VLQ288F3VL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.firestore(); // <- needed if using firestore

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const store = createStore(rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
  );

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
)
