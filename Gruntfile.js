'use strict'
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  const fs = require("fs")

  let filesToUglify = [], jsToConcat = [], cssToConcat = []

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
        files: ['./development/modules/assets/less/educa.less', './development/modules/**/*.less'],
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
          './development/modules/**/*.less', './development/modules/**/*.js', './development/modules/**/*.html'
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
              './development/components/slick-carousel/slick/fonts/*',
              './development/assets/static_fonts/*'
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
              './development/components/lodash/dist/lodash.min.js',
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
              './development/components/angular-animate/angular-animate.min.js',
              './development/components/angular-recaptcha/release/angular-recaptcha.min.js'
            ],
            dest: './development/assets/js/',
            flatten: true,
            filter: 'isFile'
          }
        ]
      },
      production: {
        files: [
          {expand: true, cwd: "development/assets/fonts", src: ['**/*'], dest: './production/assets/fonts/'},
          {expand: true, cwd: "./development/assets/images", src: ['**/*'], dest: './production/assets/images/'},
          {expand: true, cwd: "./development/modules", src: ['**/*.html'], dest: './production/modules/'}
        ]
      }
    },
    uglify: {
      options: {},
      production: {
        files: [
          {
            expand: true,
            src: filesToUglify,
            dest: 'pre-production/',
            rename: function (dst, src) {
              return dst+"/"+src.replace(/development\//, "");
            }
          }
        ]
      }
    },
    concat: {
      options: {
        process: (src, filepath)=> `//Filename: '${filepath}'\n${src};\n\n`
      },
      production: {
        src: jsToConcat,
        dest: 'production/assets/scripts.min.js',
      },
    },
    cssmin: {
      production: {
        files: [{
          src: cssToConcat,
          dest: 'production/assets/styles.min.css'
        }]
      }
    },
    injector: {
      options: {
        addRootSlash: false,
        ignorePath: "production/"
      },
      production: {
        files: {
          'production/index.html': ['production/**/*.js', 'production/**/*.css'],
        }
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
          './production/index.html': './development/index.html',
          './development/modules/bootstrap/configBootstrap.js': './development/modules/bootstrap/configBootstrap.js',
          './development/modules/bootstrap/runBootstrap.js': './development/modules/bootstrap/runBootstrap.js'
        },
        options: {
          replacements: [
            {
              pattern: '<base href="http://localhost:8887/" target="_self">',
              replacement: `<base href="${process.env.HOST_URL}/" target="_self">`
            },
            {
              pattern: 'originsManagerProvider.setOrigin("base", "http://localhost:3000");',
              replacement: `originsManagerProvider.setOrigin("base", "${process.env.BACKEND_URL}");`
            },
            {
              pattern: '<script src="//localhost:35729/livereload.js"></script>',
              replacement: ""
            },
            {
              pattern: '$FB.init("1006298296180905");',
              replacement: `$FB.init("${process.env.FB_APP_ID}");`
            }
          ]
        }
      },
      development: {
        files: {
          './production/index.html': './development/index.html',
          './production/modules/bootstrap/configBootstrap.js': './development/modules/bootstrap/configBootstrap.js'
        },
        options: {
          replacements: [
            {
              pattern: '<base href="http://localhost:8887/" target="_self">',
              replacement: `<base href="${process.env.HOST_URL}/" target="_self">`
            },
            {
              pattern: 'originsManagerProvider.setOrigin("base", "http://localhost:3000");',
              replacement: `originsManagerProvider.setOrigin("base", "${process.env.BACKEND_URL}");`
            },
            {
              pattern: '<script src="//localhost:35729/livereload.js"></script>',
              replacement: ""
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // para posiblemente reemplazar los valores del originsManager en desarrollo con los de produccion.
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask("ugly-scripts", function () {
    let indexFile = fs.readFileSync("development/index.html", "utf-8");
    let injectorSegment = indexFile.match(/<!-- injector:js -->((.|\n)*)<!-- endinjector:js -->/)[0]
    injectorSegment.match(/src="(.*)"/g).forEach(function (src) {
      src = src.replace(/src="(.*)"/, "$1")
      filesToUglify.push(`development/${src}`)
      jsToConcat.push(`pre-production/${src}`)
    })

    injectorSegment = indexFile.match(/<!-- injector:css -->((.|\n)*)<!-- endinjector:css -->/)[0]
    injectorSegment.match(/href="(.*)"/g).forEach(function (src) {
      cssToConcat.push(src.replace(/href="(.*)"/, "development/$1"))
    })
  })

  // Default task(s).
  grunt.registerTask('buildAssets', ['clean:development', 'copy:development', 'less:development', 'less:development_own']);
  grunt.registerTask('heroku:production', ["buildAssets", "string-replace:production", "ugly-scripts", "uglify:production", "concat:production", "cssmin:production", "injector:production", "copy:production"])
  grunt.registerTask('heroku:development', ["buildAssets", "string-replace:development", "ugly-scripts", "uglify:production", "concat:production", "cssmin:production", "injector:production", "copy:production"])
  grunt.registerTask('test', ["ugly-scripts", "cssmin:production"])
  grunt.registerTask('default', ['buildAssets', 'concurrent:watch']);
};