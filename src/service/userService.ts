// src/firebaseService.ts
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";

// USERS
export const addUser = async (user: User) => {
  return await addDoc(collection(db, "users"), user);
};
export const getAllUsers = async () => {
  const snapshot = await getDocs(collection(db, "users"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
