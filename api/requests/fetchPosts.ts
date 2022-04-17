import { collection, getDocs } from 'firebase/firestore/lite';

export default async (db: any) => {  
    const postsCol = collection(db, 'posts');
    const postSnapshot = await getDocs(postsCol);
    const postList = postSnapshot.docs.map(doc => doc.data());
    return postList;
};
