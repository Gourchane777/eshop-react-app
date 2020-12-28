
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCrspWdt6DkZ6yiDp3BqJwC2BJeBl6umnM",
    authDomain: "e-shop-product.firebaseapp.com",
    projectId: "e-shop-product",
    storageBucket: "e-shop-product.appspot.com",
    messagingSenderId: "868959622307",
    appId: "1:868959622307:web:67a7f96722f3c825fa5b16",
    measurementId: "G-6SZTF9G7CN"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  //exporter notre data base 
  export default FireDb.database().ref()

