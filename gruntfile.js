module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      dev: ['exec:dev01', 'exec:dev02']
    },
    exec: {
      dev01: 'node ./src/srv/main.js',
      dev02: 'ng serve'
    }
  });

  // Default task(s).
  grunt.registerTask('dev', [
    'concurrent:dev'
  ]);

};
