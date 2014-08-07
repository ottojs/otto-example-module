
'use strict';

// Modules
require('should');

// Subject
var subject = require('../lib/index.js');

describe('Example Module', function () {

  describe('.method()', function () {

    it('should return true', function () {
      var result = subject.method();
      result.should.equal(true);
    });

  });

});

