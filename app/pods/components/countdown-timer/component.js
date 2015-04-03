import Ember from 'ember';

export default Ember.Component.extend({
  action: 'completedTimer',
  init: function() {
    self = this;
    this._super();
    this.set('timer', new Tock({
      countdown: true,
      interval: 10,
      callback: function() {
        var timer = self.get('timer');
        var lap = timer.lap();
        var current_time = timer.msToTime(lap);
        self.$('#clock').val(current_time);
      },
      complete: function() {
        self.sendAction();
      }
    }));
  },
  actions: {
    start: function() {
      this.get('timer').start(this.$('#clock').val());
    },
    stop: function() {
      this.get('timer').stop();
    }
  }
});