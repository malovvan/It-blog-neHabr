import createPersistedState from 'vuex-persistedstate';
import type { Plugin } from '@nuxt/types';

export default <Plugin> function ({ env, store }) {
  createPersistedState({
    key: 'core-frontend-vuex-persisted-state',
    paths: ['isAuthorized'],
  })(store);
};
