import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getOffers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "offers"));
    const offers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return offers;
  } catch (error) {
    console.error("Error fetching offers:", error);
    throw error;
  }
};