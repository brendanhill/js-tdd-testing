module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
        all: ['grunt.js', 'lib/**/*.js', 'test/*.js']
    },
      jshint: {
        options: {
          browser: true
        }
      },
      ember_handlebars: {
        all: {
            src: 'lib/tmpl/*.hbs',
            dest: 'lib/tmpl_compiled'
        }
      },
      watch: {
        // tmpl: {
        //     files: 'lib/tmpl/*.hbs',
        //     tasks: 'ember_handlebars'
        // },
        js: {
            files: 'public/js/app.js',
            tasks: ['lint']
        },
        // test: {
        //     files: 'lib/js/tests/*.js',
        //     tasks: ['concat:testjs', 'qunit']
        // },
        // css: {
        //     files: 'lib/css/front/*.css',
        //     tasks: 'concat:appcss'
        //   }
      }
  });

  grunt.loadNpmTasks('grunt-mocha');

  grunt.loadNpmTasks('grunt-ember-handlebars');

  grunt.registerTask('server', 'Run webserver', function () {
    require('./server.js');
  });

  // Default task.
  grunt.registerTask('default', 'ember_handlebars server watch');

};