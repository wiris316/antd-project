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
      name: 'Additional Info',
      path: '/AdditionalInfo',
      component: './AdditionalInfo',
    },

  ],
  npmClient: 'npm',
});

