'use strict';
module.exports = function (grunt) {
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    browserify: {
      main: {
        src: 'src/index.js',
        dest: 'dist/moarkitties.js'
      }
    },
    uglify: {
      moarkitties: {
        files: {
          'dist/moarkitties.min.js': ['dist/moarkitties.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['browserify', 'uglify']);
};
