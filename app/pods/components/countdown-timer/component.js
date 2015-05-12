import Ember from 'ember';

export default Ember.Component.extend({
  action: 'completedTimer',
  init: function() {
    var self = this;
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
        self.playSound("chime");
        self.sendAction();
      }
    }));
  },
  playSound: function(id) {
    var audioElement =  self.$('#' + id);
    var url = audioElement.attr('src');
    var my_media = new Media(url,
      // success callback
       function () { console.log("playAudio():Audio Success"); },
      // error callback
       function (err) { console.log("playAudio():Audio Error: " + err); }
    );
    // Play audio
    my_media.play();
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