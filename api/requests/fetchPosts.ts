import { collection, getDocs } from 'firebase/firestore/lite';

export default async (db: any) => {  
    const postsCol = collection(db, 'posts');
    const postSnapshot = await getDocs(postsCol);
    const postList = postSnapshot.docs.map(doc => {
        const obj = doc.data();
        obj['id'] = doc.id;
        return obj
    });
    return postList;
};
