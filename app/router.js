import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('practices', function() {
    this.route('new');
    this.route('show', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
    this.route('play', { path: '/:id/play' });
  });
});

export default Router;
