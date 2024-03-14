import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyASwUEj54HacWDoXRs2RcDdylOu_9W867E",
  authDomain: "myportfoliostw.firebaseapp.com",
  projectId: "myportfoliostw",
  storageBucket: "myportfoliostw.appspot.com",
  messagingSenderId: "286176699731",
  appId: "1:286176699731:web:e197b3659727d74c7fada6",
  measurementId: "G-9GVKW0ZY83"
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export async function saveForm() {
  try {
    await addDoc(collection(db, "mensagens"), {
      nome: document.getElementById('name').value,
      email: document.getElementById('email').value,
      mensagem: document.getElementById('message').value
    });
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    alert('Muito obrigado pelo contato. Retornarei o mais breve possível 😁');
  } catch (error) {
    console.error("Erro ao salvar os dados do formulário:", error);
  }
}
