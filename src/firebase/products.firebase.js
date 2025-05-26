import {db} from "./firebase.config.js";
import { collection, getDocs, query, addDoc } from "firebase/firestore";

const getProducts = async () => {
    const getProductsCollectionRef = collection(db, "products");
    const q = query(getProductsCollectionRef);
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data() });
    });
    // Sort getProducts by id (ascending)
    products.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    });
    console.log("Fetched products:", products);
    return products;
}

const saveProduct = async (product) => {
  const getProductsCollectionRef = collection(db, "products");
  const docRef = await addDoc(getProductsCollectionRef, product);
  return { id: docRef.id, ...product };
}

export { getProducts, saveProduct };