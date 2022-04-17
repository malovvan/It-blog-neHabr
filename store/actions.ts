import fetchPostsRequest from '@/api/requests/fetchPosts';

export const getPosts = async function (this: any, { commit }: any, db: any) {
  const test = await fetchPostsRequest(db);
  console.log('fetchPostsRequest', test);
  // if (status === 200) {
  commit('SET_POSTS_STATE', test);
  //   commit('SET_USER_DATA', data.user);
  //   commit('SET_TOKEN', data.token);
  // }
  return test;
};
