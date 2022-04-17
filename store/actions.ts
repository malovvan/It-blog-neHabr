import fetchPostsRequest from '@/api/requests/fetchPosts';
import createPostRequest from '@/api/requests/createPost';
import { Post } from '~/types/models/Post';

export const getPosts = async function ({ commit }: any, db: any) {
  const posts = await fetchPostsRequest(db);
  commit('SET_POSTS_STATE', posts);
  return posts;
};

export const createPost = async function ({ commit }: any, {db, post}: any) {

  await createPostRequest(db, post).then((data) => {
    console.log('data', data);
    commit('ADD_POST_TO_STATE', post);
  });
  return post;
};
