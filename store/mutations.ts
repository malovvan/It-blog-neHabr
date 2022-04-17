export default {
  SET_POSTS_STATE: (state: any, posts: any) => {
    state.postList = posts;
  },
  SET_USER_DATA: (state: any, data: any) => {
    state.user = data;
  },
};
