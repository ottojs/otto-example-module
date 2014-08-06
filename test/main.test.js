
'use strict';

// Modules
require('should');

// Subject
var otto_module = require('../lib/index.js');

describe('Otto Module', function () {

  describe('.method()', function () {

    it('should return true', function () {
      var result = otto_module.method();
      result.should.equal(true);
    });

  });

});
