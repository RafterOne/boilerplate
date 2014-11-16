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
          sourcemap: true,
          style: 'expanded' //Can be nested, compact, compressed, expanded.
        },
        files: [{
          expand: true,
          cwd: config.webRoot + '/sass',
          src: ['*.scss'],
          dest: config.webRoot + '/css',
          ext: '.css'
        }]
      },
      release: {
        options: {
          sourcemap: false,
          style: 'compact'
        },
        files: [{
          expand: true,
          cwd: config.webRoot + '/sass',
          src: ['*.scss'],
          dest: config.webRoot + '/css',
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
        src: config.webRoot + 'js/common.js',
        dest: config.deploy + 'js/common.min.js'
      }
    },

    watch: {
      files: ['sass/**'],
      tasks: ['sass:dev']
    }
  });


  // Load the plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task(s).
  grunt.registerTask('default', ['jshint:gruntfile']);
  grunt.registerTask('vsbuild', ['jshint:gruntfile', 'sass:dev']);
  grunt.registerTask('css', ['sass:dev']);
  grunt.registerTask('deploy', ['jshint', 'sass:release']);
  grunt.registerTask('listen', ['jshint:gruntfile', 'sass:dev', 'watch']);

};