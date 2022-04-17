import { collection, addDoc } from 'firebase/firestore/lite';
import { Post } from '~/types/models/Post';

export default async (db: any, post: Post) => await addDoc(collection(db, 'posts'), post);
