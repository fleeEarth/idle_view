import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
const cart: AppRouteModule = {
  path: '/shop',
  name: 'Shop',
  component: LAYOUT,
  redirect: '/shop/cart',
  meta: {
    hideChildrenInMenu: true,
    orderNo: 2,
    icon: 'ant-design:shopping-cart-outlined',
    title: '购物车',
  },
  children: [
    {
      path: 'cart',
      name: 'Cart',
      component: () => import('/@/views/system/cart/index.vue'),
      meta: {
        // affix: true,
        title: '购物车',
        hideMenu: true,
      },
    },
  ],
};

export default cart;
