import Ember from 'ember';

import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return this.store.find('practice', params.id);
  },
  setupController: function(controller, model) {
    model.reload();
    controller.set("model", model);
  }
});