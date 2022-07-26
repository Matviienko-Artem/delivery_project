import filter from 'lodash/filter';

import routes from '../../Routes';

export const filteredRoutes = filter(routes, (_, routeName) => routeName !== 'default');

export const shouldShowBadge = routeName => routeName === routes.cart.name;
