'use strict';

module.exports = function (grunt) {

  // load all npm installed tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jsonlint: {
      all: {
        src: [ '*.json' ],
        options: {
          format: true,
          indent: 2,
        }
      }
    },
    release: {
      options: {
        additionalFiles: ['bower.json']
      }
    }
  });

  grunt.registerTask('default', [
    'jsonlint'
  ]);

};