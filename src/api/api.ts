import { db } from "./firebaseConfig";
export const get = async (collection: string) => 
    await db.collection(collection).get().then(snapshot => 
        snapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        }
    ));

export const getByQuery = async (collection: string, query: string, value: string) => {
    const q = db.collection(collection).where(query, "==", value);
    return await q.get().then((snapshot) => 
        snapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        }
    ));
}