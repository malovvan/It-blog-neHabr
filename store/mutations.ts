export default {
  SET_POSTS_STATE: (state: any, posts: any) => {
    state.postList = posts;
  },
  ADD_POST_TO_STATE: (state: any, post: any) => {
    state.postList.push(post);
  },
  SET_USER_DATA: (state: any, data: any) => {
    state.user = data;
  },
  SET_AUTH_STATE: (state: any, authState: any) => {
    state.isAuthorized = authState;
  },
};
