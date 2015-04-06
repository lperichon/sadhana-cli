import Ember from 'ember';

export default Ember.ObjectController.extend({
    queryParams: ['step'],
    step: 0,
    practiceTechniques: function() {
      var practiceTechniques = [];
	  var practiceParts = this.get('practiceParts').toArray();
	  practiceParts.forEach( function(practicePart) {
	  	var practicePartTechniques = practicePart.get('practiceTechniques').toArray();
	  	practicePartTechniques.forEach ( function(practiceTechnique) {
	  		practiceTechniques.push(practiceTechnique);
	  		// Add a duplicate for compensation
	  		if(practiceTechnique.get('compensate')) {
	  			practiceTechniques.push(practiceTechnique);
	  		}
	  	});
	  });
	  return practiceTechniques;
	}.property('practiceParts.@each'),
	currentPracticeTechnique: function() {
	  var step = this.get('step');
	  // avoid step numbers to be trolled i.e.: step=string, step=-1, step=1.23
      step = isNaN(step) ? 0 : Math.floor(Math.abs(step));
      // avoid step numbers > practiceTechniques.length
      step = step >= this.get('practiceTechniques').length ? this.get('practiceTechniques').length-1 : step;
	  return this.get('practiceTechniques')[step];
	}.property('step'),
	nextPracticeTechnique: function() {
	  var step = this.get('step');
	  // avoid step numbers to be trolled i.e.: step=string, step=-1, step=1.23
      step = isNaN(step) ? 0 : Math.floor(Math.abs(step));
      // avoid step numbers > practiceTechniques.length
      var nextPracticeTechnique;
      if(step < this.get('practiceTechniques').length) {
      	nextPracticeTechnique = this.get('practiceTechniques')[step+1];
      }
	  return nextPracticeTechnique;
	}.property('step'),
	timerValue: function() {
	  var minutes = this.get('currentPracticeTechnique').get('minutes');
	  var minutes_str = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
	  var seconds = this.get('currentPracticeTechnique').get('seconds');
	  var seconds_str = seconds < 10 ? '0' + seconds.toString() : seconds.toString();
	  return minutes_str + ':' + seconds_str;
	}.property('currentPracticeTechnique'),
	actions: {
	  nextStep: function(){
  	    // avoid step numbers > practiceTechniques.length
        var nextStep;
        var step = this.get('step');
        if(step < this.get('practiceTechniques').length) {
      	  nextStep = step + 1;
        }
        this.set('step', nextStep);
	  },
	  prevStep: function() {
	    // avoid step numbers < 0
        var prevStep = 0;
        var step = this.get('step');
        if(step > 0) {
      	  prevStep = step - 1;
        }
        this.set('step', prevStep);
	  },
	  completedTimer: function() {
	  	this.send('nextStep');
	  	// FIX: This breaks separation of concerns, only the component should 
	  	// know about #clock.
	  	$('#clock').val(this.get('timerValue'));
	  }
	}
});