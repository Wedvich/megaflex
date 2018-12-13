import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

/**
 * Temporary workaround to https://github.com/gaearon/react-hot-loader/issues/1120
 */
export const hotConnect = (...connectArgs) =>
  (component) =>
    connect(...connectArgs)(hot(module)(component));
