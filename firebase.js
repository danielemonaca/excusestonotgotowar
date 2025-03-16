import { initializeApp } from "firebase/app";
import { get, getDatabase, limitToLast, orderByChild, push, query, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAS4jb2H3tLjY6FUv2Ic8J-udWgGYj43MA",
    authDomain: "excusesnottogotowar.firebaseapp.com",
    databaseURL: "https://excusesnottogotowar-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "excusesnottogotowar",
    storageBucket: "excusesnottogotowar.appspot.com",
    messagingSenderId: "694388608879",
    appId: "1:694388608879:web:109042f68f1158b214229a",
    measurementId: "G-C2M79HLDT0"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export function saveExcuseToFirebase(excuse) {
    const excusesRef = ref(db, "excuses-gpt4");
    const time = new Date().getTime();

    push(excusesRef, { excuse, time });
}

export async function getLastTenExcuses() {
    const excusesRef = ref(db, "excuses-gpt4");
    const q = query(excusesRef, orderByChild("time"), limitToLast(10));
    const snapshot = await get(q);
    if (snapshot.exists()) {
      const excuses = [];
      snapshot.forEach(childSnapshot => {
        excuses.push(childSnapshot.val().excuse);
      });
      return excuses;
    }
    return [];
}