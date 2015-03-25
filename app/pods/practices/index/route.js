import Ember from 'ember';

import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return this.store.find('practice');
  },
  renderTemplate: function(){
    this.render();
    this.render("practices/index/side-nav", {outlet: "side-nav"});
  }
});