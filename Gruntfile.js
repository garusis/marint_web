module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                    "!./development/assets/stylesheets/google-fonts.css",
                    "!./development/assets/stylesheets/icon-font.css",
                    "!./development/assets/stylesheets/jquery-ui.css",
                    "!./development/assets/stylesheets/rs-plugin-themepunch-settings.css",
                    "!./development/assets/js/html5shiv.js",
                    "!./development/assets/js/jquery.themepunch.revolution.min.js",
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
                            './development/components/font-awesome/css/font-awesome.min.css'
                        ],
                        dest: './development/assets/stylesheets/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: [
                            './development/components/simple-line-icons/fonts/*',
                            './development/components/font-awesome/fonts/*'
                        ],
                        dest: './development/assets/fonts/',
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
                    "./development/assets/stylesheets/educa.css": "./development/assets/less/educa.less"
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
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // para posiblemente reemplazar los valores del originsManager en desarrollo con los de produccion.
    grunt.loadNpmTasks('grunt-string-replace');

    // Default task(s).
    grunt.registerTask('default', ['clean:development', 'copy:development','less:development']);
    //grunt.registerTask('default', ['clean:development', 'copy:development', 'less:development']);
    grunt.registerTask('production', ['uglify']);
};