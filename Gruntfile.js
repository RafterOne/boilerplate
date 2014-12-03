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

    sass: {
      dev: {
        options: {
          style: 'expanded' //Can be nested, compact, compressed, expanded.
        },
        files: [{
          expand: true,
          cwd: config.webRoot + 'static/sass',
          src: ['*.scss'],
          dest: config.webRoot + 'static/css',
          ext: '.css'
        }]
      },
      release: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: config.webRoot + 'static/sass',
          src: ['*.scss'],
          dest: config.webRoot + 'static/css',
          ext: '.css'
        }]
      }
    },

    uglify: {
      options: {
        banner: '/* ' + config.author + ' - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '* Copyright (c) <%= grunt.template.today("yyyy") %> ' + config.author + ';*/ \n',
        mangle: true
      },
      build: {
        src: config.webRoot + 'static/js/common.js',
        dest: config.deploy + 'static/js/common.min.js'
      }
    },

    watch: {
      files: ['static/sass/**'],
      tasks: ['sass:dev']
    },

    modernizr: {
      dist: {
        devFile: "static/vendor/modernizr/modernizr.js",
        outputFile: "static/vendor/modernizr-custom.js",
        files: {
          src: [
            config.webRoot + 'static/sass/**/*.scss', 
            config.webRoot + 'static/js/**/*.js',
            '!' + config.webRoot + 'static/js/**/*.min.js'
          ]
        },
        uglify: true,
      }
    }
  });


  // Load the plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task(s).
  grunt.registerTask('default', ['jshint:gruntfile']);
  grunt.registerTask('devbuild', ['jshint:gruntfile', 'sass:dev']);
  grunt.registerTask('css', ['sass:dev']);
  grunt.registerTask('deploy', ['jshint', 'sass:release']);
  grunt.registerTask('listen', ['jshint:gruntfile', 'sass:dev', 'watch']);

};
