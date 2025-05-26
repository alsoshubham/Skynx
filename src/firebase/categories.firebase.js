import {db} from "./firebase.config";
import { collection, getDocs, query, addDoc } from "firebase/firestore";

const getCategories = async () => {
    const categoriesCollectionRef = collection(db, "categories");
    const q = query(categoriesCollectionRef);
    const querySnapshot = await getDocs(q);
    const categories = [];
    querySnapshot.forEach((doc) => {
        categories.push({ ...doc.data() });
    });
    // Sort categories by id (ascending)
    categories.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    });
    console.log("Fetched categories:", categories);
    return categories;
}

const saveCategory = async (category) => {
  const categoriesCollectionRef = collection(db, "categories");
  const docRef = await addDoc(categoriesCollectionRef, category);
  return { id: docRef.id, ...category };
}

export { getCategories, saveCategory };