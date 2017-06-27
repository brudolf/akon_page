module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      css: {
        files: 'style/src/*.sass',
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
        files: {
					'style/dist/style.css' : 'style/src/main.sass'
				}
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('default',['watch']);

};
