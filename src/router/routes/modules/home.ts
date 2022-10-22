import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/dashboard',
  meta: {
    orderNo: 1,
    icon: 'ant-design:home-outlined',
    title: '首页',
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('/@/views/system/dashboard/index.vue'),
      meta: {
        // affix: true,
        title: '',
        hideMenu: true,
      },
    },
  ],
};

export default home;
