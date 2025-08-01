// Importo la función que inicia firebase
import { initializeApp } from "firebase/app";

// importo la funcion que inicia el servicio de firestore database.
import { getFirestore } from "firebase/firestore";



// Link hacia los servicios de firebase disponibles para la Web lo cuales puedo añadir a mi proyecto
// https://firebase.google.com/docs/web/setup#available-libraries


// Objeto de configuración. Contiene las llaves que me identifican como dueño de la app
// Esta oculto mediante vbles de ambiente. Describo los detalles de como hacerlo en .env.local
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Iniciar Firebase. Le pasa el objeto de configuracion y devuelve un objeto app con informacion de nuestra app
const app = initializeApp(firebaseConfig);

// Me conecto a la base de datos y devuelve un objeto para poder usarla
const db = getFirestore();

// Exporto el objeto con la base de datos
export default db;

