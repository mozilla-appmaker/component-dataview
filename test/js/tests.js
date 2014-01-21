(function () {
  var counterElement;
  var iframeHandler;

  beforeEach(function (done) {
    iframeHandler = harnessUtils.createIframe('test/html/test.html', function (win, doc) {
      counterElement = iframeHandler.document.querySelector('ceci-counter');
      done();
    });
  });

  describe('Ceci Button', function () {
    test('Sanity check', function () {
      chai.assert(counterElement.ceci, 'Ceci descriptor exists.');
    });

    test('Functionality', function (done) {
      // console.log(counterElement);
      // assert.equal(counterElement.getAttribute("increment"),1);
      // refer to https://github.com/mozilla-appmaker/component-counterElement/blob/0a53902e63d7974e14b4c13a03ff1c8967cfffc2/index.html

      chai.assert.equal(counterElement.count, 0);
      counterElement.countUp();
      chai.assert.equal(counterElement.count, 1);
      counterElement.countDown();
      chai.assert.equal(counterElement.count, 0);
      counterElement.countUp();
      counterElement.countUp();
      chai.assert.equal(counterElement.count, 2);
      counterElement.resetCount();
      chai.assert.equal(counterElement.count, 0);

      done(); // IMPORTANT that the suite ends with a call to done()
    });

  });
})();
