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

export const getFranchises = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "franchise"));
    const franchises = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return franchises;
  } catch (error) {
    console.error("Error fetching franchises:", error);
    return [];
  }
};

export const getFeatures = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "features"));
    const features = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return features;
  } catch (error) {
    console.error("Error fetching features:", error);
    return [];
  }
};


export const getCards = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "cards"));
    const cards = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return cards;
  } catch (error) {
    console.error("Error fetching cards:", error);
    return [];
  }
};