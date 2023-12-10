import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import * as firestore from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1PJANeTyvsEIn0lmui8ApIV73qt2IENc",
  authDomain: "atom-4b239.firebaseapp.com",
  projectId: "atom-4b239",
  storageBucket: "atom-4b239.appspot.com",
  messagingSenderId: "358565815488",
  appId: "1:358565815488:web:7bb4b519236a4600b07925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Cloud Functions
const getComandas = async () => {
  const querySnapshot = await firestore.getDocs(firestore.collection(db, "comandas"));
  var comandas = [];
  querySnapshot.forEach((doc) => {
    comandas.push(doc.data());
  });
  return comandas;
}

const addComandaById = async (id) => {
  var docRef = await firestore.addDoc(firestore.collection(db, "comandas"), {
    isOpened: false,
    mesaId: id,
    pedidos: [],
    sub: 0,
    id: 0
  });
  editComandaById(docRef.id, { id: docRef.id }).then(() => {
    return docRef.id;
  });
}

const deleteComandaById = async (id) => {
  const docRef = firestore.doc(db, "comandas", id);
  await firestore.deleteDoc(docRef);
}

const editComandaById = async (id, data) => {
  const docRef = firestore.doc(db, "comandas", id);
  await firestore.updateDoc(docRef, data);
}

const setComandaOpened = async (id, bool) => {
  const docRef = firestore.doc(db, "comandas", id);
  await firestore.updateDoc(docRef, { isOpened: bool });
}


function getCurrentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  return "" + dd + '/' + mm + '/' + yyyy;
}

export { getComandas, addComandaById, deleteComandaById, setComandaOpened }
