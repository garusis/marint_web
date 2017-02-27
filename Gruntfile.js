module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      bower: {
        files: ['/development/components/*', '/development/components/**/', '/development/components/**/*'],
        tasks: ['clean:development', 'copy:development', 'less:development'],
        options: {
          spawn: false
        }
      },
      less_modules: {
        files: ['./development/modules/**/*.less'],
        tasks: ['less:development_own'],
        options: {
          spawn: false
        }
      },
      js_modules: {
        files: ['./development/modules/**/*.js'],
        tasks: [],
        options: {
          spawn: false
        }
      },
      livereload: {
        files: [
          '/development/components/*', '/development/components/**/', '/development/components/**/*',
          './development/modules/**/*.less', './development/modules/**/*.js'
        ],
        tasks: [],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },
    clean: {
      development: {
        src: [
          "./development/assets/**/*.css",
          "./development/assets/**/*.css.map",
          "./development/assets/**/*.js",
          "./development/assets/**/*.js.map",
          "./development/assets/fonts/Simple-Line-Icons.*",
          "./development/assets/fonts/FontAwesome.*",
          "./development/assets/fonts/fontawesome-webfont.*",
          "./development/assets/fonts/slick.*",
          "!./development/assets/stylesheets/google-fonts.css",
          "!./development/assets/stylesheets/mediaelement/*",
          "!./development/assets/stylesheets/ngDialog*",
          "!./development/assets/stylesheets/icon-font.css",
          "!./development/assets/stylesheets/jquery-ui.css",
          "!./development/assets/stylesheets/rs-plugin-themepunch-settings.css",
          "!./development/assets/js/html5shiv.js",
          "!./development/assets/js/jquery.themepunch.revolution.min.js",
          "!./development/assets/js/mediaelement-and-player.min.js",
          "!./development/assets/js/ngDialog.min.js",
          "!./development/assets/js/jquery.themepunch.tools.min.js",
          "!./development/assets/js/respond.min.js",
          "!./development/assets/js/custom.js",
          "!./development/assets/js/jquery.gmap3.min.js",
          "!./development/assets/js/plugins.js"
        ]
      }
    },
    copy: {
      development: {
        files: [
          {
            expand: true,
            src: [
              './development/components/bootstrap/dist/css/bootstrap.min.css',
              './development/components/bootstrap/dist/css/bootstrap.min.css.map',
              './development/components/animate.css/animate.min.css',
              './development/components/simple-line-icons/css/simple-line-icons.css',
              './development/components/font-awesome/css/font-awesome.min.css',
              './development/components/owl.carousel/dist/assets/owl.carousel.min.css',
              './development/components/owl.carousel/dist/assets/owl.theme.default.min.css',
              './development/components/angular-socialshare/angular-socialshare.min.css'
            ],
            dest: './development/assets/stylesheets/',
            flatten: true,
            filter: 'isFile'
          },
          {
            expand: true,
            src: [
              './development/components/simple-line-icons/fonts/*',
              './development/components/font-awesome/fonts/*',
              './development/components/slick-carousel/slick/fonts/*'
            ],
            dest: './development/assets/fonts/',
            flatten: true,
            filter: 'isFile'
          },
          {
            expand: true,
            src: [
              './development/components/slick-carousel/slick/ajax-loader.gif'
            ],
            dest: './development/assets/images/',
            flatten: true,
            filter: 'isFile'
          },
          {
            expand: true,
            src: [
              './development/components/jquery/dist/jquery.min.js',
              './development/components/jquery/dist/jquery.min.map',
              './development/components/bootstrap/dist/js/bootstrap.min.js',
              './development/components/angular/angular.min.js',
              './development/components/angular/angular.min.js.map',
              './development/components/lodash/lodash.min.js',
              './development/components/jg-origins-manager/dist/jg-origins-manager.min.js',
              './development/components/ngstorage/ngStorage.min.js',
              './development/components/angular-ui-router/release/angular-ui-router.min.js',
              './development/components/angular-ui-router.stateHelper/statehelper.min.js',
              './development/components/angular-resource/angular-resource.min.js',
              './development/components/angular-resource/angular-resource.min.js.map',
              './development/components/owl.carousel/dist/owl.carousel.js',
              './development/components/owl.carousel/dist/owl.carousel.min.js',
              './development/components/slick-carousel/slick/slick.min.js',
              './development/components/angular-slick-carousel/dist/angular-slick.min.js',
              './development/components/angular-filter/dist/angular-filter.min.js',
              './development/components/angular-sanitize/angular-sanitize.min.js',
              './development/components/angular-socialshare/angular-socialshare.min.js',
              './development/components/html2canvas/build/html2canvas.min.js',
              './development/components/angular-bootstrap/ui-bootstrap-tpls.min.js',
              './development/components/angular-animate/angular-animate.min.js'
            ],
            dest: './development/assets/js/',
            flatten: true,
            filter: 'isFile'
          }
        ]
      },
      example: {
        files: [
          // includes files within path
          {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

          // includes files within path and its sub-directories
          {expand: true, src: ['path/**'], dest: 'dest/'},

          // makes all src relative to cwd
          {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

          // flattens results to a single level
          {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      development: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    injector: {
      options: {
        // Task-specific options go here.
      },
      development: {
        // Target-specific file lists and/or options go here.
      }
    },
    less: {
      development: {
        options: {},
        files: {
          "./development/assets/stylesheets/educa.css": "./development/assets/less/educa.less",
          "./development/assets/stylesheets/slick.css": "./development/assets/less/slick.less"
        }
      },
      development_own: {
        options: {},
        files: {
          "./development/assets/stylesheets/modules.css": "./development/modules/**/*.less"
        }
      },
      production: {
        options: {
          paths: ["assets/css"],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
            new (require('less-plugin-clean-css'))({
              advanced: true,
              compatibility: 'ie8'
            })
          ],
          modifyVars: {
            imgPath: '"http://mycdn.com/path/to/images"',
            bgColor: 'red'
          }
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
      }
    },
    'string-replace': {
      production: {
        files: {
          './development/index.html': './development/index.html'
        },
        options: {
          replacements: [
            {
              pattern: '<base href="http://localhost/marlininternacional_web/development/" target="_self">',
              replacement: '<base href="http://marlininternaciona.com" target="_self">'
            }
          ]
        }
      }
    },
    concurrent: {
      watch: {
        tasks: ['watch:bower', 'watch:less_modules', 'watch:js_modules', 'watch:livereload'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // para posiblemente reemplazar los valores del originsManager en desarrollo con los de produccion.
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default task(s).
  grunt.registerTask('buildAssets', ['clean:development', 'copy:development', 'less:development', 'less:development_own']);
  grunt.registerTask('default', ['buildAssets', 'concurrent:watch']);
  //grunt.registerTask('default', ['clean:development', 'copy:development', 'less:development']);
  grunt.registerTask('production', ['uglify']);
};