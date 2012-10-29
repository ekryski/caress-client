module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: "<json:package.json>",
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    mocha: {
      all: ["test/**/*.html"]
    },
    concat: {
      dist: {
        src: [
          "<banner:meta.banner>",
          "lib/caress.js"
        ],
        dest: "dist/<%= pkg.name.split('-')[0] %>-<%= pkg.version %>.js"
      }
    },
    min: {
      dist: {
        src: [
          "<banner:meta.banner>",
          "<config:concat.dist.dest>"
        ],
        dest: "dist/<%= pkg.name.split('-')[0] %>-<%= pkg.version %>.min.js"
      }
    },
    lint: {
      src: "lib/**/*.js",
      grunt: "grunt.js",
      tests: "test/**/*.js"
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        forin: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        regexp: true,
        undef: true,
        trailing: true,
        boss: true,
        browser: true,
        jquery: true,
        node: true
      },
      globals: {},
      grunt: {
        options: this.options,
        globals: {
          task: true,
          config: true,
          file: true,
          log: true,
          template: true}
      },
      src: {
        options: this.options,
        globals: {
          _: true,
          Caress: true,
          io: true}
      },
      tests: {
        options: this.options,
        globals: {
          module: true,
          chai: true,
          mocha: true,
          Caress: true,
          io: true}
      }
    },
    watch: {
      files: [
        "<config:lint.src>",
        "<config:lint.grunt>",
        "<config:lint.tests>"
      ],
      tasks: "lint concat min"
    }
  });

  grunt.loadNpmTasks('grunt-mocha');

  // Alias 'test' to 'mocha' so you can run `grunt test`
  grunt.registerTask('test', 'mocha:all');

  // Default task.
  grunt.registerTask("default", "concat min test");

};