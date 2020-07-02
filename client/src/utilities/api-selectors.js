import _ from 'lodash';

// in order to avoid having to explicitly write loading properties to each reducer
export const createLoadingSelector = actions => state => _(actions)
  .some(action => _.get(state, `api.loading.${action}`));

// in order to avoid having to explicitly write error properties to each reducer
export const createErrorMessageSelector = actions => state => _(actions)
  .map(action => _.get(state, `api.error.${action}`))
  .compact()
  .first() || '';