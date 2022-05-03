import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { IFeedbackData } from "../interfaces";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "md-calc.firebaseapp.com",
  projectId: "md-calc",
  storageBucket: "md-calc.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addFeedback = async (data: IFeedbackData) => {
  try {
    await addDoc(collection(db, "feedback"), {
      name: data.name,
      feedback: data.feedback,
      email: data.email,
      timastamp: serverTimestamp(),
    });

    return "success";
  } catch (error) {
    console.log(error);

    return "error";
  }
};
