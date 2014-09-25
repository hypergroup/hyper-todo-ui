/**
 * Expose the app routes
 */

module.exports = {
  '/': 'index',
  '/users/:user': 'user-all',
  '/users/:user/active': 'user-active',
  '/users/:user/completed': 'user-completed',
  '/users/:user/edit': 'edit'
};
