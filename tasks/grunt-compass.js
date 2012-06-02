module.exports = function( grunt ) {

    // Create a new task.
    grunt.registerTask( 'compass', 'This triggers the `compass compile` command.', function() {

        var exec = require('child_process').exec,
            command = "compass compile",
            src = grunt.config('compass.src'),
            dest = grunt.config('compass.dest');

        if (src !== undefined &&
            dest !== undefined) {
            command += ' --sass-dir="' + src + '" --css-dir="' + dest + '"';
        }

        function puts( error, stdout, stderr ) {

            grunt.log.write( '\n\nCOMPASS output:\n' );
            grunt.log.write( stdout );
            grunt.log.error( stderr );

            if ( error !== null ) {
                grunt.log.error( error );
            }
        }

        exec( command, puts );
        grunt.log.write( '`' + command + '` was initiated.' );
    });
};