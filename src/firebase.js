import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
// import {getElementVal} from 'firebase/database'
// import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCUuGjtaJd1aIgOl2jgghNjFJCt7g5X84w",
    authDomain: "hariomricemill-bb9e5.firebaseapp.com",
    databaseURL: "https://hariomricemill-bb9e5-default-rtdb.firebaseio.com",
    projectId: "hariomricemill-bb9e5",
    storageBucket: "hariomricemill-bb9e5.appspot.com",
    messagingSenderId: "912975445646",
    appId: "1:912975445646:web:d489133b26eff1450f13df"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

  export const hariomricemillDB = ref(database, "hariomricemill/messages");

//   document.getElementById("contactForm").addEventListener("submit", submitForm);

 export function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var phone = getElementVal("phone");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, phone, emailid, msgContent);

//   document.querySelector(".alert").style.display = "block";

//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

//   document.getElementById("contactForm").reset();
}

export const saveMessages = (name,phone, emailid, msgContent) => {
    const newContactFormRef = push(hariomricemillDB); // Create a new child node with a unique key

    // Instead of calling set() directly on hariomricemillDB, call it on the newly created child node
    set(newContactFormRef, {
        name: name,
        phone: phone,
        emailid: emailid,
        msgContent: msgContent,
    });
  };
  
 export const getElementVal = (id) => {
    return document.getElementById(id).value;
  };