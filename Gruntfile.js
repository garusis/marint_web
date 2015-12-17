module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            development: {
                src: ["./development/assets/**/*.css", "!./development/**/.gitkeep"]
            },
            example: {
                src: ["path/to/dir/one", "path/to/dir/two"]
            }
        },
        copy: {
            development: {
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
                    "path/to/result.css": "path/to/source.less"
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
    grunt.registerTask('default', ['clean:development']);
    //grunt.registerTask('default', ['clean:development', 'copy:development', 'less:development']);
    grunt.registerTask('production', ['uglify']);
};