//inline-counter.js

window.addEventListener('WebComponentsReady', function() {
	var assert = chai.assert;
	var counter = document.querySelector('ceci-counter#hello-counter');
	var valueHolder = document.querySelector('ceci-value-holder#value-holder');
	console.log('and we do x');

	// it('should send a broadcast on blue when clicked', function(){
	valueHolder.setValue('asdasd');
	assert.equal(valueHolder.getValue(), 'foo');
	counter.buttonClick();
	assert.equal(valueHolder.getValue(), 'hi');
	// });

	// mocha.setup('bdd');
	// chai.should();

	// describe('ceci-button', function(done){
	//   var button = document.querySelector('ceci-button#hello-counter');
	//   var valueHolder = document.querySelector('ceci-value-holder#value-holder');
	//   console.log('and we do x');

	//   it('should send a broadcast on blue when clicked', function(){
	//     valueHolder.setValue('asdasd');
	//     valueHolder.getValue().should.equal('boo');
	//     button.buttonClick();
	//     valueHolder.getValue().should.equal('hi');
	//   });
	// });
	// mocha.run();
    done();
});


// suite('inline-button', function() {
//   var assert = chai.assert;

//   test("there's a ceci app", function() {
//   	var app = document.querySelector("ceci-app");
//     assert.equal(app, 1);
//   });
// });

// done();