// Importo los SDK  o productos que valla usar de firebase. en este caso firestore y authentification
// La lista con todos los SDK se encuentra en https://firebase.google.com/docs/web/setup#available-libraries


// Servicio para iniciar firebase
import { initializeApp } from "firebase/app";

// Servicio de firestore, para usar la base de datos
import { getFirestore } from "firebase/firestore";

// Servicio para autentificar usuarios
import { getAuth } from "firebase/auth";

// Configuración de firebase almacenadas en vbles de ambiente
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

// Ejecuto la función getAuth que importe desde el SDK de autentificación y guardo su resultado en auth
const auth = getAuth();

// Exporto el objeto con la base de datos y la cte auth devuelta por el servicio de autentificación
export {db, auth};