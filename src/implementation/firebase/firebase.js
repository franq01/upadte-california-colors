import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
/// solo se tiene que cabier lo siguiente:
const firebaseConfig = {
  apiKey: "AIzaSyD2qm7JQQPLHFFkUahj8vEBFT-9oi7ISrA",
  authDomain: "imageandtext-crud-react.firebaseapp.com",
  projectId: "imageandtext-crud-react",
  storageBucket: "imageandtext-crud-react.appspot.com",
  messagingSenderId: "761847483317",
  appId: "1:761847483317:web:77624fa19867233955a7fc",
  measurementId: "G-K9Z95HEMKS",
}; /// hasta aqui se tiene que modificar. estas reglas las da firebase al crear el servicio de aplicacion web.
// antes de realizar la vinculacion de app web se tiene que crear un STORGARE y un Base de datos en firebase.
/// las

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/// configuracion de get storgare
// la clase "db" se almacenan todos los textos y los sube en la bd de firebase.
export const db = getFirestore(app);
// la siguiente funcion se encarga de subir las imagenes a storgare
export const storage = getStorage(app);
