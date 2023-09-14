import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'EVENTS PAGE',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Dashboard',
      path: '/home',
      component: './Home',
    },
    {
      name: 'Access',
      path: '/access',
      component: './Access',
    },

  ],
  npmClient: 'npm',
});

