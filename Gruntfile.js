module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      deploy: {
        files: [
          {src: ['uncompressed/js/main.js'], dest: 'deploy/js/main.js'},
	      {src: ['uncompressed/js/maps.js'], dest: 'deploy/js/maps.js'},
          {src: ['uncompressed/js/maps-mrt.js'], dest: 'deploy/js/maps-mrt.js'},
        ],
      },
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      deploy: {
        files: [
          {src: ['uncompressed/css/stylesheet.css'], dest: 'deploy/css/stylesheet.css'},
        ],
      }
    },

    concat: {
      deploy: {
        files: [
          {src: ['uncompressed/css/loclink.css', 'deploy/css/stylesheet.css'], dest: 'deploy/css/stylesheet.css'},
        ],
      },
    },

    htmlmin: {
       deploy: {
          options: {
             removeComments: true,
             collapseWhitespace: true,
             skipAdvanced: true,
          },
          files: [{
             expand: true,
             cwd: 'uncompressed',
             src: '**/*.html',
             dest: 'deploy/'
          }]
       }
    },

  });

  // default task which executes every sub-step
  grunt.registerTask('default', ['uglify', 'cssmin', 'concat', 'htmlmin']);

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
