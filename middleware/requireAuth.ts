import { Middleware } from '@nuxt/types';

const requireAuth: Middleware = ({ store, redirect, route }: any) => {
  const guestRoutes = ['login', 'accounts-auth', 'register'];
  if (guestRoutes.includes(route.name)) {
    if (store.state.isAuthorized) redirect('posts');
    return;
  }
  if (!store.state.isAuthorized) redirect('/login');

};

export default requireAuth;
