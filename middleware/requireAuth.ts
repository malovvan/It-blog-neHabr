import { Middleware } from '@nuxt/types';

const requireAuth: Middleware = ({ store, redirect, route }: any) => {
  const guestRoutes = ['login', 'accounts-auth'];
  if (guestRoutes.includes(route.name)) {
    console.log('test', route.name);
    
    if (store.state.isAuthorized) redirect('posts');
    return;
  }
  if (!store.state.isAuthorized) redirect('/login');
  console.log('!store.state.isAuthorized');

};

export default requireAuth;
