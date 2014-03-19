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
          boss: true
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

    uglify: {
      options: {
        banner: '/* ' + config.author + ' - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '* Copyright (c) <%= grunt.template.today("yyyy") %> ' + config.author + ';*/ \n',
        mangle: true
      },
      build: {
        src: config.webRoot + 'js/common.js',
        dest: config.deploy + 'js/common.min.js'
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