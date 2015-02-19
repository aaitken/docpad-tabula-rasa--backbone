module.exports = function(grunt) {

  //command availability
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //===========================================================================

  var config = {

   //modules
    browserify: {
      dist: {
        files: [{
          expand: true,
          cwd: 'out/assets/scripts/modules/',
          src: ['**/*.js'],
          dest: 'out/assets/scripts/modules/'
        }]
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        files: {
          'out/assets/scripts/globals/vendors.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/fastclick/lib/fastclick.js',
            'bower_components/foundation/js/foundation/foundation.js',
            'bower_components/underscore/underscore.js',
            'bower_components/backbone/backbone.js']
        }
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: [{
          expand: true,
          cwd: 'out/assets/scripts',
          src: ['**/*.js'],
          dest: 'out/assets/scripts/'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'out/assets/styles',
          src: ['**/*.css'],
          dest: 'out/assets/styles'
        }]
      }
    }
    
  }

  //===========================================================================
  
  //Project configuration
  grunt.initConfig(config);
  grunt.registerTask('default', 'concat');
}
