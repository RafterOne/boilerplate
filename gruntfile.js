module.exports = function(grunt) {

 var config = {
    author: "PixelMEDIA, Inc",
    webRoot: '',
    deploy: ''
  };

  grunt.initConfig({
    jshint: {
        options: {
          browser: true,
          boss: true,
          sub: true,
          nonstandard: true,
          unused: 'vars'
        },
        gruntfile: {
            src: ['gruntfile.js']
        }
    },

    compass: {
      dev: {
        options: {
          sassDir: config.webRoot + 'sass',
          cssDir: config.webRoot + 'css',
          force: true,
          noLineComments: false,
          environment: 'development',
          outputStyle: 'expanded'
        }
      },
      release: {
        options: {
          sassDir: config.webRoot + 'sass',
          cssDir: config.webRoot + 'css',
          force: true,
          noLineComments: true,
          environment: 'production',
          outputStyle: 'compressed'
        }
      }
    },

    watch: {
      files: ['sass/**'],
      tasks: ['compass:dev']
    }
  });


  // Load the plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task(s).
  grunt.registerTask('default', ['jshint:gruntfile']);
  grunt.registerTask('deploy', ['jshint', 'compass:release']);
  grunt.registerTask('listen', ['jshint:gruntfile', 'compass:dev', 'watch']);

};